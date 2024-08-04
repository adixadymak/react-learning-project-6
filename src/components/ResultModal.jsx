import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
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
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
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
