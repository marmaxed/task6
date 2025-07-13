import React, { useState } from "react";

interface AddClockFormProps {
  onAdd: (city: string, timezone: number) => void;
}

const AddClockForm: React.FC<AddClockFormProps> = ({ onAdd }) => {
  const [city, setCity] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  const handleSubmit = () => {
    const offset = Number(timezone);
    if (!city.trim() || isNaN(offset)) return;
    onAdd(city.trim(), offset);
    setCity("");
    setTimezone("");
  };

  return (
    <div>
      <input
        placeholder="Город"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input
        placeholder="Смещение от GMT"
        value={timezone}
        onChange={e => setTimezone(e.target.value)}
        type="number"
      />
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  );
};

export default AddClockForm;