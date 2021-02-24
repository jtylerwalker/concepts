import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Foo } from "./foo";
import axios from "axios";

const renderComponent = () =>render(<Foo setThing={(thing) => console.log(thing)}></Foo>)

describe("Foo", () => {
  const mockPayload = [
    { id: 1, name: "Bilbo Baggins" },
    { id: 2, name: "Legolas Elf-Bloom"},
  ];

  it("does wonky things", () => {
    a = 3;
    var a;

    const x = do();
    function do(things) { return 2; }
    expect(a).toBe(x)
  })

  it("ensures that 'Show only once' is correctly shown when 'Press me' is pressed", async () => {
    axios.get.mockResolvedValueOnce({ data: mockPayload })

    const instance = renderComponent();
    await waitFor(() => instance.getByText("Press me"))
    fireEvent.click(instance.getByText("Press me"));

    expect(instance.getByText("Show only once")).toBeDefined();
  });

  it.only("ensures that buttons are present and are accessible", async () => {
    axios.get.mockResolvedValueOnce({ data: mockPayload })

    const instance = renderComponent();
    await waitFor(() => instance.getAllByRole("button"))

    expect(instance.getAllByRole("button").length).toBeGreaterThan(0);
  });

  it.only("ensures that 'Press me to show two items' is shown when 'Press me twice' is pressed", async () => {
    axios.get.mockResolvedValueOnce({ data: mockPayload })

    const instance = renderComponent();
    instance.getByText("Press me")
    fireEvent.click(instance.getByText("Press me to show two items"));

    expect(instance.getAllByText("Show twice").length).toBe(2);
  });

  it.only("ensures that 'Show only once' is NOT shown when 'Press me twice' is pressed", async () => {
    axios.get.mockResolvedValueOnce({ data: mockPayload })

    const instance = renderComponent();
    await waitFor(() => instance.getByText("Press me"))
    fireEvent.click(instance.getByText("Press me to show two items"));

    // expect(instance.getByText("Show only once")).not.toBeDefined();
    expect(instance.queryByText("Show only once")).toBe(null);
  });

  it.only("ensures that the user data is present when the component is rendered", async () => {
    axios.get.mockResolvedValueOnce({ data: mockPayload })

    const instance = renderComponent();
    const bilbo = mockPayload[0].name;
    const legolas = mockPayload[1].name;

    await waitFor(() => instance.getByText(bilbo));

    expect(instance.getByText(bilbo)).toBeDefined();
    expect(instance.getByText(legolas)).toBeDefined();
  });

  it.only("ensures that the user data is present when the component is rendered", async () => {
    axios.get.mockResolvedValueOnce({ data: mockPayload })

    const instance = renderComponent();
    await waitFor(() => instance.getByText("Inspire me"));
    fireEvent.click(instance.getByText("Inspire me"));

    expect(instance.getByText("the force", { exact: false })).toBeDefined();
  });
});
