# Branch README - feature/infrastructure
**Name:** Luke

## Atomic Commits:
- bf36222 Add global CSS utility classes and link window.js infrastructure script
- dd61163 Link main.js and document.js in index.html to enable script execution for app logic
- d8c7dea Add <main> element to index.html to provide a semantic container for dynamic application content
- fb646de Create document.js utility script to manage global DOMContentLoaded events and app initialization
- 8d19b34 Update CSS variables in :root to provide theme colors and side-menu dimensions for consistent UI styling
- 15e3148 Add .gitignore to exclude environment-specific and OS-generated files from the repository

## Infrastructure Components:
- Created `scripts/document.js` as a utility for DOMContentLoaded events.
- Added semantic `<main>` container to `index.html`.
- Linked `main.js`, `document.js`, and `window.js` in the footer.
- Added global CSS utility classes (focus, hidden, disabled).
