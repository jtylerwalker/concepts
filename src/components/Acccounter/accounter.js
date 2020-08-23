import React, { useState, useEffect } from "react";
import { add, subtract, divide, multiply } from "../../utils/maths.js";

const Accounter = ({ x, y }) => {
  const [answer, setAnswer] = useState();
  const [action, setAction] = useState();
  const [is42, setIs42] = useState(false);

  useEffect(() => {
    setIs42(answer === 42);
  }, [answer]);

  const handleClick = (mathFn) => {
    switch (mathFn) {
      case "add":
        setAction("Added things");
        setAnswer(add(x, y));
        return;
      case "subtract":
        setAction("Subtracted things");
        setAnswer(subtract(x, y));
        return;
      case "divide":
        setAction("Divided things");
        setAnswer(divide(x, y));
        return;
      case "multiply":
        setAction("Multiplied things");
        setAnswer(multiply(x, y));
        return;
      default:
        return;
    }
  };

  return (
    <>
      <button data-testid="AddButton" onClick={() => handleClick("add")}>
        Add
      </button>
      <button
        data-testid="SubtractButton"
        onClick={() => handleClick("subtract")}
      >
        Subtract
      </button>
      <button data-testid="DivideButton" onClick={() => handleClick("divide")}>
        Divide
      </button>
      <button
        data-testid="MultiplyButton"
        onClick={() => handleClick("multiply")}
      >
        Multiply
      </button>
      <p data-testid="AnswerTagline">Your answer is: {answer}</p>

      <h1>
        {action ? action.toLowerCase() : "You've done nothing with your life."}
      </h1>
      <h3>Is this the answer to life? ...{is42 ? "yes!" : "no :("}</h3>
    </>
  );
};

export default Accounter;
