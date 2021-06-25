import "./index.scss";

export const Hour = ({
  events,
  dayOfMonth,
  dayOfWeek,
  hour,
  toggleCreateEventModal,
}) => {
  const currentEvents = events.filter(
    (item) =>
      item.selectedDate.dayOfMonth === dayOfMonth &&
      item.selectedDate.hour === hour
  );

  const eventsFirstHalf = currentEvents.filter(
    (item) => item.selectedDate.half === 1
  );
  const eventsSecondHalf = currentEvents.filter(
    (item) => item.selectedDate.half === 2
  );

  return (
    <div className="hour">
      <div
        onClick={() => toggleCreateEventModal(dayOfMonth, dayOfWeek, hour, 1)}
        className="hour__half hour__half--top"
      >
        {eventsFirstHalf.map((index, item) => (
          <div key={index} className="hour__event">
            {item.subject}
          </div>
        ))}
      </div>

      <div
        onClick={() => toggleCreateEventModal(dayOfMonth, dayOfWeek, hour, 2)}
        className="hour__half hour__half--bottom"
      >
        {eventsSecondHalf.map((index, item) => (
          <div key={index} className="hour__event">
            {item.subject}
          </div>
        ))}
      </div>
    </div>
  );
};
