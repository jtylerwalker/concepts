import React, { useState, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";

const NetworkerTwo = (props) => {
  const [payload, setPayload] = useState(null);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:3004/users");
        setPayload(data);
      } catch (e) {
        setError(e);
      }
    };

    fetchUsers();
  }, []);

  const fetchUserComments = async (userId) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3004/comments?userId=${userId}`
      );

      setComments(data);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div data-testid="NetworkerTwo">
      <h1>Users</h1>
      <p>{JSON.stringify(payload)}</p>
      {error && <p>{JSON.stringify(error)}</p>}
      {payload &&
        payload.map((user) => (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => fetchUserComments(user.id)}>
              Get user comments
            </button>
          </>
        ))}
      <h1>Comments</h1>
      {comments &&
        comments.map((comment) => (
          <>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </>
        ))}
    </div>
  );
};

export default NetworkerTwo;
