import { render, screen, waitForElement } from "@testing-library/react";
import React from "react";
import Networker from "./";
import axios from "axios";
import users from "../../../seed/api/userMocks.json";
import { act } from "@testing-library/react";

describe("Networker", () => {
  let getByTestId;

  const standUp = () => waitForElement(() => render(<Networker />));

  describe("Networker", () => {
    describe("Prefetch render", () => {
      test("it should show intial text, and update it on mount", async () => {
        await act(async () => {
          render(<Networker />);
          expect(screen.getByText("No hello yet")).toBeDefined();
        });

        expect(screen.getByText("Hello world")).toBeDefined();
      });

      test("it should show a loading screen whie data is being fetched", async () => {
        await act(async () => {
          ({ getByTestId } = render(<Networker />));
          expect(getByTestId("Networker-Loading")).toBeDefined();
        });
      });
    });

    describe("Render", () => {
      beforeEach(async () => {
        axios.get.mockResolvedValue({ data: users });
        // ({ getByTestId } = await standUp());
        await act(async () => ({ getByTestId } = render(<Networker />)));
      });

      afterEach(() => {
        axios.get.mockReset();
      });

      test("should render the component", async () => {
        const networker = getByTestId("Networker");
        expect(networker).toBeDefined();
      });

      test("should invoke axios get when component mounts", () => {
        expect(axios.get).toHaveBeenCalled();
      });

      test("should render a UserList when users have been fetched", async () => {
        const userList = getByTestId("Networker-UserList");
        expect(userList).toBeDefined();
      });
    });

    describe("unsuccessful request", () => {
      beforeEach(async () => {
        axios.get.mockRejectedValue({ error: "damn" });
        ({ getByTestId } = await standUp());
      });

      test("should render the error message when a call has failed", async () => {
        const errorText = await waitForElement(() => screen.getByText("damn"));
        expect(errorText).toBeDefined();
      });
    });

    describe("Successful request", () => {
      beforeEach(async () => {
        axios.get.mockResolvedValue({ data: users });
        ({ getByTestId } = await standUp());
      });

      test("should populate userList with the correct data", () => {
        users.forEach((user) => {
          expect(screen.getByText(user.name)).toBeDefined();
          expect(screen.getByText(user.username)).toBeDefined();
          expect(screen.getByText(user.email)).toBeDefined();
        });
      });
    });
  });
});
