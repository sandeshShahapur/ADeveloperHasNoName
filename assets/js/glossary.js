// When a glossary term is clicked, fetch the glossary data, find the definition of the term, process the definition text (for nested glossary terms, markdown, etc.), and render a modal with the definition.

const BASE_URL = window.location.origin; // "https://adeveloperhasnoname.dev"

const GLOSSARY_CACHE_KEY = "glossaryCache";
const GLOSSARY_CACHE_LAST_FETCH_KEY = "glossaryCacheLastFetch";


async function fetchGlossaryData() {
    // The last edited epoch of the glossary data. This is used to check if the glossary data has been updated since the client last fetched it. It is automatically updated when the yaml glossary data is updated by script.
    const lastEditedEpoch = 1732436272627;
    const lastEdited = new Date(lastEditedEpoch).getTime();

    const now = new Date().getTime();
    const cachedData = localStorage.getItem(GLOSSARY_CACHE_KEY);
    const lastFetch = localStorage.getItem(GLOSSARY_CACHE_LAST_FETCH_KEY);

    // If the glossary data has been updated since client last fetched it, fetch it again (given env is production)
    if (
        environment === "production" && // environment is set in the baseOf.html
        cachedData &&
        lastFetch && parseInt(lastFetch) > lastEdited
    ) {
        return JSON.parse(cachedData);
    }


    // if the glossary data has been updated since client last fetched it, fetch it again, cache it, and return it
    const response = await fetch("/data/glossary.json");
    const glossaryData = await response.json();

    localStorage.setItem(GLOSSARY_CACHE_KEY, JSON.stringify(glossaryData));
    localStorage.setItem(GLOSSARY_CACHE_LAST_FETCH_KEY, now);

    return glossaryData;
}


function getDefinition(term, glossaryData) {
    // glossaryData is an object with term as key (lowercase) and definition as value
    return glossaryData[term.toLowerCase()];
}


function processGlossaryDefinitionText(tree_id, tree_node_id, definition, glossaryData) {
    let child_num = -1; // to keep track of the child number of the glossary term

    // Matches glossary terms and captures the term (with optional quotes) and display term (optional).
    const glossaryPattern = new RegExp(
        '\\{\\{\\s*?<\\s*?glossary term="?([^"\\s]+?)"?(?:\\s+?displayTerm="?((?:(?!"?\\s+?>\\s*?\\}\\}).)+)"?)?\\s*?>\\s*?\\}\\}',
        "g"
    );
    definition = definition.replace(glossaryPattern, (_, term, displayTerm) => {
        child_num = child_num + 1;
        const termDefinition = getDefinition(term, glossaryData);
        const displayText = (displayTerm || term).trim();

        // modal has to receive tree_id and tree_node_id through glossary-term
        return `
            <span
                class="glossary-term" glossary-data-tree-id="${tree_id}"
                glossary-data-tree-node-id="${tree_node_id},${child_num}"
                glossary-data-term="${term}"
                aria-haspopup="dialog"
                onclick="fetchAndRenderGlossaryDefinition(this)
            ">
                ${displayText}
            </span>
        `.trim()
    });

    // Matches markdown ref links (with optional quotes) and replaces them with anchor tags. Note however if ref link contains whitespaces (even if within quotes), it won't be matched.
    const refPattern = new RegExp('\\[([^\\]]+?)\\]\\(\\s*?\\{\\{\\s*?%\\s*?ref\\s+?\\"?([^\\"\\s]+?)\\"?\\s*?%\\s*?}}\\s*?\\)', "g");
    definition = definition.replace(refPattern, (_, text, absUrl) => {
        const displayText = text || absUrl;

        // making link url friendly because hugo removes parentheses from file names in urls.
        // E.g. What-Is-OAuth-(2_0)-Definition-Use-Cases-and-How-it-Works -> BASE_URL/What-Is-OAuth-2_0-Definition-Use-Cases-and-How-it-Works
        absUrl = absUrl.split("").filter(char => !["(", ")"].includes(char)).join("");

        if (!absUrl.startsWith("/")) absUrl = "/" + absUrl;
        return `<a href="${BASE_URL+absUrl}" target="_blank" rel="noopener">${displayText}</a>`;
    });

    const boldPattern = new RegExp("\\*\\*([^**]+?)\\*\\*", "g");
    definition = definition.replace(boldPattern, "<strong>$1</strong>");

    const hrPattern = new RegExp('\\{\\{\\s*?<\\s*?hr\\s*?>\\s*?\\}\\}')
    definition = definition.replace(hrPattern, '<br><svg height="2" width="100%"><line x1="0" y1="0" x2="100%" y2="0" style="stroke:#ccc;stroke-width:2"/></svg><br>');

    const hrSpanPattern = new RegExp('\\{\\{\\s*?<\\s*?hr-span\\s*?>\\s*?\\}\\}')
    definition = definition.replace(hrSpanPattern, '<span style="display: block; width: 100%; height: 1px; background-color: rgb(30, 30, 30); margin: 0.5rem 0;"></span>');

    return definition;
}


