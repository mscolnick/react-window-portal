import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { WindowPortal } from "../react-window-portal";

Enzyme.configure({ adapter: new Adapter() });

window.open = () => window;

let newWindow: Window | null = null;
const windowRef = (w: Window | null) => {
    newWindow = w;
};

describe("WindowPortal", () => {
    beforeEach(() => {
        newWindow = null;
    });

    it("should create new container", () => {
        shallow(<WindowPortal windowRef={windowRef} height={100} width={100} />);
        expect(newWindow).toBeTruthy();
        expect(newWindow!.document.querySelector(".react-window-portal")).toBeTruthy();
    });

    it.skip("should mount its children in the container", () => {
        shallow(
            <WindowPortal windowRef={windowRef} height={100} width={100}>
                <button className="unique-button" />
            </WindowPortal>,
        );
        expect(newWindow).toBeTruthy();
        expect(newWindow!.document.querySelector(".unique-button")).toBeTruthy();
    });
});
