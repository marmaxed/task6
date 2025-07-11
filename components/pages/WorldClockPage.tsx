import React, { useEffect, useState } from 'react';
import AddClockForm from '../components/AddClockForm';
import Clock from '../components/Clock';

interface ClockData {
  id: number;
  city: string;
  timezone: number;
}

const WorldClock: React.FC = () => {
  const [clocks, setClocks] = useState<ClockData[]>(() => {
    const saved = localStorage.getItem('clocks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('clocks', JSON.stringify(clocks));
  }, [clocks]);

  const handleAddClock = (city: string, timezone: number) => {
    const newClock: ClockData = {
      id: Date.now(),
      city,
      timezone,
    };
    setClocks(prev => [...prev, newClock]);
  };

  const handleRemoveClock = (id: number) => {
    setClocks(prev => prev.filter(clock => clock.id !== id));
  };

  return (
    <div>
      <h3>Мировые часы</h3>
      <AddClockForm onAdd={handleAddClock} />
      <div>
        {clocks.map(clock => (
          <Clock
            key={clock.id}
            city={clock.city}
            timezone={clock.timezone}
            onRemove={() => handleRemoveClock(clock.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default WorldClock;