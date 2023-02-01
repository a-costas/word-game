import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { WORD_LENGTH } from "../../constants";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const check = checkGuess(guess, answer);

  // NOTE: This was my first approach, keeping it here for posterity
  // function renderBox(index) {
  //   switch (check[index].status) {
  //     case "incorrect":
  //       return "cell incorrect";
  //     case "misplaced":
  //       return "cell misplaced";
  //     case "correct":
  //       return "cell correct";
  //     default:
  //       return "cell";
  //   }
  // }

  return (
    <>
      {range(WORD_LENGTH).map((num) => (
        <Cell
          key={num}
          letter={check ? check[num].letter : undefined}
          status={check ? check[num].status : undefined}
        />
      ))}
    </>
  );
}

export default Guess;
