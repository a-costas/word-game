import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  console.log("Results ", { guesses });
  guesses.length > 0 && console.log(guesses[0].guess);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p className="guess" key={index}>
          {guesses[index] ? (
            <Guess guess={guesses[index].guess} answer={answer} key={index} />
          ) : (
            <Guess guess={""} answer={answer} key={index} />
          )}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
