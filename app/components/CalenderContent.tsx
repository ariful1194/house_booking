"use client";

import React, { useState, useEffect } from "react";
import { Calendar, CalendarProps, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
function CalenderContent(props: Omit<CalendarProps, "localizer">) {
  const startOfWeek = moment().startOf("week").add(10, "hours");
  const [events, setEvents] = useState([
    {
      title: "4 Available",
      start: moment("2022-10-18T12:00:00").toDate(), // Set the start time to 10:00 AM on November 1, 2023
      end: moment("2022-10-18T13:00:00").toDate(), // Set the end time to 11:30 AM on the same day
    },
    {
      title: "8 Available",
      start: moment("2022-10-21T15:00:00").toDate(), // Set the start time to 10:00 AM on November 1, 2023
      end: moment("2022-10-21T16:00:00").toDate(), // Set the end time to 11:30 AM on the same day
    },
  ]);
  const now = new Date();
  const [currentDate, setCurrentDate] = useState(
    moment("2022-10-16T10:00:00").toDate()
  );

  const handleSelectSlot = ({ start, end }: any) => {
    // You can use the 'start' and 'end' values to determine the time slot selected
    // Open a form or modal for event creation

    let title = window.prompt("Please Enter the title");
    if (title) {
      setEvents([
        ...events,
        {
          title,
          start,
          end,
        },
      ]);
    }
  };
  const localizer = momentLocalizer(moment);
  return (
    <div>
      <div>
        <Calendar
          {...props}
          selectable
          defaultView="week"
          views={["week"]}
          localizer={localizer}
          defaultDate={currentDate}
          events={events}
          startAccessor="start"
          endAccessor="end"
          min={startOfWeek.toDate()}
          formats={{
            dayFormat: (date) => moment(date).format("ddd D MMM"),
          }}
          onSelectSlot={handleSelectSlot}
          style={{ height: 700 }}
        />
      </div>
    </div>
  );
}

export default CalenderContent;
