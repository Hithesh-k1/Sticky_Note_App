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
      <div key={note.id}>
        <center>
          <textarea
            placeholder="title.."
            className="form-control"
            type="text"
            title="title"
            value={note.title}
            onChange={handleInputChange}
          />
        </center>
        {/* <textarea
          placeholder="Note.."
          className="form-control"
          type="text"
          title="notes"
          value={note.notes}
          onChange={handleInputChange}
        /> */}

        <div class="form-floating">
          <textarea
            id="floatingTextarea"
            placeholder="Note.."
          className="form-control"
          type="text"
          title="notes"
          value={note.notes}
          onChange={handleInputChange}
          ></textarea>
          {/* <label for="floatingTextarea">Comments</label> */}
        </div>

        <button className="btn btn-primary">Update note</button>
        <button
          onClick={() => props.setEditing(false)}
          className="btn btn-danger"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditNote;
