// ===== COMPONENT LOADER =====
function loadComponent(id, file) {
    fetch(file)
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

    // ===== COMMON COMPONENTS =====
    loadComponent("header", "components/header.html");
    loadComponent("menu", "components/menu.html");
    loadComponent("footer", "components/footer.html");


    // ===== HOME PAGE =====
    if (document.getElementById("categories")) {
        loadComponent("categories", "components/categories.html");
    }

    if (document.getElementById("stats")) {
        loadComponent("stats", "components/stats.html");
    }

    if (document.getElementById("consultation")) {
        loadComponent("consultation", "components/consultation-form.html");
    }


    // ===== PRODUCT MENU (SAFE) =====
    if (document.getElementById("product-menu")) {
        loadComponent("product-menu", "components/product-menu.html");
    }


    // ===== LOADER REMOVE =====
    const loader = document.getElementById("loader");

    if (loader) {
        window.addEventListener("load", function () {
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 300);
        });
    }

});


// ===== PRODUCT PANEL SYSTEM (SAFE VERSION) =====

function openCategory(type){

    const panel = document.getElementById("productPanel");
    const data = document.getElementById("panelData");

    if (!panel || !data) return; // ❗ error avoid

    panel.classList.add("active");
    document.body.classList.add("panel-open");

    if(type === "wire"){
        data.innerHTML = `
        <h3>Wire & Cable Machinery</h3>
        <ul>
            <li>Take Up Machine</li>
            <li>Pay Off Machine</li>
            <li>Wire Drawing Machine</li>
            <li>Coiling Machine</li>
        </ul>
        `;
    }

    if(type === "automation"){
        data.innerHTML = `
        <h3>Automation Products</h3>
        <ul>
            <li>Control Panel</li>
            <li>PLC System</li>
            <li>Sensor Based System</li>
        </ul>
        `;
    }

}

function closePanel(){
    const panel = document.getElementById("productPanel");
    if (!panel) return;

    panel.classList.remove("active");
    document.body.classList.remove("panel-open");
}
