import { useState, useEffect } from "react";
import { Week } from "./Week";
import { Time } from "./Time";
import "./index.scss";
import { EventModal } from "./EventModal";
import ModalWindow from "../shared/ModalWindow";

export const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [visibleCreateEventModal, setVisibleCreateEventModal] = useState(false);

  useEffect(() => {
    console.log(events);
  }, [events]);

  const toggleCreateEventModal = (dayOfMonth, dayOfWeek, hour, half) => {
    setSelectedDate({
      dayOfMonth,
      dayOfWeek,
      hour,
      half,
    });
    setVisibleCreateEventModal(!visibleCreateEventModal);
  };

  const createEvent = ({ subject, location, duration }) => {
    setEvents([...events, { selectedDate, subject, location, duration }]);
  };

  return (
    <div className="App">
      <div className="calendar">
        <div className="calendar__time">
          <Time />
        </div>
        <div className="calendar-days">
          <Week
            events={events}
            toggleCreateEventModal={toggleCreateEventModal}
          />
        </div>
        {visibleCreateEventModal && (
          <ModalWindow onClose={toggleCreateEventModal}>
            <EventModal selectedDate={selectedDate} createEvent={createEvent} />
          </ModalWindow>
        )}
      </div>
    </div>
  );
};
