/*************************************************************************
 * @function Dialog Box Action Button CLICK handler
 * @Desc
 * When the user clicks on the primary action button in a dialog box, we
 * perform the corresponding action, close the dialog box; restore
 * the navigation bar buttons; show the mode tabs; restore the
 * current mode's main page; and set the focus to the current mode's
 * action button. We use currentMode to determine which mode we're in.
 * @global currentMode: index of current mode
 * @global modeTabsContainer: the <div> containing the mode tab buttons
 * @global modeTabPanels: array of tab panels for each mode
 * @global modeActionDialogs: array of dialog boxes for each mode
 * @global dialogActionButtons: array of default ("OK") buttons for
 * each mode's dialog box
 *************************************************************************/
for (let i = 0; i < GlobalDialogActionButtons.length; ++i) {
    GlobalDialogActionButtons[i].addEventListener("click",function(e) {
        //Hide dialog box
        GlobalModeActionDialogs[i].classList.add("hidden");
        //Show tab panel
        GlobalModeTabPanels[i].classList.remove("hidden");
        //Show and enable other UI elements
        GlobalMenuBtn.classList.remove("disabled");
        GlobalSearchBtn.classList.remove("disabled");
        GlobalProfileBtn.classList.remove("disabled");
        GlobalSkipLink.classList.remove("hidden");
        GlobalModeTabsContainer.classList.remove("disabled");
        //Set focus to floating action button
        GlobalModeActionButtons[i].focus();
        //TO DO: Implement mode-specific functionality
        if (GlobalHistoryLogging) {
            history.back();
            console.log("Console: In GlobalDialogActionButtons click handler; moving history stack pointer to previous frame.");
        }
    });
}
