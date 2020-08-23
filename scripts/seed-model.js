#!/bin/node
const fs = require("fs");

const model = process.argv[2];
const number = process.argv[3];

const createCommentByUser = () => {
  const Comment = require(`../seed/api/Comment.js`);
  const users = require("../seed/api/userMocks.json");

  let usersData = users.map((user) => ({
    userId: user.id,
    userName: user.username,
  }));

  let commentsByUser = [];

  usersData.map((user) => {
    for (let i = 0; i < number; i++) {
      commentsByUser.push(new Comment(user.userId, user.userName));
    }
  });

  fs.writeFileSync(
    `seed/api/commentsByUserMocks.json`,
    JSON.stringify(commentsByUser)
  );
};

const createSeedFromModel = () => {
  const Model = require(`../seed/api/${model}.js`);

  let models = [];

  for (let i = 0; i < number; i++) {
    models.push(new Model());
  }

  fs.writeFileSync(
    `seed/api/${model.toLowerCase()}Mocks.json`,
    JSON.stringify(models)
  );
};
model === "CommentByUser" ? createCommentByUser() : createSeedFromModel();
