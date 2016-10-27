import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Chart from './Chart.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class PieChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chart_w: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}  onLayout={(event) => {
        const {width, height} = event.nativeEvent.layout;
        const container_w = (width <= height) ? width : height;
        this.setState({chart_w: container_w});
      }}>
        <Chart chart_w={this.state.chart_w}/>
      </View>
    );
  }
}

export default PieChart;
