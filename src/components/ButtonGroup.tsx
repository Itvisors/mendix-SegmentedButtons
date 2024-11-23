import { Component, ReactNode, createElement } from "react";
import { Button } from "../SegmentedButtons";

export interface ButtonGroupProps {
    buttons: Button[];
    onButtonClick?: Function;
    buttonStyle: string;
    buttonStyleSelected: string;
    editable: boolean;
}

export class ButtonGroup extends Component<ButtonGroupProps> {
    props: any;
    private showButtons(buttonArray: Button[]): any {
        let i = 0;
        return buttonArray.map(button => {
            i++;
            let className = "btn mx-button";
            className += button.selected
                ? " selected btn-" + this.props.buttonStyleSelected
                : " selected btn-" + this.props.buttonStyle;
            className += this.props.editable ? "" : " disabled";
            return (
                <button
                    key={i}
                    className={className}
                    onClick={() =>
                        this.props.onButtonClick && this.props.editable ? this.props.onButtonClick(button) : undefined
                    }
                >
                    {button.title}
                </button>
            );
        });
    }

    render(): ReactNode {
        return <div className="segmentedButtons">{this.showButtons(this.props.buttons)}</div>;
    }
}
