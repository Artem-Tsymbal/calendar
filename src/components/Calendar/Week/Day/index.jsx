import { Hour } from "../Hour";
import "./index.scss";

export const Day = ({
  events,
  dayOfMonth,
  dayOfWeek,
  toggleCreateEventModal,
}) => {
  const hours = [...Array(25).keys()];

  return (
    <div className="day">
      <div className="day__header">
        <span>{`${dayOfMonth} ${dayOfWeek}`}</span>
      </div>

      {hours.map((key, item) => (
        <Hour
          key={key}
          events={events}
          dayOfMonth={dayOfMonth}
          dayOfWeek={dayOfWeek}
          hour={item}
          toggleCreateEventModal={toggleCreateEventModal}
        />
      ))}
    </div>
  );
};
