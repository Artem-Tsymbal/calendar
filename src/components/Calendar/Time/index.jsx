import "./index.scss";

export const Time = () => {
  const time = [...Array(25).keys()];

  return (
    <div className="time">
      {time.map((key, item) => (
        <div key={key} className="time__item">
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};
