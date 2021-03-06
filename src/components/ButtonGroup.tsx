import { Component, ReactNode, createElement } from "react";
import { Button } from "../SegmentedButtons";

export interface ButtonGroupProps {
    buttons: Array<Button>;
    onButtonClick?: Function;
    buttonStyle: String;
    buttonStyleSelected: String;
    editable: Boolean;
}

export class ButtonGroup extends Component<ButtonGroupProps> {
    private showButtons(buttonArray: Array<Button>) {
        return buttonArray.map((button) => {
            let className = "btn mx-button"
            className += button.selected ? " selected btn-" + this.props.buttonStyleSelected : " selected btn-" + this.props.buttonStyle;
            className += this.props.editable ? "" : " disabled";
            return <button 
                className = {className}
                onClick = {() => this.props.onButtonClick && this.props.editable ? this.props.onButtonClick(button) : undefined}
                >
                    {button.title}
                </button>
        });
    }
    
    render(): ReactNode {;
        return <div className = "segmentedButtons">
                {this.showButtons(this.props.buttons)}
            </div>;
    }
}
