import { Container, Grid, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NoteCard from "../Components/NoteCard";
export default function Notes() {
  const [notes, setNotes] = useState([]);

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
      <Grid spacing={3} container>
        {notes.map((note) => {
          return (
            <Grid key={note.id} item xs={12} lg={4} sm={6} md={3}>
              <NoteCard deleteNote={deleteNote} note={note} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
