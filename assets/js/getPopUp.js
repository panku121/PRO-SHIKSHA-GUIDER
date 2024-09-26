// Get the modal
var modal = document.getElementById("myModal");

function openModelButton() {
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to toggle menu visibility
document.getElementById("menu-toggle").addEventListener("click", function () {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
});

// Function to close the menu when clicking outside or on menu links
document.addEventListener("click", function (event) {
    var menu = document.getElementById("menu");
    var menuToggle = document.getElementById("menu-toggle");

    // If the click happens outside the menu and it's not on the menu toggle, hide the menu
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove("open");
    }
});

// Function to close the menu when clicking on a menu item
var menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        document.getElementById("menu").classList.remove("open");
    });
});