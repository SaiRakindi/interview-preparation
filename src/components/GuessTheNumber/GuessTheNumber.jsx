const GuessTheNumber = () => {
  // Function to handle guess checking
  const handleGuess = () => {};

  // Function to reset the game
  const resetGame = () => {};

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
      />
    </div>
  );
};

export default GuessTheNumber;
