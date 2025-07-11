import React, { useEffect, useState } from 'react';

interface ClockProps {
  city: string;
  timezone: number;
  onRemove: () => void;
}

const Clock: React.FC<ClockProps> = ({ city, timezone, onRemove }) => {
  const [time, setTime] = useState<string>(getCurrentTime(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime(timezone));
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div>
      <h4>{city}</h4>
      <div>{time}</div>
      <button onClick={onRemove}>✖</button>
    </div>
  );
};

function getCurrentTime(offset: number): string {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const local = new Date(utc + offset * 3600000);
  return local.toLocaleTimeString();
}

export default Clock;