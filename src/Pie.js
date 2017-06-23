import React, { Component } from 'react';
import { Platform, ART, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
const { Surface, Group, Path, Shape } = ART;
import Wedge from './Wedge';

class Pie extends Component {
  getRadius(){
    return this.props.chart_wh / 2;
  }
  handleCover(){
    if (!this.props.doughnut) return;
    const radius = this.getRadius();
    const coverRadius = this.props.chart_wh * this.props.coverRadius;
    const coverPath = new Path()
      .moveTo(radius, radius - (coverRadius / 2))
      .arc(0, coverRadius, 25)
      .arc(0, -coverRadius, 25)
      .close();
    return <Shape d={coverPath} fill={this.props.coverFill}/>;
  }
  render() {
    const radius = this.getRadius();
    const rotation = Platform.OS === 'ios' ? 0 : -90;
    return (
      <Surface style={this.props.style} width={this.props.chart_wh} height={this.props.chart_wh}>
        <Group rotation={rotation} originX={radius} originY={radius}>
          {Object.keys(this.props.series).map((key)=>{
            if (this.props.angle[key] != this.props.angle[parseInt(key)+1]) {
              return (
                <Wedge
                  key={key}
                  outerRadius={this.getRadius()}
                  startAngle={this.props.angle[key]}
                  endAngle={this.props.angle[parseInt(key)+1]}
                  fill={this.props.sliceColor[key]}
                />
              );
            }
          })}
          {this.handleCover()}
        </Group>
      </Surface>
    );
  }
}

Pie.propTypes = {
  angle: PropTypes.array.isRequired,
  chart_wh: PropTypes.number.isRequired,
  coverFill: PropTypes.string.isRequired,
  coverRadius: PropTypes.number.isRequired,
  doughnut: PropTypes.bool.isRequired,
  series: PropTypes.array.isRequired,
  sliceColor: PropTypes.array.isRequired,
  style: ViewPropTypes.style,
};

export default Pie;
