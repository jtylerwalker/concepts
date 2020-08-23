import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Accounter from ".";
import { add, divide } from "../../utils/maths";

jest.mock("../../utils/maths");

describe("Tests", () => {
  let mockProps = { x: 5, y: 5 };
  let getByTestId, getByText;
  let component;

  beforeEach(() => {
    component = render(<Accounter x={mockProps.x} y={mockProps.y} />);
  });

  describe("Add", () => {
    beforeEach(() => {
      ({ getByText, getByTestId } = component);
      fireEvent.click(getByTestId("AddButton"));
    });

    afterEach(() => {
      add.mockClear();
    });

    test("adds together props x and y on button press", () => {
      const answerText = getByText("Your answer is", { exact: false });
      // =>
      expect(answerText).toBeDefined();
    });

    test("should invoke the 'add' method once on button click", () => {
      expect(add).toHaveBeenCalledTimes(1);
    });

    test("should invoke the 'add' method with props as arguments", () => {
      expect(add).toHaveBeenCalledWith(mockProps.x, mockProps.y);
    });
  });

  describe("action state", () => {
    beforeEach(() => {
      ({ getByText, getByTestId } = component);
    });

    test("initial action state should generate the correct text", () => {
      const expectation = getByText("You've done nothing with your life.");
      // =>
      expect(expectation).toBeDefined();
    });

    test("should notify the user of an action when a button is clicked", () => {
      fireEvent.click(getByTestId("AddButton"));
      const expectation = getByText("added things");
      // =>
      expect(expectation).toBeDefined();
    });
  });

  describe("Answer to life", () => {
    const question = "Is this the answer to life?";
    beforeEach(() => {
      ({ getByTestId, getByText } = component);
      add.mockClear();
    });
    test("should notify the user if they HAVE NOT figured out the answer to life", () => {
      fireEvent.click(getByTestId("AddButton"));
      const expectation = getByText(`${question} ...no :(`);
      // =>
      expect(expectation).toBeDefined();
    });

    test("should notify the user if they HAVE figured out the answer to life", () => {
      add.mockReturnValue(42);
      fireEvent.click(getByTestId("AddButton"));
      const expectation = getByText(`${question} ...yes!`);
      // =>
      expect(expectation).toBeDefined();
    });
  });
});
