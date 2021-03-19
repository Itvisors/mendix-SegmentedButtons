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
        let refresh = !this.initialized;

        // Refresh the data if the refreshAttribute has been set to true
        if(prevProps.refreshAttribute && this.props.refreshAttribute &&
            this.props.refreshAttribute.value && !prevProps.refreshAttribute.value) {
            
            this.props.refreshAttribute.setValue(false);
            // Make sure data and state will be refreshed
            refresh = true; 
        }

        // Check if the datasource has been loaded
        if (this.props.dataSourceButtons.status === 'available') {
            // If the items have been changed
            if (this.props.dataSourceButtons.items &&
                (refresh || this.props.dataSourceButtons.items !== prevProps.dataSourceButtons.items)) {
                let buttonsSelected = 0;
                const multiSelect = this.props.multiple;
                // Map the options and get the selected ones
                const newButtons = this.props.dataSourceButtons.items.map(buttonItem => {
                    const button = {} as Button; 
                    const buttonTitle = this.props.titleAttr(buttonItem).value;
                    button.title = buttonTitle;
                    //If key is used, add key to the option
                    if (this.props.keyAttr) {
                        button.key = this.props.keyAttr(buttonItem).value;
                    }
                    // If data needs to be refreshed, get default options
                    if (refresh) {
                        button.selected = false;
                        if (this.props.defaultSelectedAttr && this.props.defaultSelectedAttr(buttonItem).value) {
                            button.selected = true;
                            if (!multiSelect && buttonsSelected === 1) {
                                console.warn("Segmented buttons: Multiple options are set as default for a single select.");
                                buttonsSelected ++;
                            } 
                        }
                    } else {
                        // Else check if option is selected (based on the title). This is done since it can be the case that the options have been changed.
                        if (this.buttons.find(button => button.selected && button.title === buttonTitle)) {
                            button.selected = true;
                        }
                    }
                    return button;
                })
                this.initialized = true;
                this.buttons = newButtons;
                this.props.responseAttribute.setValue(JSON.stringify(this.buttons));
                this.setState({updateDate: new Date()});
            }
        }
    }

    buttonClick = (button : Button) => { 
        button.selected = !button.selected;
        this.props.responseAttribute.setValue(JSON.stringify(this.buttons));
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
                this.props.onClickAction.execute();
        }   
    }

    render(): ReactNode {
        return <ButtonGroup 
            buttons = {this.buttons}
            onButtonClick = {(button : Button) => this.buttonClick(button)}
        />;
    }
}