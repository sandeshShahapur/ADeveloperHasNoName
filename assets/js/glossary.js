const BASE_URL = window.location.origin;

const GLOSSARY_CACHE_KEY = "glossaryCache";
const GLOSSARY_CACHE_LAST_FETCH_KEY = "glossaryCacheLastFetch";


async function fetchGlossaryData() {
    // manually store last time glossary data was edited in project
    // TODO: automate this process
    const lastEdited = new Date("November 21, 2024 14:30:00").getTime();

    const now = new Date().getTime();
    const cachedData = localStorage.getItem(GLOSSARY_CACHE_KEY);
    const lastFetch = localStorage.getItem(GLOSSARY_CACHE_LAST_FETCH_KEY);

    if (
        environment === "production" &&
        cachedData &&
        lastFetch && parseInt(lastFetch) > lastEdited
    ) {
        return JSON.parse(cachedData);
    }

    const response = await fetch("/data/glossary.json");
    const glossaryData = await response.json();

    localStorage.setItem(GLOSSARY_CACHE_KEY, JSON.stringify(glossaryData));
    localStorage.setItem(GLOSSARY_CACHE_LAST_FETCH_KEY, now);

    return glossaryData;
}


function getDefinition(term, glossaryData) {
    return glossaryData[term.toLowerCase()];
}


function processGlossaryDefinitionText(tree_id, tree_node_id, definition, glossaryData) {
    let child_num = -1;

    const glossaryPattern = new RegExp(
        '\\{\\{\\s*<\\s*glossary term="?([^"\\s]+)"?(?:\\s+displayTerm="?((?:(?!"?\\s+>\\s*\\}\\}).)+)"?)?\\s*>\\s*\\}\\}',
        "g"
    );
    definition = definition.replace(glossaryPattern, (_, term, displayTerm) => {
        child_num = child_num + 1;
        const termDefinition = getDefinition(term, glossaryData);
        const displayText = (displayTerm || term).trim();

        // modal has to receive tree_id and tree_node_id through glossary-term
        return termDefinition
            ? `<span class="glossary-term" glossary-data-tree-id="${tree_id}" glossary-data-tree-node-id="${tree_node_id},${child_num}" glossary-data-term="${term}" onclick="fetchAndRenderGlossaryDefinition(this)">${displayText}</span>`.trim()
            : displayText;
    });

    const refPattern = new RegExp('\\[([^\\]]+)\\]\\(\\s*\\{\\{\\s*%\\s*ref\\s+\\"?([^\\"]+)\\"?\\s*%\\s*}}\\s*\\)', "g");
    definition = definition.replace(refPattern, (_, text, absUrl) => {
        const displayText = text || absUrl;
        absUrl = absUrl.split("").filter(char => !["(", ")"].includes(char)).join("");

        if (!absUrl.startsWith("/")) absUrl = "/" + absUrl;
        return `<a href="${BASE_URL+absUrl}" target="_blank" rel="noopener">${displayText}</a>`;
    });

    const boldPattern = new RegExp("\\*\\*([^**]+)\\*\\*", "g");
    definition = definition.replace(boldPattern, "<strong>$1</strong>");

    const hrPattern = new RegExp('\\{\\{\\s*<\\s*hr\\s*>\\s*\\}\\}')
    definition = definition.replace(hrPattern, '<br><svg height="2" width="100%"><line x1="0" y1="0" x2="100%" y2="0" style="stroke:#ccc;stroke-width:2"/></svg><br>');

    const hrSpanPattern = new RegExp('\\{\\{\\s*<\\s*hr-span\\s*>\\s*\\}\\}')
    definition = definition.replace(hrSpanPattern, '<span style="display: block; width: 100%; height: 1px; background-color: rgb(30, 30, 30); margin: 0.5rem 0;"></span>');

    return definition;
}


function isModalOpen(tree_id, tree_node_id) {
    const tree_nodes = document.querySelectorAll(`[m-glossary-data-tree-id="${tree_id}"]`);
    return Array.from(tree_nodes).some(
        node => node.getAttribute("m-glossary-data-tree-node-id") === tree_node_id
    );
}


