import React from "react";
import { act, fireEvent, screen, render } from "@testing-library/react";
import Clicker from "./clicker";

describe("Clicker", () => {
  let getByTestId;
  let queryByText;
  let getByText;

  beforeAll(() => jest.useFakeTimers());

  beforeEach(
    () => ({ getByTestId, queryByText, getByText } = render(<Clicker />))
  );

  afterEach(() => jest.clearAllTimers());

  describe("render", () => {
    test("should render the Clicker component", () => {});
  });

  describe("inital loading state", () => {
    test("should have a button that says 'click me'", () => {
      expect(getByText("click me")).toBeDefined();
    });

    test("should wrap the components in a container", () => {
      expect(getByTestId("Clicker")).toBeDefined();
    });

    test("should have an initial click counter of 0", () => {
      expect(getByText("you've clicked 0 times")).toBeDefined();
    });
  });

  describe("click behavior", () => {
    beforeEach(() => {
      const button = getByText("click me");
      fireEvent.click(button);
    });

    test("it should increment the count and display it when the button is clicked", () => {
      expect(getByText("you've clicked 1 times")).toBeDefined();
    });

    test("it should notify the user when they have clicked", () => {
      const holyShit = getByText("Whoa holy shit", { exact: false });
      expect(holyShit).toBeDefined();
    });

    test("it should remove the notification after 2 seconds", () => {
      act(() => {
        jest.advanceTimersByTime(2000);
      });
      let holyShit = queryByText("Whoa holy shit", { exact: false });
      expect(holyShit).toBeNull();
    });
  });
});
