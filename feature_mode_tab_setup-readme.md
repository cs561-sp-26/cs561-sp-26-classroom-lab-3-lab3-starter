# CS 561 Lab 3: Branch `<<feature/mode_tab_setup>>`

## Branch Author
Daniel Kish (Danielhk832)

## Summary of Work Done in this Branch

created the modeTabs.js file and modeActions.js file. added the switchMode function to the modeActions.js file, which is responsible for switching between the different modes (scorecard, map, and stats) when a tab is clicked. I also added a click handler for the floating action button to toggle the visibility of the mode tabs. Finally, I added a keydown event handler to allow users to navigate between the mode tabs using the keyboard.

## Commits

| Commit ID | Commit Message                                                                              | # Lines Changed
| --------- |---------------------------------------------------------------------------------------------| ---------------
| ed9a9ae8cf3b6330cf0eabd332b3a426ea0cc78a | add modeTabs.js file, and modeActions.js file and switchMode function within modeAction.js  | 44
| fcd47aa79a63fc17913a512bd49d141c13c62dd0 | moved switchMode function to modeTabs.js, was included in modeActions.js by mistake. have also added the floating action button click handler to the modeActions.js file                                                        | +77 -41
| 68d4f000d2237ab7706fb0f601ad8253be022934 | eadded for loop to bind switchMode() to each tab's click handler. updated README.md | +15 -8
| 16ca8e1d31cb1e90a7f3b518af27fd69266af776 | added keyDFownModeTabFocused function. created the branch readme for this branch.                                                        | +70

### Total Commits Made in this Branch: 4

### Merge Conflict Description (Delete if not applicable)
In this branch, I encountered a merge conflict when merging the `feature/mode_tab_setup` branch into the `main` branch. The conflict occurred in the `README.md` file on lines 3-21. I resolved the conflict by keeping the changes from both branches and modifying the code to work together. The commit ID for this merge is `3fda6b0adbb252bd1a664450d2a646d91e6163be`.

### Cherry Pick Description (Delete if not applicable)
In this branch, I cherry-picked the commit `5678901` from the `feature/new-feature` branch into the `main` branch. The commit added a new feature to calculate speed score. I resolved any conflicts that arose during the cherry-pick process by modifying the code in the `speed_score.js` file to work with the changes made in the `main` branch.
