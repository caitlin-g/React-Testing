import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Panel from "../components/Panel/Panel";

Enzyme.configure({ adapter: new Adapter() });

describe("<Panel />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Panel />, div);
  });

  it("renders 19 Button components", () => {
    const wrapper = shallow(<Panel />);

    const elements = wrapper.find("Button");

    expect(elements.length).toBe(19);
  });
  it("renders 1 div with the class compomponent-panel", () => {
    const wrapper = shallow(<Panel />);

    const elements = wrapper.find("div.component-panel");

    expect(elements.length).toBe(1);
  });
});
