import React from "react";
import type { Note } from "../models/ProjectModels";

interface NoteCardProps {
  note: Note;
  onDelete: () => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onDelete }) => (
  <div>
    <button onClick={onDelete}>Удалить</button>
    <div>{note.content}</div>
  </div>
);

export default NoteCard;