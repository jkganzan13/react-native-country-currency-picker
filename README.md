# react-native-country-currency-picker

A country-currency picker for React-Native

## Demo
```
Soon
```

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
`containerStyle`    | object          | Yes      |           | Style of container
`dropdownStyle`     | object          | Yes      |           | Style of dropdown
`iconStyle`         | object          | Yes      |           | Style of flag icons
`countries`         | array           | Yes      | [ ]        | Array of country flags to render as options
`onValueChange`     | func            | No       |           | Callback when item is selected. Called with the following: `index` and `object { currency, country }`
`size`              | string/number   | Yes      | 48     | size of icons. One of `36`, `48`, `64`
