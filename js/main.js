// ===== COMPONENT LOADER =====
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.log("Error loading:", file));
}

// ===== COMMON COMPONENTS (ALL PAGES) =====
loadComponent("header", "components/header.html");
loadComponent("menu", "components/menu.html");
loadComponent("footer", "components/footer.html");

// ===== HOME PAGE ONLY COMPONENTS =====
if (document.getElementById("categories")) {
    loadComponent("categories", "components/categories.html");
}

if (document.getElementById("stats")) {
    loadComponent("stats", "components/stats.html");
}

if (document.getElementById("consultation")) {
    loadComponent("consultation", "components/consultation-form.html");
}
