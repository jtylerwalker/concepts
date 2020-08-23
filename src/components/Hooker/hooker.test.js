
import React from "react";
import { render } from "@testing-library/react";
import Hooker from "./hooker";

describe("Hooker", () => {
  let component;

  beforeEach(() => (component = render(<Hooker />)));

  it("should render the component into the page", () => {
    expect(component.getByTestId("Hooker")).toBeDefined();
  });
});
