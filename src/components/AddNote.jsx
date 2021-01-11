import React, { useState } from "react";

export const AddNote = (props) => {
  const initialFormState = { id: null, title: "", notes: "" };
  const [note, setNote] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { title, value } = event.target;

    setNote({ ...note, [title]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!note.title || !note.notes) return;

        props.addNote(note);
        setNote(initialFormState);
      }}
    >
      <div className="note" key={note.id}>
        <center>
          <label>Title</label>

          <input
            className="form-control"
            type="text"
            title="title"
            value={note.title}
            onChange={handleInputChange}
          />
        </center>
        <label>Notes</label>

        <textarea
        style={{height:'60%'}}
          className="form-control"
          type="text"
          title="notes"
          value={note.notes}
          onChange={handleInputChange}
        />
        <button className="btn btn-success" >Add Note</button>
      </div>
      <div class="textarea-group mb-3"></div>
    </form>
  );
};

export default AddNote;
