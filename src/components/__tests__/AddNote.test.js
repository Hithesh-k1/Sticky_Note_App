import React from "react";
import { shallow } from "enzyme";
import {AddNote} from "../AddNote";

// let wrappedComponent = shallow(<AddNote />);
const setUp = (props = {}) => {
  const wrappedComponent = shallow(<AddNote {...props} />);
  return wrappedComponent;
};

describe("App component", () => {
  let wrappedComponent;
  let props;

  beforeEach(() => {
    props = {
      addNote: jest.fn(),
    };

    wrappedComponent = setUp(props);
  });

  it("should match snapshot of AddNote Component", () => {
    expect(wrappedComponent).toMatchSnapshot();
  });
});
