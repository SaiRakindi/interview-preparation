import React, { useState } from "react";

const RockPaperScissors = () => {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const [result, setResult] = useState("Press Any One");

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return <div>RockPaperScissors</div>;
};

export default RockPaperScissors;
