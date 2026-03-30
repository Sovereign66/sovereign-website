// ===== COMPONENT LOADER =====
function loadComponent(id, file) {

    fetch("/" + file)   // absolute path fix
        .then(response => {
            if (!response.ok) throw new Error("File not found: " + file);
            return response.text();
        })
        .then(data => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = data;
        })
        .catch(error => console.log("Error loading:", file));
}


// ===== DOM READY =====
document.addEventListener("DOMContentLoaded", function () {

    // COMMON COMPONENTS
    loadComponent("header", "components/header.html");
    loadComponent("menu", "components/menu.html");
    loadComponent("footer", "components/footer.html");


    // HOME PAGE SECTIONS
    if (document.getElementById("categories")) {
        loadComponent("categories", "components/categories.html");
    }

    if (document.getElementById("stats")) {
        loadComponent("stats", "components/stats.html");
    }

    // ❌ CONSULTATION REMOVE (IMPORTANT)
    // loadComponent("consultation", "components/consultation-form.html");


    // LOADER REMOVE
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";

});


// ===== PAGE LOADED CLASS =====
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});
