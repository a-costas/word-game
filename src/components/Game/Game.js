import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import Failure from "../Failure/Failure";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Success from "../Success/Success";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(currentGuess) {
    const nextGuesses = [...guesses, currentGuess];
    setGuesses(nextGuesses);

    if (currentGuess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        gameStatus={gameStatus}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "lost" && <Failure answer={answer} />}
      {gameStatus === "won" && <Success numGuesses={guesses.length} />}
    </>
  );
}

export default Game;
