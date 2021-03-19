import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { SegmentedButtonsContainerProps } from "../typings/SegmentedButtonsProps";

import "./ui/SegmentedButtons.css";

export default class SegmentedButtons extends Component<SegmentedButtonsContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
