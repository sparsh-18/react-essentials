import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000); // in ms

  const timerRef = useRef();
  const modalRef = useRef();

  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearTimeout(timerRef.current);
    modalRef.current.openModal();
  }

  const handleClickStart = () => {
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  };

  const handleClickStop = () => {
    clearTimeout(timerRef.current);
    modalRef.current.openModal();
  };

  const resetTimer = () => {
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      <ResultModal
        ref={modalRef}
        result="lost"
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        resetTimer={resetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleClickStop : handleClickStart}>
            {isTimerActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
