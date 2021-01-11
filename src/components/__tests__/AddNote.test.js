import React from "react";
import { shallow } from "enzyme";
import { AddNote } from "../AddNote";

// let wrappedComponent = shallow(<AddNote />);
const setUp = (props = {}) => {
  const wrappedComponent = shallow(<AddNote {...props} />);
  return wrappedComponent;
};

describe("AddNote component", () => {
  let wrappedComponent;
  let props;

  beforeEach(() => {
    props = {
      addNote: jest.fn(),
      setNote: jest.fn(),
    };

    wrappedComponent = setUp(props);
  });

  it("should match snapshot of AddNote Component", () => {
    expect(wrappedComponent).toMatchSnapshot();
  });

  it("should handle updateNote event", () => {
    let preventDefault = jest.fn();
    const event = { preventDefault };
    wrappedComponent.find("form").props().onSubmit(event);
    expect(props.addNote).toHaveBeenCalled();
  });

  it("should handleInputChange event", () => {
    const event = {
      target: {
        title: "test_title",
        value: "test_value",
      },
    };
    wrappedComponent.find("textarea").at(0).props().onChange(event);
    // expect(props.setNote).toHaveBeenCalled();
  });
});
