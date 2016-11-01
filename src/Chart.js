import React, { Component } from 'react';
import { View, ART } from 'react-native';
const { Surface, Group, Path, Shape } = ART;
import Wedge from './Wedge';

class Chart extends Component {
  render() {
    const radius = this.props.chart_wh / 2;
    const cover = this.props.chart_wh * 0.6;
    const coverPath = new Path()
      .moveTo(radius,radius - (cover / 2))
      .arc(0,cover,25)
      .arc(0,-cover,25)
      .close();

    return (
      <View style={{
        transform:[{rotate: `${this.props.rotate}deg`}]
      }}>
        <Surface width={this.props.chart_wh} height={this.props.chart_wh}>
          <Group>
            {Object.keys(this.props.series).map((key)=>{
              return (
                <Wedge
                  key={key}
                  outerRadius={radius}
                  startAngle={this.props.angle[parseInt(key)]}
                  endAngle={this.props.angle[parseInt(key)+1]}
                  fill={this.props.sliceColor[parseInt(key)]}
                />
              );
            })}
            <Shape d={coverPath} fill="#FFF" stroke="#000000" strokeWidth={0}/>
          </Group>
        </Surface>
      </View>
    );
  }
}

Chart.propTypes = {
  chart_wh: React.PropTypes.number.isRequired,
  series: React.PropTypes.array.isRequired,
  angle: React.PropTypes.array.isRequired,
  sliceColor: React.PropTypes.array.isRequired,
  rotate: React.PropTypes.number.isRequired,
};

export default Chart;
