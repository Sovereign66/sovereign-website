// ===== COMPONENT LOADER =====
function loadComponent(id, file) {

    fetch("/" + file)   // 🔥 FIX: absolute path
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

    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});
