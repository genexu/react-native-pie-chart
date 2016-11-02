import React, { Component } from 'react';
import Chart from './Chart.js';

class PieChart extends Component {
  handleAngle(){
    const series = this.props.series;
    const sum = series.reduce((previous, current) => {return previous + current;}, 0);
    const angle = series.reduce((previous, current, index) => {
      if (index == (series.length - 1)) {
        return previous.concat(360);
      } else {
        return previous.concat(previous[previous.length - 1] + Math.round(360 * current/sum));
      }
    }, [0]);
    return angle;
  }
  render() {
    return (
      <Chart
        {...this.props}
        angle={this.handleAngle()}
      />
    );
  }
}

PieChart.propTypes = {
  chart_wh: React.PropTypes.number.isRequired,
  series: React.PropTypes.array.isRequired,
  sliceColor: React.PropTypes.array.isRequired,
  doughnut: React.PropTypes.bool,
  coverRadius: React.PropTypes.number,
  coverFill: React.PropTypes.string
};

PieChart.defaultProps = {
  doughnut: false,
  coverRadius: 0.6,
  coverFill: '#FFF'
};

export default PieChart;
