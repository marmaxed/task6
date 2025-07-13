import React, { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";
import type { Note } from "./models/ProjectModels";

const API_URL = "http://localhost:7070/notes";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAdd = async (content: string) => {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: 0, content }),
    });
    fetchNotes();
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchNotes();
  };

  return (
    <div>
      <h2>Notes</h2>
      <NoteForm onAdd={handleAdd} />
      <button onClick={fetchNotes}>Обновить</button>
      <div>
        {notes.map(note => (
          <NoteCard key={note.id} note={note} onDelete={() => handleDelete(note.id)} />
        ))}
      </div>
    </div>
  );
};

export default App;