import React from "react";
import { shallow } from "enzyme";
import { render } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

// test("renders learn react link", () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App component", () => {
  it("starts with a count of zero", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 0");
  });

  it("increments the counter when button is clicked", () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find("button.increment");
    incrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 1");
  });

  it("decrements the counter when clicked", () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find("button.decrement");
    decrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: -1");
  });

  it("matches the snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
