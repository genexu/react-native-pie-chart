import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, StatusBar } from 'react-native';
import PieChart from 'react-native-pie-chart';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd'
  }
});

export default class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={true}
        />
        <PieChart
          chart_wh={300}
          series={[333, 666, 123, 789, 537]}
          sliceColor={['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('test', () => test);
