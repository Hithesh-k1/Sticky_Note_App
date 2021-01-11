import React from "react";
import Draggable from "react-draggable";
import "../note.css";
export default function Notes(props) {

  return (
    <div className="container">
      {
        // props.notes.length > 0 ? (
        props.notes.map((note,i) => (
          <Draggable>
            <div>
              <div className="note" key={i}>
                <i
                  onClick={() => props.deleteNote(note.id)}
                  className="fas fa-times"
                  style={{ float: "right" }}
                ></i>
                <h2>{note.title}</h2>
                <p style={{ fontSize: "25px" }}>{note.notes}</p>

                <i
                  onClick={() => {
                    props.editRow(note);
                  }}
                  className="far fa-edit"
                  style={{ height: "25px" }}
                />
              </div>
            </div>
          </Draggable>
        ))
      }

      {/* // )
      //  : (
      //   <span colSpan={3}>No notes</span>
      )} */}
    </div>
  );
}
