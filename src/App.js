import React, { useState, Fragment } from "react";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";
import Notes from "./components/Notes";
import "./App.css";

const App = () => {
  // Data
  const usersData = [
    { id: 1, title: "Todo 1", notes: "build CI/CD pipeline using jenkins" },
    { id: 2, title: "Todo 2", notes: "Integrate Jenkins with Sonarqube " },
    { id: 3, title: "Todo 3", notes: "Deploy to AWS S3" },
  ];

  const initialFormState = { id: null, title: "", notes: "" };

  const [notes, setNotes] = useState(usersData);
  const [currentNote, setCurrentNote] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addNote = (note) => {
    note.id = notes.length + 1;
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setEditing(false);
    setNotes(notes.filter((note) => note.id !== id));
  };

  const updateNote = (id, updatedUser) => {
    setEditing(false);

    setNotes(notes.map((note) => (note.id === id ? updatedUser : note)));
  };

  const editRow = (note) => {
    setEditing(true);

    setCurrentNote({ id: note.id, title: note.title, notes: note.notes });
  };

  console.log(editing,"--------------------")
  return (

    <div className='parent' >
      <div>
        <h1 className='header'>Sticky-notes</h1>
      </div>
        <div className='content' >
          {editing ? (
            <Fragment>
              <h2>Edit note</h2>

              <EditNote
                editing={editing}
                setEditing={setEditing}
                currentNote={currentNote}
                updateNote={updateNote}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Note</h2>

              <AddNote addNote={addNote} />
            </Fragment>
          )}
        </div>
        <div className='add-notes'>

        <div className="container">
          <Notes notes={notes} editRow={editRow} deleteNote={deleteNote} />
        </div>
        </div>
    </div>
  );
};

export default App;
