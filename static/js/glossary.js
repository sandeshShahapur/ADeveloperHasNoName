function openModal(term, uniqueId) {
    var modal = document.getElementById("modal-" + term + "-" + uniqueId);
    modal.style.display = "inline";
}

function closeModal(term, uniqueId) {
    var modal = document.getElementById("modal-" + term + "-" + uniqueId);
    modal.style.display = "none";
}

// Prevent closing outer modal when interacting with inner modal
document.querySelectorAll('.glossary-modal').forEach(function(modal) {
    modal.onclick = function(event) {
        event.stopPropagation(); // Stop the event from propagating to parent modals
    };
});

// Close modal when clicking outside of it
window.onclick = function(event) {
    var glossary_terms = document.getElementsByClassName('glossary-term');
    var modals = document.getElementsByClassName('glossary-modal');

    var is_glossary_term = false;
    for (var j = 0; j < glossary_terms.length; j++) {
        if (event.target === glossary_terms[j]) {
            is_glossary_term = true;
        }
    }

    for (var i = 0; i < modals.length; i++) {
        if (event.target !== modals[i] && !is_glossary_term) {
            modals[i].style.display = "none";
        }
    }
}
