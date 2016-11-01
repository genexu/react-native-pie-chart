import React, { Component } from 'react';
import { View } from 'react-native';
import Chart from './Chart.js';

class PieChart extends Component {
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
  render() {
    return (
      <View style={{
        width: this.props.chart_wh,
        height: this.props.chart_wh
      }}>
        <Chart
          chart_wh={this.props.chart_wh}
          series={this.props.series}
          sliceColor={this.props.sliceColor}
          rotate={this.props.rotate}
          percent={this.handlePercent()}
          angle={this.handleAngle()}
          doughnut={this.props.doughnut}
        />
      </View>
    );
  }
}

PieChart.propTypes = {
  chart_wh: React.PropTypes.number.isRequired,
  series: React.PropTypes.array.isRequired,
  sliceColor: React.PropTypes.array.isRequired,
  rotate: React.PropTypes.number,
  doughnut: React.PropTypes.bool,
};

PieChart.defaultProps = {
  doughnut: false,
  rotate: 0
};

export default PieChart;
