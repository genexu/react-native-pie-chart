import React from 'react';
import { Platform, ViewStyle, StyleProp } from 'react-native';
// @ts-expect-error 'Path' is not defined in the types, but actually exists
import { Surface, Group, Path, Shape } from '@react-native-community/art';

import Wedge from './Wedge';

type Props = {
  angle: number[];
  chartWidthAndHeight: number;
  coverFill: string;
  coverRadius: number;
  doughnut: boolean;
  series: number[];
  sliceColor: string[];
  style?: StyleProp<ViewStyle>;
};

const Pie = ({
  angle,
  chartWidthAndHeight,
  coverFill,
  coverRadius,
  doughnut,
  series,
  sliceColor,
  style,
}: Props): JSX.Element => {
  const handleCover = (): JSX.Element | null => {
    if (!doughnut) {
      return null;
    }

    const radius = getRadius();
    const actualCoverRadius = chartWidthAndHeight * coverRadius;
    const coverPath = new Path()
      .moveTo(radius, radius - actualCoverRadius / 2)
      .arc(0, actualCoverRadius, 25)
      .arc(0, -actualCoverRadius, 25)
      .close();

    return <Shape d={coverPath} fill={coverFill} />;
  };

  const getRadius = () => chartWidthAndHeight / 2;

  const radius = getRadius();
  const rotation = Platform.OS === 'ios' ? 0 : -90;
  return (
    <Surface style={style} width={chartWidthAndHeight} height={chartWidthAndHeight}>
      {/* @ts-expect-error 'rotation' is not defined in the types, but actually exists */}
      <Group rotation={rotation} originX={radius} originY={radius}>
        {Object.keys(series).flatMap((key) => {
          if (angle[key] != angle[parseInt(key, 10) + 1]) {
            return [
              <Wedge
                key={key}
                outerRadius={getRadius()}
                startAngle={angle[key]}
                endAngle={angle[parseInt(key, 10) + 1]}
                fill={sliceColor[key]}
              />,
            ];
          }
          return [];
        })}
        {handleCover()}
      </Group>
    </Surface>
  );
};

export default Pie;
