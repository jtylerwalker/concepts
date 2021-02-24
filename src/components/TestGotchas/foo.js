import React, { useEffect, useState } from "react";
import axios from "axios";

export const Foo = ({ setThing }) => {
  const [payload, setPayload] = useState(null);
  const [error, setError] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  const [updateAndShow, setUpdated] = useState(null);

  const handlePress = x => {
    setUpdated(x);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
        setPayload(data);
      } catch (e) {
        setError(e);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {/* accessibility roles */}
      <h2>All users</h2>
      <h3>{payload ? "Success" : "Loading"}</h3>

      <ul>
        {payload && payload.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>

      <button onClick={() => handlePress("once")}>Press me</button>
      {updateAndShow === "once" && <p aria-label="show once">Show only once</p>}

      <button onClick={() => handlePress("twice")}>Press me to show two items</button>
      {updateAndShow === "twice" && (<><p>Show twice</p><p>Show twice</p></>)}

      <button onClick={() => setShowQuote(true)}>Inspire me</button>
      {showQuote && <p>"Use the force, Harry!" - Gandalf</p>}
    </>
  );
};
