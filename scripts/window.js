/********************************************************
 * @function restoreState
 * @descr Restores application state based on the state object 
 ********************************************************/
function restoreState(state) {
  console.log('Console: In restoreState: state:', JSON.stringify(state), 
              " & GlobalDialogClose = ", GlobalDialogClose);
  GlobalHistoryLogging = false;
  if (GlobalDialogClose) {
    GlobalDialogClose.click();
    GlobalDialogClose = null;
  }
  switch (state.page) {
    case "MODE_DIALOG":
      GlobalModeActionButtons[state.mode].click();
      GlobalDialogClose = GlobalDialogCancelButtons[state.mode];
    break;
    case "ACTIVITY_FEED":
    case "ROUNDS":
    case "COURSES":
    case "BUDDIES":;
      GlobalModeTabButtons[state.mode].click();
      GlobalModeTabButtons[state.mode].focus();
      break;
    default:
      console.log('restoreState not implemented for this page value:', state.page);
      break;  
  }
  GlobalHistoryLogging = true;
}

window.addEventListener('load', (event) => {
  GlobalModeTabButtons[0].click();
});


window.addEventListener('popstate', (event) => {
    if (!event.state) return;
    restoreState(event.state);
});
