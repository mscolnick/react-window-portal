import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { WindowPortal } from "../react-window-portal";

Enzyme.configure({ adapter: new Adapter() });

describe("WindowPortal", () => {
    it("should render without throwing an error", () => {
        expect(shallow(<WindowPortal height={100} width={100} />).contains(<div className="foo">Bar</div>)).toBe(true);
    });

    it('should be selectable by class "foo"', () => {
        expect(shallow(<WindowPortal height={100} width={100} />).is(".react-window-portal")).toBe(true);
    });

    it("should mount in a full DOM", () => {
        expect(mount(<WindowPortal height={100} width={100} />).find(".react-window-portal").length).toBe(1);
    });
});
