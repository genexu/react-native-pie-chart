import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PieChart />
      </View>
    );
  }
}

AppRegistry.registerComponent('test', () => test);