function isModalOpen(tree_id, tree_node_id) {
    // fetches the tree nodes of `tree_id` and checks if any of them has the `tree_node_id`
    const tree_nodes = document.querySelectorAll(`[m-glossary-data-tree-id="${tree_id}"]`);
    return Array.from(tree_nodes).some(
        node => node.getAttribute("m-glossary-data-tree-node-id") === tree_node_id
    );
}


function prepareModal(modal, term, isTermImage, tree_id, tree_node_id, processedDefinition) {
    modal.classList.add("glossary-modal");
    modal.setAttribute("style", `max-width: ${ isTermImage? "100vw" : "300px"}`);

    // Add tree_id and tree_node_id to the modal to be able to close all child modals
    modal.setAttribute("m-glossary-data-tree-id", tree_id);
    modal.setAttribute("m-glossary-data-tree-node-id", tree_node_id);

    modal.innerHTML = `
        <div class="glossary-modal-header">
            <h5 class="glossary-modal-title">${term}</h5>
            <div class="glossary-modal-close" onclick="closeGlossaryModal(this)">&times;</div>
        </div>
        <p class="glossary-modal-content">${processedDefinition}</p>
    `;
}


function positionModal(element, isTermImage, definition, modal) {
    const rect = element.getBoundingClientRect(); // get the position of the element
     // isTermImage ? window.innerWidth : 300; // TODO or use modal.offsetWidth after showing
    const modalWidth = isTermImage ? window.innerWidth : 300; // for term, width of the modal is less than the smallest screen width we want to support (320px)
    let topPosition = rect.bottom + window.scrollY; // position the modal below the element

    let leftPosition;
    if (isTermImage) {
        // set modal width to min of image width and window width or if width is not specified, set it to 80% of window width. and center it.
        const widthPattern = /width="(\d+?)px"/;
        const widthMatch = definition.match(widthPattern);
        const modalWidth = widthMatch ? Math.min(parseInt(widthMatch[1]), window.innerWidth) : window.innerWidth * 0.8;
        leftPosition = (window.innerWidth - modalWidth) / 2;

        // TODO handle aspect ratio if width is altered. object-fit sucks, tried regexing definition with new calculated height but it's not working.
    } else {
        const rightSpace = window.innerWidth - rect.right; // space available to the right of the element
        leftPosition = rect.left + window.scrollX; // position the modal to the right of the element
            // If there is not enough space to the right of the element for the whole modal, try to position the modal with a right margin of 20px from the right edge of the window but if that makes the modal go off the left edge of the window, position it at left edge of the window
            if (rightSpace < modalWidth) {
                leftPosition = Math.max(0, window.innerWidth - modalWidth - 20);
            }
    }

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
    let processedDefinition = processGlossaryDefinitionText(tree_id, tree_node_id, definition, glossaryData);

    // Create the modal
    const modal = document.createElement("div");
    prepareModal(modal, term, isTermImage, tree_id, tree_node_id, processedDefinition);
    processedDefinition = positionModal(element, isTermImage, processedDefinition, modal); // i know, unclean but it's best way to handle height change

    document.body.appendChild(modal);
}


function getChildrenGlossaryModals(modal) {
    let childModals = []; // Array to store child modals (including the modal itself)

    // get all the tree nodes with the same tree_id as the modal
    const tree_id = modal.getAttribute("m-glossary-data-tree-id");
    const tree_nodes = document.querySelectorAll(`[m-glossary-data-tree-id="${tree_id}"]`);

    // the child modals are the ones whose tree_node_id starts with the modal's tree_node_id
    const tree_node_id = modal.getAttribute("m-glossary-data-tree-node-id");
    childModals = Array.from(tree_nodes).filter(
        node => node.getAttribute("m-glossary-data-tree-node-id").startsWith(tree_node_id)
    );

    childModals.push(modal);
    return childModals;
}


function closeGlossaryModal(modal) {
    // If the close button is clicked, get the parent modal
    if (modal.classList.contains("glossary-modal-close")) {
        modal = modal.closest(".glossary-modal");
    }

    const childGlossaryModals = getChildrenGlossaryModals(modal);
    childGlossaryModals.forEach(modal => modal.remove());
}


// Handle outside clicks to close modals
setTimeout(() => {
    window.addEventListener("click", function closeOnOutsideClick(event) {
        // Do not close any modal if a glossary term is clicked
        var glossary_terms = document.getElementsByClassName("glossary-term");
        for (var j = 0; j < glossary_terms.length; j++) if (event.target === glossary_terms[j]) return;

        // Do not close any modal if a modal is clicked
        var modals = document.getElementsByClassName("glossary-modal");
        for (var i = 0; i < modals.length; i++) if (modals[i].contains(event.target)) return;

        // Handling bug or something that closes all modals if clicked on a modal's close button
        if (event.target.classList.contains("glossary-modal-close")) return; // closGlossaryModal will handle this

        // As no glossary term or modal was clicked, close all modals
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
