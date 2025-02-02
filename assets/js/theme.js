// Handles all the theme (light/dark) functions and operations for example: Image theme variants, etc. (theme toggle is in footer.html)

function switchSrcTheme(image, newSrcTheme) {
    image.src = image.getAttribute(newSrcTheme);
}

let initialLoad = true;
// Handle image theme variants (assumes that all images by default are light theme)
function handleImageAsPerTheme() {

    // Find out the current theme
    const isThemeDark = document.body.className.includes("dark"); // Header.html handles user preference (local storage) so we can directly check the body class
    const themeSrc = isThemeDark ? 'data-src-dark' : 'data-src-light'; // Get the attribute name theme variants

    // Get all images that support current theme
    const images = document.querySelectorAll(`img[${themeSrc}]`);

    // Handle the limitation (lint 45) - Fade out the image after which the src will be replaced and then fade in
    images.forEach(image => {
        // If the image is already in the correct theme, skip it
        if (image.getAttribute("src") === image.getAttribute(themeSrc)) return;

        if (initialLoad) {
            image.style.transition = "opacity 1s";
            image.style.opacity = 0;

            // Replace the src with the theme specific src
            setTimeout(() => {
                switchSrcTheme(image, themeSrc);
                image.style.opacity = 1;
            }, 1000);
        } else {
            switchSrcTheme(image, themeSrc);
        }
    });

    initialLoad = false;
}

// Attach the function to the theme toggle event
document.getElementById("theme-toggle").addEventListener("click", handleImageAsPerTheme);
// Call the function on initial load
handleImageAsPerTheme(); // limitation: if user pref theme is opposite to default, images will flicker
