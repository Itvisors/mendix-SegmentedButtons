import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { SegmentedButtonsPreviewProps } from "../typings/SegmentedButtonsProps";

declare function require(name: string): string;

export class preview extends Component<SegmentedButtonsPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/SegmentedButtons.css");
}
