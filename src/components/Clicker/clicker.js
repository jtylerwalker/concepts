import * as React from "react";

const Clicker = () => {
  const [clickCount, setClickCount] = React.useState(0);
  const [notify, setNotify] = React.useState(false);

  React.useEffect(() => {
    let timer = setTimeout;
    setNotify && timer(() => setNotify(false), 2000);
    return () => clearTimeout(timer);
  }, [notify]);

  const handleClick = () => {
    setNotify(true);
    setClickCount(clickCount + 1);
  };

  const notifier = () => (
    <h2>Whoa holy shit you clicked something aren't you great!</h2>
  );

  return (
    <div data-testid="Clicker">
      <h1>you've clicked {clickCount} times</h1>
      {notify && notifier()}
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Clicker;
