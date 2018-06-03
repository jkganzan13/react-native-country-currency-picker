import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import CountryCurrencyPicker from 'react-native-country-currency-picker';

export default class App extends React.Component {
  state = {
    demo1: {},
    demo2: {},
    demo3: {},
    demo4: {},
  }

  onChange = demo => (index, selectedItem) => {
    this.setState({
      [demo]: {
        index,
        ...selectedItem,
      }
    })
  }

  renderDemo = (demo, title, props) => {
    return (
      <ScrollView style={styles.subContainer}>
        <Text style={styles.header}>{title}</Text>
        <View>
          <Text>Selected Index: {this.state[demo].index}</Text>
          <Text>Selected Country: {this.state[demo].country}</Text>
          <Text>Selected Currency: {this.state[demo].currency}</Text>
        </View>
        <CountryCurrencyPicker
          containerStyle={styles.containerStyle}
          {...props}
        />
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.renderDemo('demo1', 'Basic', {
            onValueChange: this.onChange('demo1'),
            selectedValue: this.state['demo1'].currency
          })
        }
        {
          this.renderDemo('demo2', 'Whitelisted Countries', {
            onValueChange: this.onChange('demo2'),
            selectedValue: this.state['demo2'].currency,
            countries: ['NZ', 'US', 'PH'],
          })
        }
        {
          this.renderDemo('demo3', 'Country Labels', {
            onValueChange: this.onChange('demo3'),
            selectedValue: this.state['demo3'].currency,
            countries: ['NZ', 'US', 'PH'],
            label: 'country',
          })
        }
        {
          this.renderDemo('demo4', 'Currency Labels', {
            onValueChange: this.onChange('demo4'),
            selectedValue: this.state['demo4'].currency,
            countries: ['NZ', 'US', 'PH'],
            label: 'currency',
          })
        }
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  subContainer: {
    padding: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  containerStyle: {
    backgroundColor: 'lightblue',
  },
});