function prepareModal(modal, isTermImage, tree_id, tree_node_id, processedDefinition) {
    modal.classList.add("glossary-modal");
    modal.setAttribute("style", `max-width: ${ isTermImage? "100vw" : "300px"}`);
    // Add tree_id and tree_node_id to the modal to close all child modals
    modal.setAttribute("m-glossary-data-tree-id", tree_id);
    modal.setAttribute("m-glossary-data-tree-node-id", tree_node_id);

    modal.innerHTML = `
        <div class="glossary-modal-content">
            <p>${processedDefinition}</p>
            <span class="glossary-modal-close" onclick="closeGlossaryModal(this)">&times;</span>
        </div>
    `;
}


function positionModal(isTermImage, modal, element) {
    const rect = element.getBoundingClientRect();
    const modalWidth = 300; // isTermImage ? window.innerWidth : 300; // TODO or use modal.offsetWidth after showing
    const rightSpace = window.innerWidth - rect.right;
    const bottomSpace = window.innerHeight - rect.bottom;

    let topPosition = rect.bottom + window.scrollY;
    let leftPosition = rect.left + window.scrollX;

    if (rightSpace < modalWidth) {
        leftPosition = window.innerWidth - modalWidth - 20;
    }

    leftPosition = Math.max(0, Math.min(leftPosition, window.innerWidth - modalWidth));

    modal.style.top = `${topPosition}px`;
    modal.style.left = `${leftPosition}px`;
}


async function fetchAndRenderGlossaryDefinition(element) {
    const term = element.getAttribute("glossary-data-term");
    const isTermImage = term.startsWith("diag-");
    const tree_id = element.getAttribute("glossary-data-tree-id"); // unique global ID for a glossary tree
    const tree_node_id = element.getAttribute("glossary-data-tree-node-id"); // local ID for the glossary node in the tree

    // ensures idempotency
    if (isModalOpen(tree_id, tree_node_id)) return;

    const glossaryData = await fetchGlossaryData();
    let definition = getDefinition(term, glossaryData);

    if (!definition) {
        // TODO give option to create issue on github or mail the author
        showAlert("Definition not found!");
        return;
    }

    // Process the definition text for nested glossary terms
    const processedDefinition = processGlossaryDefinitionText(tree_id, tree_node_id, definition, glossaryData);

    // Create the modal
    const modal = document.createElement("div");
    prepareModal(modal, isTermImage, tree_id, tree_node_id, processedDefinition);
    positionModal(isTermImage, modal, element);

    document.body.appendChild(modal);
}


function getChildrenGlossaryModals(modal) {
    let childModals = []; // Array to store child modals (including the modal itself)

    const tree_id = modal.getAttribute("m-glossary-data-tree-id");
    const tree_nodes = document.querySelectorAll(`[m-glossary-data-tree-id="${tree_id}"]`);


    const tree_node_id = modal.getAttribute("m-glossary-data-tree-node-id");
    childModals = Array.from(tree_nodes).filter(
        node => node.getAttribute("m-glossary-data-tree-node-id").startsWith(tree_node_id)
    );

    childModals.push(modal);
    return childModals;
}


function closeGlossaryModal(modal) {
    if (modal.classList.contains("glossary-modal-close")) {
        modal = modal.closest(".glossary-modal");
    }

    const childGlossaryModals = getChildrenGlossaryModals(modal);
    childGlossaryModals.forEach(modal => modal.remove());
}


// Handle outside clicks to close modals
setTimeout(() => {
    window.addEventListener("click", function closeOnOutsideClick(event) {
        var glossary_terms = document.getElementsByClassName("glossary-term");
        var modals = document.getElementsByClassName("glossary-modal");


        // Do not close any modal if a glossary term is clicked
        for (var j = 0; j < glossary_terms.length; j++) if (event.target === glossary_terms[j]) return;

        // Do not close any modal if a modal is clicked
        for (var i = 0; i < modals.length; i++) if (modals[i].contains(event.target)) return;
        // Handling bug or something that closes all modals if clicked on a modal's close button
        if (event.target.classList.contains("glossary-modal-close")) return;

        // Close all modals if clicked outside of any modal
        Array.from(modals).forEach(modal => modal.remove());
    });
}, 0);


function showAlert(message) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.top = "10px";
    alertBox.style.left = "10%";
    alertBox.style.width = "80%";
    alertBox.style.backgroundColor = "#ffcccc";
    alertBox.style.color = "#990000";
    alertBox.style.padding = "10px";
    alertBox.style.textAlign = "center";
    alertBox.style.fontWeight = "500";
    alertBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    alertBox.style.zIndex = "1000";

    document.body.appendChild(alertBox);

    // Remove the alert after 3 seconds
    setTimeout(() => {
        alertBox.remove();
    }, 3000);
}
