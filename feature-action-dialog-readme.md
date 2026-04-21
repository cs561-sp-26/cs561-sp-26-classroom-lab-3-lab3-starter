# CS 561 Lab 3: Branch feature/action-dialog

## Branch Author
Adrien Protzel (934043865)

## Summary of Work Done in this Branch
Added in dialog buttons in index file. First commit replaced the previous floating buttons which made a conflict to resolve. I then cherry picked the floating buttons back in from the other branch. I then rebased this branch onto main. 

## Commits

| Commit ID | Commit Message | # Lines Changed
| --------- | ----------- | ---------------
8ace4d2 | added flt buttons and css | 21
ac9f7c6 | added dialogue buttons | 3
b52f09f | added dialogue buttons | 7
7af9b11 | added flt buttons and css | 66
9563e44 | Added my name to README | 10

### Total Commits Made in this Branch: 5

### Merge Conflict Description
In this branch, I had a merge conflict when cherry-picking commit `8ace4d2` from the `feature/interactive-components` branch into my current branch. Both the cherry-picked commit and my previous commit attempted to add changes to the same area of the file. I resolved the conflict by keeping both sets of changes and finished with the `git cherry-pick --continue` command. The commit ID for the cherry-pick merge is `7af9b11`.

### Rebase Description
In this branch, I rebased the `feature/interactive-components` branch onto the `main` branch to pull in my teammate's recent changes. The latest commit ID for this branch after the rebase is `b52f09f`.

### Cherry Pick Description
In this branch, I cherry-picked commit `8ace4d2` from the `feature/interactive-components` branch. This commit added the flt buttons and css. I brought it over into this branch because I knew the commit affected the same files and wanted to bring the changes in early to make the main merge request easier later. Also had the added benefit of triggering a merge conflict which I could resolve and fulfill the requirements of the assignment.