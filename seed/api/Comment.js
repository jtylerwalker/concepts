// fake data generation using faker.js
// https://github.com/marak/Faker.js/

const faker = require("faker");

class Comment {
  constructor(userId, username) {
    this.id = faker.random.uuid(); // seed id
    this.userId = userId; // seed userId
    this.name = username; // seed name
    this.body = faker.lorem.paragraph(3); // seed body
  }
}

module.exports = Comment;
