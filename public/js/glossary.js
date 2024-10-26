const GLOSSARY_CACHE_KEY = "glossaryCache";
const GLOSSARY_CACHE_EXPIRATION_KEY = "cacheExpiration";

async function fetchGlossaryData() {
    const now = new Date().getTime();
    const cachedData = localStorage.getItem(GLOSSARY_CACHE_KEY);
    const cacheExpiration = localStorage.getItem(GLOSSARY_CACHE_EXPIRATION_KEY);

    if (cachedData && cacheExpiration && now < parseInt(cacheExpiration)) {
        return JSON.parse(cachedData);
    }

    const response = await fetch("/data/glossary.json");
    const glossaryData = await response.json();

    if (environment === "production") {
        localStorage.setItem(GLOSSARY_CACHE_KEY, JSON.stringify(glossaryData));
        localStorage.setItem(
            GLOSSARY_CACHE_EXPIRATION_KEY,
            now + 24 * 60 * 60 * 1000
        );
    }
    return glossaryData;
}

function getDefinition(term, glossaryData) {
    return glossaryData[term.toLowerCase()];
}

function processGlossaryDefinitionText(tree_id, tree_node_id, definition, glossaryData) {
    let child_num = -1;
    const glossaryPattern = new RegExp(
        '\\{\\{\\s*<\\s*glossary term="([^"]+)"(?:\\s+displayTerm="([^"]+)")?\\s*>\\s*\\}\\}',
        "g"
    );

    return definition.replace(glossaryPattern, (_, term, displayTerm) => {
        child_num = child_num + 1;
        const termDefinition = getDefinition(term, glossaryData);

        // modal has to receive tree_id and tree_node_id through glossary-term
        return termDefinition
            ? `<span class="glossary-term" glossary-data-tree-id="${tree_id}" glossary-data-tree-node-id="${tree_node_id},${child_num}" glossary-data-term="${term}" onclick="fetchAndRenderGlossaryDefinition(this)">${
                  displayTerm || term
              }</span>`
            : `${displayTerm || term}`;
    });
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
    const tree_id = element.getAttribute("glossary-data-tree-id");
    const tree_node_id = element.getAttribute("glossary-data-tree-node-id");

    // ensures idempotency
    if (isModalOpen(tree_id, tree_node_id)) return;

    const glossaryData = await fetchGlossaryData();
    let definition = getDefinition(term, glossaryData);

    if (!definition) {
        alert("Definition not found!");
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