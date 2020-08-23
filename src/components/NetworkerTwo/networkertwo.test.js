import React from "react";
import { render, waitForElement } from "@testing-library/react";
import NetworkerTwo from "./networkertwo";

import nock from "nock";
import { act } from "react-dom/test-utils";

describe("NetworkerTwo", () => {
  it("should render the component into the page", async () => {
    const scope = nock("http://localhost:3004")
      .get("/users")
      .reply(200, { data: { users: [{ name: "hello" }] } });
    const { getByTestId, debug } = await waitForElement(() =>
      render(<NetworkerTwo />)
    );
    const component = getByTestId("NetworkerTwo");
    expect(scope).toBe(false);
    debug();
    expect(component).toBeDefined();

    scope.done();
  });
});
