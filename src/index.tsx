import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import Pie from './Pie';

export type Props = {
  widthAndHeight: number;
  series: number[];
  sliceColor: string[];
  coverFill?: string;
  coverRadius?: number;
  doughnut?: boolean;
  style?: StyleProp<ViewStyle>;
};

const PieChart = ({
  widthAndHeight,
  series,
  sliceColor,
  coverFill = '#FFF',
  coverRadius = 0.6,
  doughnut = false,
  style = {},
}: Props): JSX.Element => {
  const handleAngle = () => {
    const sum = series.reduce((previous, current) => previous + current, 0);
    const angle = series.reduce(
      (previous, current, index) => {
        if (index == series.length - 1) {
          return previous.concat(360);
        }
        return previous.concat(previous[previous.length - 1] + Math.round((360 * current) / sum));
      },
      [0]
    );
    return angle;
  };

  return (
    <Pie
      widthAndHeight={widthAndHeight}
      series={series}
      sliceColor={sliceColor}
      coverFill={coverFill}
      coverRadius={coverRadius}
      doughnut={doughnut}
      style={style}
      angle={handleAngle()}
    />
  );
};

export default PieChart;
