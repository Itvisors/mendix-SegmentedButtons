import { Component, ReactNode, createElement } from "react";
import { ButtonGroup } from "./components/ButtonGroup";

import { SegmentedButtonsContainerProps } from "../typings/SegmentedButtonsProps";

import "./ui/SegmentedButtons.css";
import Big from "big.js";

interface SegmentedButtonsState {
    updateDate: Date | undefined;
}

export interface Button {
    title: string | undefined;
    key: string | Big | undefined;
    selected?: boolean;
}

export default class SegmentedButtons extends Component<SegmentedButtonsContainerProps> {
    // Two arrays for the buttons are used, one for all buttons and one for only the selected ones
    buttons: Button[];
    buttonsSelected: Button[];
    initialized: boolean;

    readonly state: SegmentedButtonsState = {
        updateDate: undefined
    };
    props: any;

    constructor(props: SegmentedButtonsContainerProps) {
        super(props);
        this.buttons = [];
        this.buttonsSelected = [];
        this.initialized = false;
    }

    componentDidUpdate(prevProps: SegmentedButtonsContainerProps): void {
        // Always refresh widget for first time
        let refresh = !this.initialized;

        // Refresh the data if the refreshAttribute has been set to true
        if (
            prevProps.refreshAttribute &&
            this.props.refreshAttribute &&
            this.props.refreshAttribute.value &&
            !prevProps.refreshAttribute.value
        ) {
            this.props.refreshAttribute.setValue(false);
            // Make sure data and state will be refreshed
            refresh = true;
        }

        // Check if the datasource has been loaded
        if (this.props.dataSourceButtons.status === "available") {
            // If the items have been changed
            if (
                this.props.dataSourceButtons.items &&
                (refresh || this.props.dataSourceButtons.items !== prevProps.dataSourceButtons.items)
            ) {
                const buttonsSelected: Button[] = [];
                const multiSelect = this.props.multiple;
                // Map the options and get the selected ones
                const newButtons = this.props.dataSourceButtons.items.map((buttonItem: any) => {
                    const button = {} as Button;
                    const buttonTitle = this.props.titleAttr.get(buttonItem).value;
                    button.title = buttonTitle;
                    // If key is used, add key to the option
                    if (this.props.keyAttr) {
                        button.key = this.props.keyAttr.get(buttonItem).value;
                    }
                    // If data needs to be refreshed, get default options
                    if (refresh) {
                        button.selected = false;
                        if (this.props.defaultSelectedAttr && this.props.defaultSelectedAttr.get(buttonItem).value) {
                            button.selected = true;
                            if (!multiSelect && buttonsSelected.length === 1) {
                                console.warn(
                                    "Segmented buttons: Multiple options are set as default for a single select."
                                );
                            }
                            buttonsSelected.push({ title: button.title, key: button.key });
                        }
                    } else {
                        // Else check if option is selected (based on the title). This is done since it can be the case that the options have been changed.
                        if (this.buttonsSelected.find(button => button.title === buttonTitle)) {
                            button.selected = true;
                            buttonsSelected.push({ title: button.title, key: button.key });
                        } else {
                            button.selected = false;
                        }
                    }
                    return button;
                });
                this.initialized = true;
                this.buttons = newButtons;
                this.buttonsSelected = buttonsSelected;
                this.props.responseAttribute.setValue(JSON.stringify(buttonsSelected));
                this.setState({ updateDate: new Date() });
            }
        }
    }

    buttonClick = (button: Button): any => {
        const isSelected = !button.selected;
        // First update button array
        const newButtons = this.buttons.map(buttonItem => {
            if (buttonItem.title === button.title) {
                if (isSelected) {
                    return { ...buttonItem, selected: true };
                } else {
                    return { ...buttonItem, selected: false };
                }
            } else {
                // If multiselect is on, the other buttons remain untouched, otherwise the button will be deselected
                if (this.props.multiple) {
                    return { ...buttonItem };
                } else {
                    return { ...buttonItem, selected: false };
                }
            }
        });

        // update buttsonsSelected array, push all selected buttons and remove selected attribute
        const buttonsSelected = newButtons.reduce((filtered: Button[], buttonItem) => {
            if (buttonItem.selected) {
                // add the selected button, but clear selected since the array only contains selected items
                filtered.push({ ...buttonItem, selected: undefined });
            }
            return filtered;
        }, []);

        this.buttons = newButtons;
        this.buttonsSelected = buttonsSelected;

        this.props.responseAttribute.setValue(JSON.stringify(this.buttonsSelected));
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        }
    };

    render(): ReactNode {
        let editable = true;
        if (this.props.editable && this.props.editable.value !== undefined) {
            editable = this.props.editable.value;
        }
        if (this.props.responseAttribute.readOnly) {
            editable = false;
        }
        return (
            <ButtonGroup
                buttons={this.buttons}
                onButtonClick={(button: Button) => this.buttonClick(button)}
                buttonStyle={this.props.buttonStyle}
                buttonStyleSelected={this.props.buttonStyleSelected}
                editable={editable}
            />
        );
    }
}
