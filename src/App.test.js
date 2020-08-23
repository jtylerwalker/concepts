// app-test.js
import React from "react";
import { render, waitForElement } from "@testing-library/react";
import App from "./App";
import { serve } from "./mirage";
import axios from "axios";

let server;

beforeEach(() => {
  server = serve({ environment: "test" });
});

afterEach(() => {
  server.shutdown();
});

it("shows the list of movies", async () => {
  const users = await axios.get("/api/movies");
  expect(users).toBe(false);
});
