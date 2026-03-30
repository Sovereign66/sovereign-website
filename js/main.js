// ===== COMPONENT LOADER =====
function loadComponent(id, file) {

    // 🔥 AUTO PATH FIX (important)
    let path = window.location.pathname.includes("/products/")
        ? "../" + file
        : file;

    fetch(path)
        .then(response => {
            if (!response.ok) throw new Error("File not found: " + path);
            return response.text();
        })
        .then(data => {
            const el = document.getElementById(id);
            if (el) el.innerHTML = data;
        })
        .catch(error => console.log("Error loading:", path));
}


// ===== DOM READY =====
document.addEventListener("DOMContentLoaded", function () {

    loadComponent("header", "components/header.html");
    loadComponent("menu", "components/menu.html");
    loadComponent("footer", "components/footer.html");

    if (document.getElementById("categories")) {
        loadComponent("categories", "components/categories.html");
    }

    if (document.getElementById("stats")) {
        loadComponent("stats", "components/stats.html");
    }

    if (document.getElementById("consultation")) {
        loadComponent("consultation", "components/consultation-form.html");
    }

    if (document.getElementById("product-menu")) {
        loadComponent("product-menu", "components/product-menu.html");
    }

    // loader remove
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";

});
