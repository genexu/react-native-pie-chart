import React, { Component } from 'react';
import { ART } from 'react-native';
const { Surface, Group, Path, Shape } = ART;
import Wedge from './Wedge';

class Chart extends Component {
  getRadius(){
    return this.props.chart_wh / 2;
  }
  handleCover(){
    if (!this.props.doughnut) return;
    const radius = this.getRadius();
    const coverRadius = this.props.chart_wh * this.props.coverRadius;
    const coverPath = new Path()
      .moveTo(radius,radius - (coverRadius / 2))
      .arc(0,coverRadius,25)
      .arc(0,-coverRadius,25)
      .close();
    return <Shape d={coverPath} fill="#FFF" stroke="#000000" strokeWidth={0}/>;
  }
  render() {
    return (
      <Surface width={this.props.chart_wh} height={this.props.chart_wh}>
        <Group>
          {Object.keys(this.props.series).map((key)=>{
            return (
              <Wedge
                key={key}
                outerRadius={this.getRadius()}
                startAngle={this.props.angle[parseInt(key)]}
                endAngle={this.props.angle[parseInt(key)+1]}
                fill={this.props.sliceColor[parseInt(key)]}
              />
            );
          })}
          {this.handleCover()}
        </Group>
      </Surface>
    );
  }
}

Chart.propTypes = {
  chart_wh: React.PropTypes.number.isRequired,
  series: React.PropTypes.array.isRequired,
  angle: React.PropTypes.array.isRequired,
  sliceColor: React.PropTypes.array.isRequired,
  doughnut: React.PropTypes.bool.isRequired,
  coverRadius: React.PropTypes.number.isRequired,
};

export default Chart;
