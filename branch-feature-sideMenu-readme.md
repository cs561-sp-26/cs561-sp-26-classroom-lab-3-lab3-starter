# CS 561 Lab 3: Branch `feature/sideMenu`

## Branch Author
Huanqi Bao (CassanBob)

## Summary of Work Done in this Branch
This branch implements the side menu feature for the application. The work includes adding a menu button click handler to toggle the side menu open and closed, implementing click handlers for global menu items, and adding full keyboard navigation support for both the menu button and individual menu items. Additionally, the HTML structure for the side menu was added to `index.html`, along with the corresponding script reference.

## Commits

| Commit ID | Commit Message | # Lines Changed
| --------- | ----------- | ---------------
| 4115105 | add menuBtn click handler | 33 |
| 1969560 | add GlobalMenuItems click handler | 14 |
| dc54fb5 | add keyDownMenuItemFocused | 38 |
| c60e377 | add keyDownMenuBtnFocused | 22 |
| a3d396a | add side menu HTML structure | 13 |

### Total Commits Made in this Branch: 5

### Merge Conflict Description (Delete if not applicable)
When opening a pull request to merge `feature/sideMenu` into `main`, GitHub detected a conflict in `index.html`. This occurred because other team members had made changes to `index.html` on `main` after my branch diverged. I resolved the conflict using the GitHub web editor, keeping the changes from both branches by carefully integrating the side menu HTML structure with the existing content. The PR is commit `a3d396a` ("add side menu HTML structure").

### Rebase Description (Delete if not applicable)
In this branch, I rebased `feature/sideMenu` onto `origin/main` twice to incorporate upstream changes made by other team members. I ran `git pull origin main --rebase` to replay my commits on top of the updated main branch. After each rebase, the remote history had diverged from the local branch, so I used `git push --force` to update the remote `feature/sideMenu` branch.

### Cherry Pick Description (Delete if not applicable)
In this branch, I cherry-picked commit `97215e3` (`add keyDownMenuBtnFocused`) from the local `BtnFocused` branch into `feature/sideMenu`. The `BtnFocused` branch had been created as a temporary workspace for developing the keyboard handler for the menu button. A merge conflict arose in `scripts/sideMenu.js` during the cherry-pick, which I resolved manually before completing the cherry-pick with `git cherry-pick --continue`. The resulting commit ID is `c60e377`.