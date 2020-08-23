const mockUsers = require("./db/userMocks.json");
const commentsByUserMocks = require("./db/commentsByUserMocks.json");

module.exports = () => {
  const data = {
    users: mockUsers,
    comments: commentsByUserMocks,
  };

  return data;
};
