import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import NoteCard from "../Components/NoteCard";
export default function Notes() {
  const [notes, setNotes] = useState([]);
  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  useEffect(() => {
    fetch(" http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const deleteNote = async (id) => {
    const res = await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });
    const data = await res.json();
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <NoteCard deleteNote={deleteNote} note={note} />
            </div>
          );
        })}
      </Masonry>
    </Container>
  );
}
