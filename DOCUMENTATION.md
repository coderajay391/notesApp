# Notes App — Documentation

## Overview

This is a lightweight **front-end Notes App** built with plain HTML/CSS/JavaScript.

- Users can type a note in the textarea
- Add the note to the notes list
- Delete notes
- Keyboard shortcuts are supported for faster entry

> Notes are not persisted (refreshing the page clears the list).

## UI / Behavior

### Add Note

- **Mouse:** Click **Add Me**
- **Keyboard:**
  - **Enter** in the textarea → adds the note
  - **Shift + Enter** → inserts a new line (does not add)
  - **Ctrl + Enter** (Windows/Linux) or **⌘ + Enter** (macOS) → adds the note

If the textarea is empty, the app alerts: **“Please write something before saving!”**

### Delete Note

Each note item includes a **Delete** button.

- Clicking **Delete** removes that note element from the DOM.

## Code Structure

- `index.html`
  - App markup: container, title, textarea, save button, and notes list
- `style.css`
  - Dark modern responsive styling
- `script.js`
  - DOM wiring, add-note logic, delete logic, and keyboard handling

## Keyboard Handling (script.js)

- A single `addNote()` function is used by both:
  - the button click handler
  - the textarea `keydown` handler

`keydown` rules:

- If `(Ctrl/⌘) + Enter` → prevent default → `addNote()`
- If `Enter` and **not** `Shift` → prevent default → `addNote()`
- If `Shift + Enter` → allow default (newline)

## Running the App

1. Open `frontend/spireX/notesApp/index.html` in any browser.
2. Use the textarea and add/delete notes.

## Future Improvements (optional)

Possible enhancements include:

- Persist notes in `localStorage`
- Editing existing notes
- Sorting / searching notes
- Count / timestamps per note
