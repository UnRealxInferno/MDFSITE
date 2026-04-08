/* M.D.F PMC — Minimal JS */
(function () {
  "use strict";

  // Scroll-based navbar styling
  var navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Mobile menu toggle
  var toggle = document.getElementById("mobile-toggle");
  var menu = document.getElementById("mobile-menu");
  var menuIcon = document.getElementById("menu-icon");
  var closeIcon = document.getElementById("close-icon");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      if (menuIcon) menuIcon.style.display = isOpen ? "none" : "block";
      if (closeIcon) closeIcon.style.display = isOpen ? "block" : "none";
    });

    // Close mobile menu when a link is clicked
    var links = menu.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        menu.classList.remove("open");
        if (menuIcon) menuIcon.style.display = "block";
        if (closeIcon) closeIcon.style.display = "none";
      });
    }
  }
})();
