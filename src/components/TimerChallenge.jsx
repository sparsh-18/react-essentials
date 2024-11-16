import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timerRef = useRef();
  const modalRef = useRef();

  const handleClickStart = () => {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      modalRef.current.openModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleClickStop = () => {
    clearTimeout(timerRef.current);
    setTimerStarted(false);
  };

  return (
    <>
    <ResultModal ref={modalRef} result='lost' targetTime={targetTime} />
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleClickStop : handleClickStart}>
          {timerStarted ? "Stop" : "Start"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
    </>
  );
}
