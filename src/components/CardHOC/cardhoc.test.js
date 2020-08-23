
import React from "react";
import { render } from "@testing-library/react";
import CardHOC from "./cardhoc";

describe("CardHOC", () => {
  let component;

  beforeEach(() => (component = render(<CardHOC />)));

  it("should render the component into the page", () => {
    expect(component.getByTestId("CardHOC")).toBeDefined();
  });
});
