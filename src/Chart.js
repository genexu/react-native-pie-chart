import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  chart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pieBackground: {
    backgroundColor: '#EFEFEF'
  }
});

const pieMargin = 10;

class Chart extends Component {
  render() {
    return (
        <View style={[styles.chart, {width: this.props.chart_w, height: this.props.chart_w}]}>
            <View
              style={[
                styles.pieBackground,{
                  height: this.props.chart_w - pieMargin,
                  width: this.props.chart_w - pieMargin,
                  borderRadius: (this.props.chart_w - pieMargin) / 2
                }]}
            >
            </View>
        </View>
    );
  }
}

Chart.propTypes = {
  chart_w: React.PropTypes.number.isRequired,
};

export default Chart;
