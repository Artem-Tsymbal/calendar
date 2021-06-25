import { useState } from "react";
import "./index.scss";

export const EventModal = ({ selectedDate, createEvent }) => {
  const eventDataBaseState = {
    subject: "",
    location: "",
    duration: 30,
  };

  const [eventData, setEventData] = useState(eventDataBaseState);

  const selectedDateMinutes = selectedDate.half === 1 ? "00" : "30";

  const handleEventData = (value, field) => {
    setEventData({ ...eventData, [field]: value });
  };

  const onSaveData = (eventData) => {
    createEvent(eventData);
    setEventData(eventDataBaseState);
  };

  return (
    <div className="eventModal">
      <div className="eventModal__startTime">{`Starts at ${selectedDate.hour}:${selectedDateMinutes}`}</div>

      <input
        onChange={(event) =>
          handleEventData(event.currentTarget.value, "subject")
        }
        value={eventData.subject}
        type="text"
        className="eventModal__input"
        placeholder="Subject"
      />

      <input
        onChange={(event) =>
          handleEventData(event.currentTarget.value, "location")
        }
        value={eventData.location}
        type="text"
        className="eventModal__input"
        placeholder="Location"
      />

      <select
        onChange={(event) =>
          handleEventData(event.currentTarget.value, "duration")
        }
        type="checkbox"
        id="hide-checkbox"
      >
        <option value={30}>30 minutes</option>
        <option value={60}>60 minutes</option>
      </select>

      <button onClick={() => onSaveData(eventData)}>Save</button>
    </div>
  );
};
