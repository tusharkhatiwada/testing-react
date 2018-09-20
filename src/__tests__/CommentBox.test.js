import React from "react";
// mount is imported from Full DOM Rendering
import { mount } from "enzyme";

// import for snapshot testing. npm install --save react-test-renderer
import renderer from "react-test-renderer";

import CommentBox from "../CommentBox";

describe("CommentBox", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<CommentBox />);
    });

    afterEach(() => {
        // unmount after the test case for performance
        wrapper.unmount();
    });

    it("has a textarea and a button", () => {
        expect(wrapper.find("textarea").length).toEqual(1);
        expect(wrapper.find("button").length).toEqual(2);
    });

    it("has a textarea and receives a value", () => {
        // simulates the change event of textarea
        wrapper.find("textarea").simulate("change", {
            target: {
                value: "New Comment"
            }
        });

        // update the component
        wrapper.update();

        // expectation
        expect(wrapper.find("textarea").prop("value")).toEqual("New Comment");
    });

    it("clears the textarea when form is submit", () => {
        wrapper.find("textarea").simulate("change", {
            target: {
                value: "New Comment"
            }
        });

        wrapper.update();

        // simulates form sumbit event
        wrapper.find("form").simulate("submit");

        wrapper.update();

        expect(wrapper.find("textarea").prop("value")).toEqual("");
    });

    it("renders correctly", () => {
        const tree = renderer.create(<CommentBox />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
