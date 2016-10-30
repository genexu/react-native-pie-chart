import React, { Component } from 'react';
import { StyleSheet, View, ART } from 'react-native';
const { Surface, Group, Path, Shape } = ART;
import Wedge from './Wedge';

const styles = StyleSheet.create({
  chart: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});

class Chart extends Component {
  render() {
    const pieMargin = 10;
    const sw = this.props.chart_w - pieMargin;
    const radius = sw / 2;
    const cover = sw * 0.6;
    const path = new Path()
      .moveTo(radius,radius - (cover / 2))
      .arc(0,cover,25)
      .arc(0,-cover,25)
      .close();

    return (
        <View style={[styles.chart, {width: this.props.chart_w, height: this.props.chart_w}]}>
          <View style={{
            transform:[{rotate: '0deg'}]
          }}>
            <Surface width={sw} height={sw}>
              <Group>
                {Object.keys(this.props.series).map((key)=>{
                  return (
                    <Wedge
                      key={key}
                      outerRadius={radius}
                      startAngle={this.props.angle[parseInt(key)]}
                      endAngle={this.props.angle[parseInt(key)+1]}
                      fill={this.props.backgroundColor[parseInt(key)]}
                    />
                  );
                })}
                <Shape d={path} fill="#FFF" stroke="#000000" strokeWidth={0}/>
              </Group>
            </Surface>
          </View>
        </View>
    );
  }
}

Chart.propTypes = {
  chart_w: React.PropTypes.number.isRequired,
  series: React.PropTypes.array.isRequired,
  angle: React.PropTypes.array.isRequired,
  backgroundColor: React.PropTypes.array.isRequired,
};

export default Chart;
