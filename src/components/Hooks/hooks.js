import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./hooks.css";

function HeavyCalculatorWithMemo() {
  const heavyCalculation = () => Math.random();
  const heavyCalculationMemo = React.useMemo(heavyCalculation, []);

  return <>{heavyCalculationMemo}</>;
}

const HeavyCalculatorWithCallback = React.memo(function HeavyCalculator(props) {
  const [calculated, setCalculated] = React.useState(null);

  const handleClick = () => setCalculated(props.heavyCalc());

  return (
    <div style={{ marginTop: "20px", paddingBottom: "10px" }}>
      <h1>Heavy calculation from callback: {calculated}</h1>
      <Button onClick={() => handleClick()}>Deferred Heavy Calculation</Button>
      <hr />
    </div>
  );
});

function Hooks() {
  const [int, setInt] = React.useState(null);

  const heavyCalculation = () => Math.random();

  // returns a memoized value
  const heavyCalcCallback = React.useCallback(heavyCalculation, []);
  // returns a memoized callback

  return (
    <div style={{ width: 800, margin: "100px auto" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1>Random int from state update: {int}</h1>
        <hr />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h1>Heavy Calculation: {heavyCalculation()}</h1>
        <hr />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h1>
          Heavy Calculation with memo: <HeavyCalculatorWithMemo />
        </h1>
        <hr />
      </div>

      <HeavyCalculatorWithCallback heavyCalc={heavyCalcCallback} />

      <div style={{ marginBottom: "40px" }}>
        <h1>This guy is going to trigger re-renders</h1>
        <h1>
          If calculations are performed that are resource intensive, we do not
          want them to be triggered for every re-render
        </h1>

        <Button onClick={() => setInt(heavyCalculation())}>
          Set random int
        </Button>
        <hr />
      </div>
    </div>
  );
}

export default Hooks;
