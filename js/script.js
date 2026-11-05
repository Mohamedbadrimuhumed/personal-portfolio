
// Find the theme button
const themeButton = document.querySelector("#theme-toggle");

// Listen for button clicks
themeButton.addEventListener("click", () => {

    // Toggle dark theme
    document.body.classList.toggle("dark-theme");

    // Update button text
    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }

});
