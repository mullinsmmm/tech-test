import React from "react";
import { render } from "@testing-library/react";
import Search from "../conponents/Search";


describe("Search", () => {
  const { asFragment } = render(<Search />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});