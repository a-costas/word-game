import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //Redundancy to proctect against minLength not doing its job :(
    if (guess.length === 5) {
      const newGuess = {
        id: Math.random(),
        guess: guess,
      };

      handleSubmitGuess(newGuess);
      setGuess("");
      return;
    }
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess: </label>
        <input
          required
          disabled={gameStatus !== "running"}
          minLength={5}
          maxLength={5}
          type="text"
          id="guess-input"
          value={guess}
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        ></input>
      </form>
    </>
  );
}

export default GuessInput;
