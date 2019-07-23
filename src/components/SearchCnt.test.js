import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SearchCnt from "./SearchCnt";
import Search from "./Search";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Search Cnt", () => {

    test("if render SearchCnt", () => {
      const wrapper = shallow(<SearchCnt />);
  
      expect(wrapper.exists()).toBe(true);
    });
    
    test("if render Search component", () => {
        const wrapper = mount(<SearchCnt />);
    
        expect(wrapper.children(Search).length).toEqual(1);
      }); 
});