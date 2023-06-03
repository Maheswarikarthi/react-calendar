import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarComponents = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [birthdays, setBirthdays] = useState([
    { date: '2023-04-18', name: 'John' },
    { date: '2023-09-20', name: 'Jane' },
    { date: '2023-04-20', name: 'Bob' },
  ]);

  const handleDateSelect = (date) => {
    const formattedDate = date.toISOString().slice(0, 10);
    const filteredBirthdays = birthdays.filter(
      (birthday) => birthday.date === formattedDate
    );
    setSelectedDate(date);
    setBirthdays(filteredBirthdays);
  };

  return (
    <div>
      <Calendar value={selectedDate} onChange={handleDateSelect} />
      <ul>
        {birthdays.map((birthday) => (
          <li key={birthday.name}>
            {birthday.name} - {birthday.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarComponents;