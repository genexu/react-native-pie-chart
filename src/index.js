import React, { Component } from 'react';
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
  coverRadius: React.PropTypes.number
};

PieChart.defaultProps = {
  doughnut: false,
  coverRadius: 0.6
};

export default PieChart;
