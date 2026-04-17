/*************************************************************************
 * File: sideMenu.js
 * These functions support interaction with the side menu.
 ************************************************************************/

document.getElementById("menuBtn")
 .addEventListener("click", function (e) {
    const sideMenu = document.getElementById("sideMenu");
    const sideMenuIcon = document.getElementById("menuBtnIcon");
    const sideMenuBtn = document.getElementById("menuBtn");
    
    if (sideMenuIcon.classList.contains("fa-bars")) { //OPEN MENU
        sideMenuIcon.classList.remove("fa-bars");
        sideMenuIcon.classList.add("fa-times");
        sideMenuBtn.setAttribute("aria-expanded","true");
        sideMenu.classList.add("sidemenu-open");
    } else { //CLOSE MENU
        sideMenuIcon.classList.remove("fa-times");
        sideMenuIcon.classList.add("fa-bars");
        sideMenuBtn.setAttribute("aria-expanded","false");
        sideMenu.classList.remove("sidemenu-open");
    }
});

// GlobalMenuItems click handler
for (let i = 0; i < GlobalMenuItems.length; ++i) {
    GlobalMenuItems[i].addEventListener("click", function(e) {
        document.getElementById("menuBtn").click();
    });
}
