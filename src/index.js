import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Picker, Image, StyleSheet } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import getOptions from './util'
import Icon from 'react-native-vector-icons/MaterialIcons';

class CountryCurrencyPicker extends Component {
  constructor(props) {
    super(props);
    this.options = getOptions(props.countries, props.size);
  }

  renderOption = (rowData, children) => {
    const {
      rowStyle,
      rowLabelStyle,
      iconStyle,
      label,
    } = this.props;
    const _rowStyle = [styles.row, rowStyle];
    const _rowLabelStyle = [styles.rowLabel, rowLabelStyle];

    return (
      <View style={_rowStyle}>
        <Image
          style={iconStyle}
          source={rowData.icon}
          mode="stretch"
        />
        { label && <Text style={_rowLabelStyle}>{rowData[label]}</Text> }
        { children }
      </View>
    )
  }

  renderRow = (rowData, index, isSelected) => {
    return this.renderOption(rowData)
  }

  renderPlaceholder = (children) => {
    const {
      placeholder,
      placeholderStyle,
      placeholderContainerStyle,
      caret,
    } = this.props;
    return (
      <View style={placeholderContainerStyle}>
        <Text style={placeholderStyle}>{placeholder}</Text>
        { children }
      </View>
    )
  }

  renderSelected = () => {
    const { selectedValue, caret, caretStyle } = this.props;
    const selectedCurrency = this.getSelectedCurrency(selectedValue);
    const children = caret && <Icon size={20} name="arrow-drop-down" />;
    return selectedCurrency ? this.renderOption(selectedCurrency, children) : this.renderPlaceholder(children)
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


    return (
      <View style={[containerStyle]}>
        <ModalDropdown
          dropdownStyle={dropdownStyle}
          options={this.options}
          defaultValue=""
          renderRow={this.renderRow}
          onSelect={onValueChange}
        >
          { this.renderSelected() }
        </ModalDropdown>
      </View>
    )
  }
}

CountryCurrencyPicker.propTypes = {
  containerStyle: View.propTypes.style,
  dropdownStyle: View.propTypes.style,
  rowStyle: View.propTypes.style,
  placeholderContainerStyle: View.propTypes.style,
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
  placeholder: 'Please Select',
  caret: true,
};

export default CountryCurrencyPicker;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowLabel: {
    marginHorizontal: 5,
  }
});
