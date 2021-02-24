import React from "react";
import { render } from "@testing-library/react";
import Hooks from "./hooks";

describe("Hooks", () => {
  let component;

  beforeEach(() => (component = render(<Hooks />)));

  it("should render the component into the page", () => {
    expect(component.getByTestId("Hooks")).toBeDefined();
  });
});
