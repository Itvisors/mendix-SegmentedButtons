import { Component, ReactNode, createElement } from "react";
import { ButtonGroup } from "./components/ButtonGroup";

import { SegmentedButtonsContainerProps } from "../typings/SegmentedButtonsProps";

import "./ui/SegmentedButtons.css";
import Big from "big.js";

interface SegmentedButtonsState {
    updateDate: Date | undefined;
}

export interface Button {
    title: String | undefined;
    key: String | Big | undefined;
    selected: Boolean;
    id: number;
  }

export default class SegmentedButtons extends Component<SegmentedButtonsContainerProps> {
    buttons: Array<Button>;
    initialized: Boolean;

    constructor(props: SegmentedButtonsContainerProps) {
        super(props);
        this.buttons = [];
        this.initialized = false;
    }

    readonly state: SegmentedButtonsState = { 
        updateDate: undefined,
    };

    componentDidUpdate (prevProps: SegmentedButtonsContainerProps) {
        // Check if the datasource has been loaded
        if (this.props.dataSourceButtons.status === 'available') {
            // If the items have been changed
            if (this.props.dataSourceButtons.items && this.props.dataSourceButtons.items !== prevProps.dataSourceButtons.items) {
                let buttonsSelected = 0;
                const multiSelect = this.props.multiple;
                let buttonId = 0;
                // Map the options and get the selected ones
                this.buttons = this.props.dataSourceButtons.items.map(buttonItem => {
                    const button = {} as Button; 
                    button.title = this.props.titleAttr(buttonItem).value;
                    //If key is used, add key to the option
                    if (this.props.keyAttr) {
                        button.key = this.props.keyAttr(buttonItem).value;
                    }
                    button.id = buttonId;
                    buttonId++;
                    // Set selected options
                    if (this.props.selectedAttr && this.props.selectedAttr(buttonItem).value) {
                        button.selected = true;
                        if (!multiSelect && buttonsSelected === 1) {
                            console.warn("Segmented buttons: Multiple options are set as default for a single select.");
                            buttonsSelected ++;
                        } 
                    }
                    return button;
                })
                this.initialized = true;
                this.props.responseAttribute.setValue(JSON.stringify(this.buttons));
                this.setState({updateDate: new Date()});
            }
        }
    }

    buttonClick = (buttonId: number) => { 
        if (this.props.dataSourceButtons.items && this.props.onClickAction) {
            const buttonClicked = this.props.dataSourceButtons.items[buttonId];
            const onClickAction = this.props.onClickAction(buttonClicked);
            if (onClickAction.canExecute) {
                onClickAction.execute();
            }
        }   
    }

    render(): ReactNode {
        return <ButtonGroup 
            buttons = {this.buttons}
            onButtonClick = {(buttonId: number) => this.buttonClick(buttonId)}
        />;
    }
}
