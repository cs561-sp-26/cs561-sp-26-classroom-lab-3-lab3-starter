 /*************************************************************************
 * @function keyDownModeTabFocused 
 * @Desc 
 * Handles valid keydown events when a mode tab button has the focus, 
 * Left and Right Arrow change the focus to the previous and 
 * next tab; Home and End change the focus to the first and last tab; 
 * Enter or Space selects the currently focused tab.
 * @param key: the string corresponding the key pressed
 * @global modeTabButtons: array of HTML mode tab button elements
 * @global focusedMode: index (into modeTabButtons) of currently focused
 * mode tab
 * @global currentMode: index (into modeTabButtons) of current mode
 *************************************************************************/
 function keyDownModeTabFocused(key) {
    if (key =="Enter" || key =="Space") {
      //Switch to mode corresponding to tab with current focus
      switchMode(GlobalFocusedMode.get()); 
    } else if (key =="ArrowRight") { //shift focus to next mode tab
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set((GlobalFocusedMode.get() + 1) % GlobalModeTabButtons.length); 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");
        GlobalModeTabButtons[GlobalFocusedMode.get()].focus();  
    }  else if (key == "ArrowLeft") { //shift focus to prev mode tab    
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set((GlobalFocusedMode.get() - 1 + 
            GlobalModeTabButtons.length) % GlobalModeTabButtons.length); 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");
        GlobalModeTabButtons[GlobalFocusedMode.get()].focus(); 
    } else if (key =="Home") { //shift focus to first mode tab
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set(0); 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");
        GlobalModeTabButtons[GlobalFocusedMode.get()].focus(); 
    } else if (key =="End") { //shift focus to last mode tab    
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.get() = modeTabButtons.length - 1; 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");
        GlobalModeTabButtons[GlobalFocusedMode.get()].focus();  
    } else if (key == "Tab") { //Reset focus to current mode tab   
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","-1");
        GlobalFocusedMode.set(GlobalCurrentMode.get()); 
        GlobalModeTabButtons[GlobalFocusedMode.get()].setAttribute("tabindex","0");  
    }  
}