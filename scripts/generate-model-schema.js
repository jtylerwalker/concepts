#!/bin/node
const fs = require("fs");

const model = process.argv[2];
const properties = process.argv.splice(3);

const formattedProperties = properties.reduce((acc, cur) => {
  return (acc = acc + `    this.${cur} = null; // seed ${cur}\n`);
}, `\n`);

const generateModelFile = `
// fake data generation using faker.js
// https://github.com/marak/Faker.js/

const faker = require("faker")

class ${model} {
  constructor() {${formattedProperties}
  }
};

module.exports = ${model};
`;

fs.writeFileSync(`seed/api/${model}.js`, generateModelFile);
