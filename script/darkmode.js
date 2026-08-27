
let darkModeBtn = document.getElementById("darkModeToggle");
if (localStorage.getItem("darkMode") == "on") {
    document.body.classList.add("dark-mode");
    darkModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
} else {
    darkModeBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
}

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");

    if (isDarkMode) {
        darkModeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        localStorage.setItem("darkMode", "on");
    } else {
        darkModeBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
        localStorage.setItem("darkMode", "off");
    }

});