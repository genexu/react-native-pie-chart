import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  chart: {
    backgroundColor: 'white'
  }
});

class Chart extends Component {
  render() {
    return (
        <View style={[styles.chart, {width: this.props.chart_w, height: this.props.chart_w}]}></View>
    );
  }
}

Chart.propTypes = {
  chart_w: React.PropTypes.number.isRequired,
};

export default Chart;
