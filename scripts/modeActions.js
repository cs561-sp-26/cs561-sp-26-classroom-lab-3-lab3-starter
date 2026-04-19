/*************************************************************************
 * File: modeActions.js
 * Desc: Contains the JavaScript functions to respond to interactions 
 * with the UI elements in each mode.
*************************************************************************/

/*************************************************************************
 * @function Mode Floating Action Button CLICK handler 
 * @Desc 
 * When the user clicks on the action button in the current mode, we 
 * present the corresponding action dialog box; disable the 
 * navigation bar buttons; and hide the mode tabs. We use currentMode
 * to determine which action dialog box to display.
 * @global currentMode: index of current mode
 * @global modeTabsContainer: the <div> containing the mode tab buttons
 * @global modeTabPanels: array of tab panels for each mode
 * @global modeActionDialogs: array of dialog boxes for each mode
 * @global dialogActionButtons: array of default ("OK") buttons for
 * each mode's dialog box
 *************************************************************************/

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

/*************************************************************************
 * @function Dialog Box Cancel Button CLICK handler 
 * @Desc 
 * When the user clicks on the cancel button in a dialog box, we
 * close the dialog box; restore the navigation bar buttons; 
 *  show the mode tabs; restore the current mode's main page; and set the 
 * focus to the current mode's action button. We use currentMode to 
 * determine which mode we're in.
 * @global currentMode: index of current mode
 * @global modeTabsContainer: the <div> containing the mode tab buttons
 * @global modeTabPanels: array of tab panels for each mode
 * @global modeActionDialogs: array of dialog boxes for each mode
 * @global dialogActionButtons: array of default ("OK") buttons for
 * each mode's dialog box
 *************************************************************************/
/* Dialog Cancel Button Click Handler */

/*************************************************************************
 * @function keyDownDialogFocused
 * @Desc 
 * When the user issues a keypress when a dialog box is open,
 * we need to see if it is a tab or escape. If tab, we ensure that the
 * user stays within the dialog. If escape, we cancel out of dialog.
 * @param e, the keyboard event. e.code gives code of key pressed.                  
 * @global modeActionDialogs: array of dialog boxes for each mode
 * @global dialogActionButtons: array of default ("OK") buttons for
 * each mode's dialog box
 * @global dialogCancelButtons: array of cancel buttons for
 * each mode's dialog box
 *************************************************************************/

function keyDownDialogFocused(e) {

}