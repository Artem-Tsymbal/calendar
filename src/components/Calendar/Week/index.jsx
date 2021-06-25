import { Day } from "./Day";
import "./index.scss";

export const Week = ({ events, toggleCreateEventModal }) => {
  const days = [...Array(8).keys()];
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="days">
      {days.map((key, item) => (
        <div key={key} className="day__block">
          <Day
            events={events}
            dayOfMonth={item}
            dayOfWeek={daysOfWeek[item]}
            toggleCreateEventModal={toggleCreateEventModal}
          />
        </div>
      ))}
    </div>
  );
};
