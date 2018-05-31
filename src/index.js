import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Picker, Image } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import getOptions from './util'

class CountryCurrencyPicker extends Component {
  constructor(props) {
    super(props);
    this.options = getOptions(props.countries, props.size);
  }

  renderRow = (rowData, index, isSelected) => (
    <Image
      style={this.props.iconStyle}
      source={rowData.icon}
      mode="stretch"
    />
  )

  getSelectedCurrencyIcon = value => {
    const selected = this.options.find(option => option.currency === value);
    return selected.icon;
  };

  render() {
    const {
      containerStyle,
      onValueChange,
      selectedValue,
      dropdownStyle,
      iconStyle,
    } = this.props;
    const selectedCurrencyIcon = this.getSelectedCurrencyIcon(selectedValue);
    return (
      <View style={containerStyle}>
        <ModalDropdown
          dropdownStyle={dropdownStyle}
          options={this.options}
          defaultValue=""
          renderRow={this.renderRow}
          onSelect={onValueChange}
        >
          <Image
            source={selectedCurrencyIcon}
            style={iconStyle}
          />
        </ModalDropdown>
      </View>
    )
  }
}

CountryCurrencyPicker.propTypes = {
  containerStyle: View.propTypes.style,
  dropdownStyle: View.propTypes.style,
  iconStyle: Image.propTypes.style,
  countries: PropTypes.array,
  onValueChange: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}

CountryCurrencyPicker.defaultProps = {
  countries: [],
  size: 48,
};

export default CountryCurrencyPicker;
