import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
        
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        calendarType="US"
        className="custom-calendar"
      />
  );
};

export default CalendarComponent;
