import React, { useState, useEffect } from "react";

// function FuncRandomNumber() { // THIS syntax will still work as well as the arrow function syntax (either/or)
const FuncRandomNumber = (props) => {
  const [randomNumber, setRandomNumber] = useState(
    getRandomNumber(props.maxNumber)
  );
  const [count, setCount] = useState(0);

  let randomNumberVar = 0;

  //   let getRandomNumber = (max) => {
  // THIS syntax will still work as well as the arrow function syntax (either/or)
  function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="random-number">
      <h3>
        Random Number:
        <span className="span-number">{randomNumber}</span>
      </h3>
      <h3>
        Count:
        <span className="span-count">{count}</span>
      </h3>

      <button onClick={() => setRandomNumber(getRandomNumber(props.maxNumber))}>
        Get New Random Number
      </button>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
};

export default FuncRandomNumber;
