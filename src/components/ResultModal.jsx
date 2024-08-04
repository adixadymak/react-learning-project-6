import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        // This line
        if (!dialog.current.open) {
          dialog.current.showModal();
        }
        //
      },

      //this
      isOpen() {
        return dialog.current.open;
      },
      //
    };
  });

  return (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

// import { forwardRef } from "react";

// const ResultModal = forwardRef(function ResultModal(
//   { result, targetTime },
//   ref
// ) {
//   return (
//     <dialog ref={ref} className="result-modal" open>
//       <h1>You {result} </h1>
//       <p>
//         The target time was <strong> {targetTime} seconds. </strong>
//       </p>
//       <p>
//         You stopped the timer with <strong> x seconds left.</strong>
//       </p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// });

// export default ResultModal;
