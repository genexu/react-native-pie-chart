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
  handlePercent(){
    const series = this.props.series;
    const sum = series.reduce((previous, current) => {return previous + current;}, 0);
    const percent = series.reduce((previous, current) => {return previous.concat(current/sum);}, []);
    return percent;
  }
  handleAngle(){
    const percent = this.handlePercent();
    const angle = percent.reduce((previous, current) => {
      return previous.concat(previous[previous.length - 1] + Math.round(360 * current));
    }, [0]);
    return angle;
  }
  handleChartShow(){
    if (!this.state.chart_w) return;
    return (
      <Chart
        chart_w={this.state.chart_w}
        series={this.props.series}
        percent={this.handlePercent()}
        angle={this.handleAngle()}
        backgroundColor={this.props.backgroundColor}
      />
    );
  }
  render() {
    return (
      <View style={styles.container}  onLayout={(event) => {
        const {width, height} = event.nativeEvent.layout;
        const container_w = (width <= height) ? width : height;
        this.setState({chart_w: container_w});
      }}>
        {this.handleChartShow()}
      </View>
    );
  }
}

PieChart.propTypes = {
  series: React.PropTypes.array.isRequired,
  backgroundColor: React.PropTypes.array.isRequired,
};

export default PieChart;
