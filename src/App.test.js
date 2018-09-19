import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

// it("renders app component correctly", () => {
//     // Creates a DOM inside testing terminal
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div);

//     expect(div.innerHTML).toContain("Welcome");

//     ReactDOM.unmountComponentAtNode(div);
//     // Cleans up for performance issue
// });

describe("App", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    it("renders <CommentBox /> component", () => {
        expect(wrapper.find(CommentBox).length).toEqual(1);
    });

    it("renders <CommentList /> component", () => {
        expect(wrapper.find(CommentList).length).toEqual(1);
    });
});
