import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Picker, Image, StyleSheet } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import getOptions from './util'

class CountryCurrencyPicker extends Component {
  constructor(props) {
    super(props);
    this.options = getOptions(props.countries, props.size);
  }

  renderRow = (rowData, index, isSelected) => {
    const rowStyle = [styles.row, this.props.rowStyle];
    const rowLabelStyle = [styles.rowLabel, this.props.rowLabelStyle];

    return (
      <View style={rowStyle}>
        <Image
          style={this.props.iconStyle}
          source={rowData.icon}
          mode="stretch"
        />
        { this.props.label && <Text style={rowLabelStyle}>{rowData[this.props.label]}</Text> }
      </View>
    )
  }

  renderPlaceholder = () => {
    return (
      <Text style={this.props.placeholderStyle}>{placeholder}</Text>
    )
  }

  getSelectedCurrency = value => {
    const selected = this.options.find(option => option.currency === value);
    return selected;
  };

  render() {
    const {
      containerStyle,
      onValueChange,
      selectedValue,
      dropdownStyle,
      iconStyle,
      placeholder,
      size,
    } = this.props;

    const selectedCurrency = this.getSelectedCurrency(selectedValue);

    return (
      <View style={[containerStyle]}>
        <ModalDropdown
          dropdownStyle={dropdownStyle}
          options={this.options}
          defaultValue=""
          renderRow={this.renderRow}
          onSelect={onValueChange}
        >
          { selectedCurrency ? this.renderRow(selectedCurrency) : this.renderPlaceholder() }
        </ModalDropdown>
      </View>
    )
  }
}

CountryCurrencyPicker.propTypes = {
  containerStyle: View.propTypes.style,
  dropdownStyle: View.propTypes.style,
  rowStyle: View.propTypes.style,
  placeholderStyle: Text.propTypes.style,
  rowLabelStyle: Text.propTypes.style,
  iconStyle: Image.propTypes.style,
  countries: PropTypes.array,
  onValueChange: PropTypes.func.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  label: PropTypes.oneOf(['country', 'currency']),
  selectedValue: PropTypes.string,
}

CountryCurrencyPicker.defaultProps = {
  countries: [],
  size: 48,
  placeholder: 'Please Select'
};

export default CountryCurrencyPicker;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  rowLabel: {
    marginHorizontal: 5,
    paddingBottom: 5,
  }
});
