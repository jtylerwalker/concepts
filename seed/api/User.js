// fake data generation using faker.js
// https://github.com/marak/Faker.js/

const faker = require("faker");

class User {
  constructor() {
    this.id = faker.random.uuid(); // seed id
    this.name = faker.name.findName(); // seed name
    this.username = faker.internet.userName(); // seed username
    this.email = faker.internet.email(); // seed email
  }
}

module.exports = User;
