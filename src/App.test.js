import React from "react";
import { shallow } from "enzyme";
import App from "./App";

let wrapped = shallow(<App />);

describe("App component", () => {
  it("should match snapshot of App Component", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
