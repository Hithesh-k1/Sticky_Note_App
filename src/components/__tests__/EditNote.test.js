import React from "react";
import { shallow } from "enzyme";
import EditNote from "../EditNote";

const setUp = (props = {}) => {
  const wrappedComponent = shallow(<EditNote {...props} />);
  return wrappedComponent
};

describe("App component", () => {
  let wrappedComponent;
  let props;

  beforeEach(() => {
    const usersData = [
      { id: 1, title: "Todo 1", notes: "build CI/CD pipeline using jenkins" },
      { id: 2, title: "Todo 2", notes: "Integrate Jenkins with Sonarqube " },
      { id: 3, title: "Todo 3", notes: "Deploy to AWS S3" },
    ];

    props = {
      editing: jest.fn(),
      setEditing: jest.fn(),
      currentNote: usersData,
      updateNote:jest.fn()
    };

    wrappedComponent = setUp(props);
  });
  it("should match snapshot of EditNote Component", () => {
    expect(wrappedComponent).toMatchSnapshot();
  });
});
