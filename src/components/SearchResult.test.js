import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SearchResult from "./SearchResult.js";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

const mockPics = [
    {
      id: 1,
      pageURL: "https://github.com/",
      webformatURL: "Github"
    }
  ];

  describe("SearchResult component", () => {
    test("renders", () => {
      const wrapper = shallow(<SearchResult imgs={mockPics} />);
  
      expect(wrapper).toMatchSnapshot();
    });

    test("if empty array is returned", () => {
      const wrapper = shallow(<SearchResult />);
  
      expect(wrapper).toMatchSnapshot();
    });

    test("runs when there is no pics", () => {
      const wrapper = shallow(<SearchResult />);
  
      expect(wrapper.find("li")).toHaveLength(0);
    });

    test("runs when array is empty", () => {
      const wrapper = shallow(<SearchResult imgs={[]} />);
  
      expect(wrapper.find("li")).toHaveLength(0);
    });
});
