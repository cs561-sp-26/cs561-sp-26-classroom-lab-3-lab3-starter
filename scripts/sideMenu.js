const GlobalMenuBtn = document.getElementById("menuBtn");
const GlobalMenuItems = document.querySelectorAll("#sideMenu li");

document.getElementById("menuBtn")
  .addEventListener("click", function () {
    const sideMenu = document.getElementById("sideMenu");
    const sideMenuIcon = document.getElementById("menuBtnIcon");
    const sideMenuBtn = document.getElementById("menuBtn");

    if (sideMenuIcon.classList.contains("fa-bars")) {
        sideMenuIcon.classList.remove("fa-bars");
        sideMenuIcon.classList.add("fa-times");

        sideMenuBtn.setAttribute("aria-expanded","true"); 
        sideMenu.classList.add("sidemenu-open");

    } else {
        sideMenuIcon.classList.remove("fa-times");
        sideMenuIcon.classList.add("fa-bars");

        sideMenuBtn.setAttribute("aria-expanded","false");
        sideMenu.classList.remove("sidemenu-open");
    }
});