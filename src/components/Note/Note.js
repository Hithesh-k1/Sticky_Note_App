import React from "react";
import Draggable from "react-draggable";
import "./Note.css";
export default function Note(props) {
  const { onDeleteNote, notes } = props;

  const RenderNote = ({ note }) => {
    return (
      <div className="note" key={note.id}>
        <i
          onClick={() => onDeleteNote(note.id)}
          className="fas fa-times"
          style={{ float: "right" }}
        />
        <h2 contentEditable="true">{note.title}</h2>
        <p contentEditable="true" style={{ fontSize: "25px" }}>
          {note.notes}
        </p>
      </div>
    );
  };
  console.log(props);

  return (
    <div className="container">
      {notes.map((note, i) => (
        <Draggable>
          <div>
            <RenderNote note={note} onDeleteNote={onDeleteNote} />
          </div>
        </Draggable>
      ))}
    </div>
  );
}
