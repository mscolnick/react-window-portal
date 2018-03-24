import React from "react";
import ReactDOM from "react-dom";
import { copyStyles } from "./copyStyles";

export interface IWindowPortalProps {
    /** Window width. */
    width: number;
    /** Window height. */
    height: number;
    /** Window top. */
    top?: number;
    /** Window left. */
    left?: number;
    /** Ref handler that receives the created window. */
    windowRef?(ref: Window | null): void;
    /** Callback invoked when the external window is being closed. */
    onCloseWindow?(): void;
}

export class WindowPortal extends React.PureComponent<IWindowPortalProps> {
    private containerEl: HTMLDivElement;
    private externalWindow: Window | null;

    constructor(props: IWindowPortalProps) {
        super(props);
        this.containerEl = document.createElement("div");
        this.containerEl.className = "react-window-portal";
        this.externalWindow = null;
    }

    public render(): React.ReactPortal {
        return ReactDOM.createPortal(this.props.children, this.containerEl);
    }

    public componentDidMount(): void {
        const { width, height, top = 0, left = 0 } = this.props;
        this.externalWindow = window.open("", "", `width=${width},height=${height},left=${top},top=${left}`);

        if (this.props.windowRef) {
            this.props.windowRef(this.externalWindow);
        }

        if (this.externalWindow) {
            // copy styles
            copyStyles(document, this.externalWindow.document);

            this.externalWindow.document.body.appendChild(this.containerEl);
        } else {
            // tslint:disable-next-line:no-console
            console.error("[react-window-portal] Error creating external window");
        }
    }

    public componentWillUnmount(): void {
        if (this.externalWindow) {
            if (this.props.onCloseWindow) {
                this.props.onCloseWindow();
            }

            this.externalWindow.close();
        }
    }
}
