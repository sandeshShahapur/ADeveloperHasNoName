document.addEventListener('DOMContentLoaded', function() {
    const glossaryTerms = document.querySelectorAll('.glossary-term');

    glossaryTerms.forEach(function(term) {
        term.addEventListener('mouseenter', function() {
            term.removeAttribute('title');
        });

        term.addEventListener('mouseleave', function() {
            // Reapply the title attribute
            term.setAttribute('title', term.getAttribute('data-title'));
        });
    });
});
