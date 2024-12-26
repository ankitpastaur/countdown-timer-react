const ShowTimer = (props) => {
  const {
    hours,
    minutes,
    seconds,
    isPause,
    handlePause,
    handleResume,
    handleReset,
  } = props;
  return (
    <div className="show-container">
      <div className="time-box">
        <div>{hours < 10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
        <span>:</span>
        <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>
      {!isPause && (
        <button onClick={handlePause} className="timer-button">
          Pause
        </button>
      )}
      {isPause && (
        <button onClick={handleResume} className="timer-button">
          Resume
        </button>
      )}
      <button onClick={handleReset} className="timer-button">
        Reset
      </button>
    </div>
  );
};

export default ShowTimer;
