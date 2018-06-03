# react-native-country-currency-picker

A country-currency picker for React-Native

## Demo
<img src="https://github.com/jkganzan13/react-native-country-currency-picker/blob/master/docs/demo1.gif" width = "160" height = "287.5" alt="Demo 1"/>

## Installation
```sh
npm i --save react-native-country-currency-picker
```

## Usage
```javascript
import CountryCurrencyPicker from 'react-native-country-currency-picker';
```

## API

Prop                | Type            | Optional | Default   | Description
------------------- | --------------- | -------- | --------- | -----------
`countries`         | array           | Yes      | [ ]       | Array of country flags to render as options
`onValueChange`     | func            | No       |           | Callback when item is selected. Called with the following: `index` and `object { currency, country }`
`size`              | string/number   | Yes      | 48        | size of icons. One of `36`, `48`, `64`
`selectedValue`     | string          | Yes      |           | Default value
`placeholder`       | string          | Yes      | Please Select | Placeholder text to render when `selectedValue` does not exist
`label`             | string: `country` or `currency` | Yes      | | Label to render

### Styles
Prop                | Type            | Optional | Default   | Description
------------------- | --------------- | -------- | --------- | -----------
`containerStyle`    | object          | Yes      |           | Style of container
`dropdownStyle`     | object          | Yes      |           | Style of dropdown
`iconStyle`         | object          | Yes      |           | Style of flag icons
`placeholderStyle`  | object          | Yes      |           | Style of placeholder text
