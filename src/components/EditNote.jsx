import React, { useState, useEffect } from "react";

const EditNote = (props) => {

  const [note, setNote] = useState(props.currentNote);

  useEffect(() => {
    setNote(props.currentNote);
  }, [props]);
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = (event) => {
    const { title, value } = event.target;

    setNote({ ...note, [title]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateNote(note.id, note);
      }}
    >
      <div className="note" key={note.id}>
        <center>
          <label>Title</label>
          <input
            type="text"
            title="title"
            value={note.title}
            onChange={handleInputChange}
          />
        </center>
        <label>Note</label>
        <input
          type="text"
          title="notes"
          value={note.notes}
          onChange={handleInputChange}
        />

        <button>Update note</button>
        <button
          onClick={() => props.setEditing(false)}
          className="button muted-button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditNote;
