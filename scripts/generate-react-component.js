#!/bin/node
const fs = require("fs");

const componentName = process.argv[2];
const dir = `src/components/${componentName}`;

const generateComponentSkeleton = `
import React from "react";

const ${componentName} = props => {
  // useState
  // useEffect

  return (
    <div data-testid="${componentName}"></div>
  );
}

export default ${componentName};
`;

const generateExportSkeleton = `
export { default } from "./${componentName.toLowerCase()}";
`;

const generateTestSkeleton = `
import React from "react";
import { render } from "@testing-library/react";
import ${componentName} from "./${componentName.toLowerCase()}";

describe("${componentName}", () => {
  let component;

  beforeEach(() => (component = render(<${componentName} />)));

  it("should render the component into the page", () => {
    expect(component.getByTestId("${componentName}")).toBeDefined();
  });
});
`;

if (fs.existsSync(dir)) {
  console.log(
    "This directory already exists. We aren't going to overwrite any files. You're on your own, Cowboy."
  );
  return;
} else {
  fs.mkdirSync(dir);
}

fs.writeFileSync(
  `src/components/${componentName}/${componentName.toLowerCase()}.js`,
  generateComponentSkeleton
);
fs.writeFileSync(
  `src/components/${componentName}/${componentName.toLowerCase()}.test.js`,
  generateTestSkeleton
);
fs.writeFileSync(
  `src/components/${componentName}/index.js`,
  generateExportSkeleton
);
