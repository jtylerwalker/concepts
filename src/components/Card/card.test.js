import React from "react";
import { render } from "@testing-library/react";
import AbstractCard from "./";

describe("Tests", () => {
  let foo;
  beforeEach(() => {
    foo = "foo";
  });

  describe("One", () => {
    foo = "bar";
    test("renders learn react link", () => {
      expect(foo).toBe("bar");
    });
  });

  describe("Two", () => {
    foo = "baz";
    test("renders learn react link", () => {
      expect(foo).toBe("baz");
    });
  });

  test("foo should be foo", () => {
    expect(foo).toBe("foo");
  });
});
