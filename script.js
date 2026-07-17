// script.js
const saveBtn = document.getElementById("saveBtn");
const noteInput = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");

const addNote = () => {
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Please write something before saving!");
    return;
  }

  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  // Create note text
  const noteContent = document.createElement("span");
  noteContent.textContent = noteText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("deleteBtn");

  // Delete functionality
  deleteBtn.addEventListener("click", () => {
    notesList.removeChild(noteDiv);
  });

  // Append text + button to note
  noteDiv.appendChild(noteContent);
  noteDiv.appendChild(deleteBtn);

  notesList.appendChild(noteDiv);
  noteInput.value = ""; // clear input
  noteInput.focus();
};

// Button click
saveBtn.addEventListener("click", addNote);

// Keyboard input (textarea)
noteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addNote();
  }
});
