import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Search from "./Search";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search component", () => {

    test("if render", () => {
      const wrapper = shallow(<Search />);
  
      expect(wrapper.exists()).toBe(true);
    }); 

    test("user text input", () => {
      const wrapper = shallow(<Search performSearch={() => {}} />);
  
      wrapper.find("input").simulate("change", {
        target: { value: "car" }
      });
  
      expect(wrapper.find("input").props().value).toEqual("car");
    });
  
    test("if form is submitted", () => {
      const wrapper = shallow(<Search />);
      let prevented = false;
      wrapper.find("form").simulate("submit", {
        preventDefault: () => {
          prevented = true;
        }
      });
      expect(prevented).toBe(true);
    });
  });