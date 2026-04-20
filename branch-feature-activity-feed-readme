# CS 561 Lab 3: Branch `feature/activity_feed`

## Branch Author
Huanqi Bao (CassanBob)

## Summary of Work Done in this Branch
This branch implements the Activity Feed feature for the application. The work includes adding the Feed mode tab button and its corresponding Activity Feed tab panel to `index.html`, adding a New Post dialog for the Feed mode, adding all necessary script references to `index.html`, moving `window.js` into the `scripts/` folder, and applying general code formatting improvements. The branch was kept up to date with `main` via rebase throughout development.

## Commits

| Commit ID | Commit Message | # Lines Changed |
| --------- | -------------- | --------------- |
| f211426 | add reference of sideMenu.js to html | 1 |
| f0e4f83 | Code Formatting, make it close to final version standard | 47 |
| 3a612be | add Feed mode tab button and Activity Feed tab panel | 43 |
| f75f327 | add Feed mode New Post dialog | 18 |
| 2b68039 | add all script references to index.html | 4 |
| 95d5f2a | format correction | 2 |
| 884c58d | move window.js to scripts folder | 2 |

### Total Commits Made in this Branch: 7

### Merge Conflict Description
When opening a pull request to merge `feature/activity_feed` into `main`, GitHub detected a conflict in `index.html`. This occurred because other team members had concurrently modified `index.html` on `main`. I resolved the conflict using the GitHub web editor, integrating my changes (adding the sideMenu.js script reference) with the upstream modifications. The PR is commit `f211426` ("add reference of sideMenu.js to html").

### Rebase Description
In this branch, I rebased `feature/activity_feed` onto `origin/main` to incorporate upstream changes made by other team members. I ran `git pull origin main --rebase`, which fast-forwarded the branch cleanly onto the updated main without conflicts. An earlier rebase attempt did produce a conflict in `styles/style.css`; I aborted that attempt with `git rebase --abort`, reset the branch with `git reset --hard HEAD~1`, and re-committed the changes in a cleaner way before rebasing again successfully.