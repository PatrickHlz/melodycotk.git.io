// Variable pour stocker l'état actuel du sidebar (ouvert ou fermé)
var isSidebarOpen = false;

// Fonction pour ouvrir ou fermer le sidebar
function toggleSidebar() {
    var nav = document.getElementById("mySidenav");

    // Inverse l'état du sidebar (ouvert -> fermé, fermé -> ouvert)
    isSidebarOpen = !isSidebarOpen;

    // Déplace le sidebar en fonction de son état
    if (isSidebarOpen) {
        nav.style.left = "0";
    } else {
        nav.style.left = "-150px";
    }
}

// Fonction pour fermer le sidebar lorsque la souris n'est plus dessus
function closeSidebar() {
    var nav = document.getElementById("mySidenav");

    // Ferme le sidebar seulement s'il est actuellement ouvert
    if (isSidebarOpen) {
        toggleSidebar();
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var sideTrigger = document.getElementById("sideTrigger");
    var mySidenav = document.getElementById("mySidenav");

   
    sideTrigger.addEventListener("mouseenter", function() {
        if (!isSidebarOpen) {
            toggleSidebar();
        }
    });

    mySidenav.addEventListener("mouseleave", function() {
        closeSidebar();
    });

   
    sideTrigger.addEventListener("mouseenter", function() {
        if (!isSidebarOpen) {
            toggleSidebar();
        }
    });
});


