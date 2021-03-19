/**
 * This file was generated from SegmentedButtons.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue, ListValue, ListAttributeValue } from "mendix";

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
    onClickAction: {} | null;
    responseAttribute: string;
    refreshAttribute: string;
}
