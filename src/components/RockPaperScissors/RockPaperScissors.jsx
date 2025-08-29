import React, { useState } from "react";

const RockPaperScissors = () => {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const [result, setResult] = useState("Press Any One");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return (
    <div className="rockPaperScissor">
      <h1>Rock Paper Scissor</h1>

      <p>
        A two-player hand game where each player chooses rock, paper, or
        scissors.
      </p>

      <div className="container">
        <div className="choices">
          <button onClick={() => playGame("rock")}>👊</button>
          <button onClick={() => playGame("paper")}>🖐️</button>
          <button onClick={() => playGame("scissor")}>✌️</button>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
