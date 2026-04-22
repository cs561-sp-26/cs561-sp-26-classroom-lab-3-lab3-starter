/*************************************************************************
 * File: sideMenu.js
 * These functions support interaction with the side menu.
 ************************************************************************/

/*************************************************************************
 * @function menuBtn click handler
 * @desc 
 * When the user clicks the menuBtn, open or close the side menu 
 * based on current menu state.
 *************************************************************************/
 document.getElementById("menuBtn")
   .addEventListener("click", function (e) {
    const sideMenu = document.getElementById("sideMenu");
    const sideMenuIcon = document.getElementById("menuBtnIcon");
    const sideMenuBtn = document.getElementById("menuBtn");
    if (sideMenuIcon.classList.contains("fa-bars")) { //OPEN MENU
        //Change menu icon
        sideMenuIcon.classList.remove("fa-bars");
        sideMenuIcon.classList.add("fa-times");
        //Open menu
        sideMenuBtn.setAttribute("aria-expanded","true"); 
        sideMenu.classList.add("sidemenu-open");

    } else { //CLOSE MENU
        //Change menu icon
        sideMenuIcon.classList.remove("fa-times");
        sideMenuIcon.classList.add("fa-bars");
        //Close menu
        sideMenuBtn.setAttribute("aria-expanded","false");
        sideMenu.classList.remove("sidemenu-open");
    }
});

/*************************************************************************
 * @function GlobalMenuItems click handler
 * @desc 
 * When the user clicks on a menu item, close the menu. 
 * This functionality is a placeholder; we will update later with more
 * specific functionality for each menu item.
 *************************************************************************/
for (let i = 0; i < GlobalMenuItems.length; ++i) {
    GlobalMenuItems[i].addEventListener("click",function(e) {
      GlobalMenuBtn.click();
    });
}