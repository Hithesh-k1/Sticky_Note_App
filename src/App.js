import React, { useState } from "react";
import AddNoteButton from "./components/AddNoteButton/AddNoteButton";
import Note from "./components/Note/Note";
import "./App.css";
export default function App() {
  const initialData = [
    { id: 1, title: "Todo 1", notes: "Add FAB for add notes" },
    {
      id: 2,
      title: "Todo 2",
      notes: "Implement Created Date for notes feature",
    },
    { id: 3, title: "Todo 3", notes: "Implement Save notes feature" },
  ];
  const [notes, setNotes] = useState(initialData);

  const onDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const onAddNote = (note) => {
    note.id = notes.length + 1;
    setNotes([...notes, note]);
  };

  return (
    <div className="parent">
      <h1 className="header">Sticky-notes</h1>
      <div className="content">
        <Note notes={notes} onDeleteNote={onDeleteNote} />
      </div>
      <div className="add-notes">
        <AddNoteButton notes={notes} onAddNote={onAddNote} />
      </div>
    </div>
  );
}
