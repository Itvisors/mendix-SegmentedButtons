## SegmentedButtons
Show a group of buttons dynamically and use it for single or multi select or to perform actions

## Features
- Multiselect for a limited set of options in a user friendly way
- Use for single select
- Refresh options dynamically, e.g. for use of dynamic tab pages
- Styling options for when the button is selected or deselected
- Dynamically disable or enable the widget

## Configuration
### General
- Default mendix behavior for labeling.
- Editable: Whether or not the widget is ediable. If left empty, the widget will be editable.
- Data source: For every item returned, a button is created. Every item can have:
  - Title: String attribute where the title is stored to be shown in the button. Should be unique to be able to make a distinction between the items.
  - Key: Attribute where the key is stored. This key is only used to be returned in the response and can be used when the title does not suffice to find the object in mendix.
  - Default selected: Boolean attribute where is stored whether this option is selected by default or not.
- Response: Attribute where the selected button(s) are stored in json format ([{"title":"example1","key":"string"}]. User needs write access on this attribute.

### Options
- On Change Action: Action to trigger when a button is clicked. Since this action is triggered for every change and this can happen quite fast, it is wise to keep this action very short. The response can best be mapped when used e.g. on save of the page.
- Refresh: Set to true to refresh the widget back to the default values, widget will set the value back to false. Make sure the user has got write access.
- Multi-select: If set to true, multiple options can be selected. Otherwise, the widget can be used as single-select.
- Button style: The style the button will get when not selected.
- Button style selected: The style the button will get when selected.
