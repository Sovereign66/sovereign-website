// ===== COMPONENT LOADER =====
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = data;
        })
        .catch(error => console.log("Error loading:", file));
}

// ===== LOAD AFTER DOM READY =====
document.addEventListener("DOMContentLoaded", function () {

    // HEADER + MENU + FOOTER
    loadComponent("header", "components/header.html");
    loadComponent("menu", "components/menu.html");
    loadComponent("footer", "components/footer.html");

    // HOME PAGE
    if (document.getElementById("categories")) {
        loadComponent("categories", "components/categories.html");
    }

    if (document.getElementById("stats")) {
        loadComponent("stats", "components/stats.html");
    }

    if (document.getElementById("consultation")) {
        loadComponent("consultation", "components/consultation-form.html");
    }

    // LOADER REMOVE
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});

document.body.classList.add("loaded");

