import React, { useState } from "react";
import "./styles.css";

const RockPaperScissors = () => {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const [result, setResult] = useState("Press Any One");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const playGame = (playerChoice) => {
    const computerSelection =
      choices[Math.floor(Math.random() * 3) * choices.length];

    setComputerChoice(computerSelection);
    setPlayerChoice(playerChoice);

    if (computerSelection === playerChoice) {
      setResult("It's a tie");
    } else if (
      (playerChoice === "rock" && computerSelection === "scissors") ||
      (playerChoice === "paper" && computerSelection === "rock") ||
      (playerChoice === "scissors" && computerSelection === "paper")
    ) {
      setResult("You Win!");
      setPlayerScore(playerScore + 1);
    } else {
      setResult("You Lose!");
      setComputerScore(computerScore + 1);
    }
  };

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
