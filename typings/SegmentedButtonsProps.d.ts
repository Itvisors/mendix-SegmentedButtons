/**
 * This file was generated from SegmentedButtons.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ActionValue, DynamicValue, EditableValue, ListValue, ListAttributeValue } from "mendix";
import { Big } from "big.js";

export type ButtonStyleEnum = "default" | "primary" | "inverse" | "info" | "success" | "warning" | "danger";

export type ButtonStyleSelectedEnum = "default" | "primary" | "inverse" | "info" | "success" | "warning" | "danger";

export interface SegmentedButtonsContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    editable?: DynamicValue<boolean>;
    dataSourceButtons: ListValue;
    titleAttr: ListAttributeValue<string>;
    keyAttr?: ListAttributeValue<string | Big>;
    defaultSelectedAttr?: ListAttributeValue<boolean>;
    responseAttribute: EditableValue<string>;
    onClickAction?: ActionValue;
    refreshAttribute?: EditableValue<boolean>;
    multiple: boolean;
    buttonStyle: ButtonStyleEnum;
    buttonStyleSelected: ButtonStyleSelectedEnum;
}

export interface SegmentedButtonsPreviewProps {
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    editable: string;
    dataSourceButtons: {} | { caption: string } | { type: string } | null;
    titleAttr: string;
    keyAttr: string;
    defaultSelectedAttr: string;
    responseAttribute: string;
    onClickAction: {} | null;
    refreshAttribute: string;
    multiple: boolean;
    buttonStyle: ButtonStyleEnum;
    buttonStyleSelected: ButtonStyleSelectedEnum;
}
