import React, {
  useState,
  useEffect,
  createContext,
  useRef,
  useContext,
} from "react";

const Hooker = (props) => {
  const [timer, setTimer] = useState(Date.now());
  const [ran, setRan] = useState(0);
  // useState
  // useEffect
  const UserContext = createContext([
    {
      name: "bill",
      suffix: 1,
    },
    (obj) => obj,
  ]);
  useEffect(() => {
    return () => console.log("ran");
  }, [timer]);

  console.log(timer);
  return (
    <div data-testid="Hooker">
      <h1>{ran}</h1>
      <h2>{timer}</h2>
    </div>
  );
};

export default Hooker;
