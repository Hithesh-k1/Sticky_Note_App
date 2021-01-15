import React, { Fragment } from "react";
import "./AddNoteButton.css";
export default function AddNoteButton(props) {
  const { notes, onAddNote } = props;
  return (
    <Fragment>
      <div className="fab-add-button">
        <input type="checkbox" onChange={() => onAddNote(notes)} />
        <div className="fab">
          <i className="fas fa-plus" />
        </div>
      </div>
    </Fragment>
  );
}
