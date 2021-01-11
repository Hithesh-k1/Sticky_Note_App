import React from "react";
import { shallow } from "enzyme";
import Notes from "../Notes";

const setUp = (props = {}) => {
  const wrappedComponent = shallow(<Notes {...props} />);
  return wrappedComponent;
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
      editRow: jest.fn(),
      deleteNote:jest.fn(),
      notes:usersData
    };

    wrappedComponent = setUp(props);
  });
  it("should match snapshot of Notes Component", () => {
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('Test click event', () => {
    const mockCallBack = jest.fn();

    // const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    const aa= wrappedComponent.find('i').at(0)
    console.log(aa.debug())
    // wrappedComponent.find('i').at(0).props().onClick() ;
    // expect(mockCallBack.mock.calls.length).toEqual(1);
  });

});
