import React from "react";
import {  shallow } from "enzyme";
import App from "./App";

const setUp = (props = {}) => {
  const wrappedComponent = shallow(<App {...props} />);
  return wrappedComponent;
};
describe("App component", () => {
  let wrappedComponent;
  let props;

  beforeEach(() => {
    const usersData = [
      { id: 1, title: "Todo 1", notes: "Build CI/CD pipeline using jenkins" },
      { id: 2, title: "Todo 2", notes: "Integrate Jenkins with Sonarqube " },
      { id: 3, title: "Todo 3", notes: "Deploy to AWS S3" },
    ];

    props = {
      editing: jest.fn(),
      setEditing: jest.fn(),
      currentNote: usersData,
      updateNote: jest.fn(),
      handleInputChange: jest.fn(),
      setNotes: jest.fn(),
      setCurrentNote: jest.fn(),
    };

    wrappedComponent = setUp(props);
  });

  it("should match snapshot of App Component", () => {
    expect(wrappedComponent).toMatchSnapshot();
  });

  it("should handle addNote event", () => {
    const note = { id: 1 };
    wrappedComponent.find("AddNote").props().addNote(note);
    // expect(props.setNotes).toHaveBeenCalled();
  });

  it("should handle editRow event", () => {
    const note = { id: 1 };
    wrappedComponent.find("Notes").props().editRow(note);
    //  expect(props.setCurrentNote).toHaveBeenCalled();
  });

  it("should handle deleteNote event", () => {
    const note = { id: 1 };
    wrappedComponent.find("Notes").props().deleteNote(note);
    //  expect(props.setCurrentNote).toHaveBeenCalled();
  });


  describe("App component when editing is true", () => {
    // test('setOpenIndex sets the open index state properly', () => {
    //   const wrapper = mount(<App {...props} editing={false} />)
    //   expect(wrapper.state('editing')).toBe(false)
    //   wrapper.instance().setEditing(true)
    //   expect(wrapper.state('editing')).toBe(true)
    // })

  //   it("should handle editRow event", () => {
  //     const note = { id: 1 };
  //     const rr=  wrappedComponent.find("Notes").props().editRow(note);
  //   //  expect(props.setCurrentNote).toHaveBeenCalled();
  //   console.log(rr.debug())
  // });
  });
});
