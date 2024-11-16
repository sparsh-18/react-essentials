import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, resetTimer },
  ref
) {
  const dialog = useRef();

  const timeRemainingInSeconds = (timeRemaining / 1000).toFixed(2);
  const result = timeRemaining > 0 ? "won" : "lost";

  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialog.current.showModal();
      },
    };
  });

  // dialog can be closed by pressing the Escape key therefore we need to reset the timer on close
  // createPortal is used to render the dialog element in the #modal div to avoid nesting of the modal
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={resetTimer}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer at <strong>{timeRemainingInSeconds}</strong>{" "}
        seconds left.
      </p>
      <form method="dialog" onSubmit={resetTimer}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
