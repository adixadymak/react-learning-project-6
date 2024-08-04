import { useState, useRef } from "react";

import ResultModal from "./ResultModal.jsx";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    //This Line
    if (dialog.current && !dialog.current.isOpen()) {
      dialog.current.open();
    }
    //
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}

// import { useState, useRef } from "react";
// import ResultModal from "./ResultModal.jsx";

// export default function TimerChallenge({ title, targetTime }) {
//   const timerRef = useRef();
//   const dialog = useRef();

//   const [timerStarted, setTimerStarted] = useState(false);
//   const [timerExpired, setTimerExpired] = useState(false);

//   function handleStart() {
//     timerRef.current = setTimeout(() => {
//       setTimerExpired(true);
//       dialog.current.showModal();
//     }, targetTime * 1000);

//     setTimerStarted(true);
//   }

//   function handleStop() {
//     clearTimeout(timerRef.current);
//   }

//   return (
//     <>
//       {timerExpired && (
//         <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
//       )}

//       <section className="challenge">
//         <h2>{title}</h2>
//         <p className="challenge-time">
//           {targetTime} second{targetTime > 1 ? "s" : ""}
//         </p>
//         <p>
//           <button onClick={timerStarted ? handleStop : handleStart}>
//             {timerStarted ? "Stop" : "Start"} Timer
//           </button>
//         </p>

//         <p className={timerStarted ? "active" : undefined}>
//           {timerStarted ? "Timer is running..." : "Timer is inactive"}
//         </p>
//       </section>
//     </>
//   );
// }
