import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SearchCnt from "./SearchCnt";
import Search from "./Search";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

jest.mock('../api');

describe("Search Cnt", () => {

    test("if render SearchCnt", () => {
      const wrapper = shallow(<SearchCnt />);
  
      expect(wrapper.exists()).toBe(true);
    });
    
    test("if update imgs state", () => {
        const wrapper = mount(<SearchCnt />);
    
        expect(wrapper.state().imgs).toEqual([]);

        const {performSearch} = wrapper.find(Search).props();

        return performSearch().then(() => {
          expect(wrapper.state().imgs).toHaveLength(20)
        })
      }); 
});