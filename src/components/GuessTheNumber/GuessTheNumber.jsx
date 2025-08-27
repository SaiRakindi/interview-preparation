import { useState } from "react";

const GuessTheNumber = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());
  const [attempts, setAttempts] = useState(0);

  // Function to handle guess checking
  const handleGuess = () => {
    const number = parseInt(guess);

    if (isNaN(number) || number < 1 || number > 100) {
      setMessage("Please enter a number between 1 and 100");
      return;
    }

    setAttempts(attempts + 1);

    if (number === numberToGuess) {
      setMessage(
        `Congratulations! You've guessed the number  in ${
          attempts + 1
        } attempts.`
      );
    } else if (number < numberToGuess) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setGuess("");
    setMessage("");
    setNumberToGuess(generateRandomNumber());
    setAttempts(0);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      <div>
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};

export default GuessTheNumber;
