import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementCounter = () => {
    setCounter((prev) => prev - 1);
  };

  const resetCounter = () => setCounter(0);

  return (
    <div>
      <h1>React Counter App</h1>
      <h2>Counter : {counter}</h2>

      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
