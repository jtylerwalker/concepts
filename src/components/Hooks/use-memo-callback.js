import React from "react";
import { Button } from "antd";
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
    <div
      style={{
        marginTop: "20px",
        paddingBottom: "10px",
      }}
    >
      <h3>Heavy calculation from callback: {calculated}</h3>
      <Button onClick={() => handleClick()}>Deferred Heavy Calculation</Button>
      <hr />
    </div>
  );
});

function UseMemoCallback() {
  const [int, setInt] = React.useState(null);

  const heavyCalculation = () => Math.random();

  // returns a memoized value
  const heavyCalcCallback = React.useCallback(heavyCalculation, []);

  return (
    <div
      style={{
        border: "1px solid red",
        padding: "15px",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h3>This guy is going to trigger re-renders</h3>

        <Button onClick={() => setInt(heavyCalculation())}>
          Set random int
        </Button>

        <h3>
          If calculations are performed that are resource intensive, we do not
          want them to be triggered for every re-render
        </h3>
        <hr />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h3>Random int from state update: {int}</h3>
        <hr />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h3>Heavy Calculation: {heavyCalculation()}</h3>
        <hr />
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h3>
          Heavy Calculation with memo: <HeavyCalculatorWithMemo />
        </h3>
        <hr />
      </div>

      <HeavyCalculatorWithCallback heavyCalc={heavyCalcCallback} />
    </div>
  );
}

export default UseMemoCallback;
