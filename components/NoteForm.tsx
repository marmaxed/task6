import React, { useState } from "react";

interface NoteFormProps {
  onAdd: (content: string) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ onAdd }) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (content.trim()) {
      onAdd(content.trim());
      setContent("");
    }
  };

  return (
    <div>
      <textarea
        placeholder="Введите заметку..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
      />
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  );
};

export default NoteForm;