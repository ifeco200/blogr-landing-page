"use strict";

// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.querySelector(".menu_toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {

    const isOpen = menuToggle.classList.toggle("open");

    navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// =========================================
// DROPDOWN MENUS
// =========================================

const dropdownButtons = document.querySelectorAll(".nav_dropdown");

dropdownButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const currentItem = button.closest(".nav_item");

        const isAlreadyOpen = currentItem.classList.contains("active");


        // Close every dropdown first

        document.querySelectorAll(".nav_item").forEach((item) => {

            item.classList.remove("active");

        });


        // Open the selected dropdown if it was closed

        if (!isAlreadyOpen) {

            currentItem.classList.add("active");

        }

    });

});


// =========================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================================

document.addEventListener("click", (event) => {

    const clickedInsideNavigation = navigation.contains(event.target);

    const clickedMenuButton = menuToggle.contains(event.target);


    if (!clickedInsideNavigation && !clickedMenuButton) {

        navigation.classList.remove("open");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        document.querySelectorAll(".nav_item").forEach((item) => {

            item.classList.remove("active");

        });

    }

});


// =========================================
// CLOSE WITH ESCAPE KEY
// =========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navigation.classList.remove("open");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );


        document.querySelectorAll(".nav_item").forEach((item) => {

            item.classList.remove("active");

        });

    }

});


// =========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// =========================================

const navigationLinks = navigation.querySelectorAll(".dropdown_menu a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =========================================
// RESET MENU WHEN SCREEN SIZE CHANGES
// =========================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navigation.classList.remove("open");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");


        document.querySelectorAll(".nav_item").forEach((item) => {

            item.classList.remove("active");

        });

    }

});