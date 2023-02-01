import React from "react";

function Success({ numGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        {numGuesses === 1 ? (
          <strong> 1 guess</strong>
        ) : (
          <strong> {numGuesses} guesses</strong>
        )}
        .
      </p>
    </div>
  );
}

export default Success;
