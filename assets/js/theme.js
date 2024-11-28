// Handles all the theme (light/dark) functions and operations for example: Image theme variants, etc. (theme toggle is in footer.html)

// Handle image theme variants (assumes that all images by default are light theme)
function handleImageAsPerTheme() {
    // Find out the current theme
    const isThemeDark = document.body.className.includes("dark"); // Header.html handles user preference (local storage) so we can directly check the body class
    const themeSrc = isThemeDark ? 'data-src-dark' : 'data-src-light'; // Get the attribute name theme variants

    // Get all images that support current theme
    const images = document.querySelectorAll(`img[${themeSrc}]`);
    console.log(images);

    images.forEach(image => {
        // Replace the src with the theme specific src
        image.src = image.getAttribute(themeSrc);
    });
}

// Attach the function to the theme toggle event
document.getElementById("theme-toggle").addEventListener("click", handleImageAsPerTheme);
// Call the function on initial load
handleImageAsPerTheme(); // limitation: if user pref theme is opposite to default, images will flicker
