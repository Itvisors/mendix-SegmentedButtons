/**
 * This file was generated from SegmentedButtons.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, ListValue, ListAttributeValue } from "mendix";

export type ButtonStyleEnum = "default" | "primary" | "inverse" | "info" | "success" | "warning" | "danger";

export type ButtonStyleSelectedEnum = "default" | "primary" | "inverse" | "info" | "success" | "warning" | "danger";

export interface SegmentedButtonsContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    id: string;
    editable?: DynamicValue<boolean>;
    dataSourceButtons: ListValue;
    titleAttr: ListAttributeValue<string>;
    keyAttr?: ListAttributeValue<string | BigJs.Big>;
    defaultSelectedAttr?: ListAttributeValue<boolean>;
    multiple: boolean;
    buttonStyle: ButtonStyleEnum;
    buttonStyleSelected: ButtonStyleSelectedEnum;
    onClickAction?: ActionValue;
    responseAttribute: EditableValue<string>;
    refreshAttribute?: EditableValue<boolean>;
}

export interface SegmentedButtonsPreviewProps {
    class: string;
    style: string;
    editable: string;
    dataSourceButtons: {} | null;
    titleAttr: string;
    keyAttr: string;
    defaultSelectedAttr: string;
    multiple: boolean;
    buttonStyle: ButtonStyleEnum;
    buttonStyleSelected: ButtonStyleSelectedEnum;
    onClickAction: {} | null;
    responseAttribute: string;
    refreshAttribute: string;
}
