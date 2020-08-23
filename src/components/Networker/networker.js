import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = ({ users }) => {
  return (
    <div data-testid="Networker-UserList">
      {users &&
        users.map(({ id, name, username, email }) => (
          <UserListItem
            key={id}
            name={name}
            username={username}
            email={email}
          />
        ))}
    </div>
  );
};
const UserListItem = ({ name, username, email }) => {
  return (
    <>
      <h1>{name}</h1>
      <em>{username}</em>
      <p>{email}</p>
    </>
  );
};

const Networker = (props) => {
  const [usersPayload, setUsers] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [initialText, setInitialText] = useState("No hello yet");

  useEffect(() => {
    setInitialText("Hello world");
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(data);
        setIsFetching(false);
      } catch ({ error }) {
        setError(error);
        setIsFetching(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div data-testid="Networker">
      <p>{initialText}</p>
      {isFetching && <p data-testid="Networker-Loading">Loading...</p>}
      {error && <p>{error}</p>}
      {usersPayload && <UserList users={usersPayload} />}
    </div>
  );
};

export default Networker;
