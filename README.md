# react-native-pie-chart
[![NPM](https://nodei.co/npm/react-native-pie-chart.png?downloads=true)](https://nodei.co/npm/react-native-pie-chart/)

Simple pie chart module for your React Native app.  
**Note:** Support both ios and android now.

<img height=560 src="http://i.imgur.com/vVt2K03.png">
<img height=560 src="http://i.imgur.com/IvLKYcx.png">



## Getting Started
1. Install  
`~$ npm install react-native-pie-chart --save`
2. Link ART to your project (only ios need to do this step)

## Setup Example
```bash
# Clone package
~$ git clone https://github.com/genexu/react-native-pie-chart.git

# Setup ART and dependencies
# Notice: link ART to example/ios/example.xcodeproj (ios only)
~$ cd react-native-pie-chart/example
~$ npm run-script setup

# Run simulator
# Notice: plz make sure your simulator state is normal
~$ react-native run-ios
~$ react-native run-android
```

## Usage
**Note:** You can find this example in test folder.
```javascript
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});

export default class test extends Component {
  render() {
    const chart_wh = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <StatusBar
            hidden={true}
          />
          <Text style={styles.title}>Basic</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
          />
          <Text style={styles.title}>Doughnut</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('test', () => test);
```

## Props

| Property            | Type                      | Description                        | Required | Default        |
| ------------------- | ------------------------- | ---------------------------------- | -------- | -------------- |
| chart_wh            | Number                    | chart width and height             | **Yes**  |                |
| coverFill           | String                    | doughnut cover fill color          |   No     | #FFF           |
| coverRadius         | Number                    | doughnut cover radius              |   No     | 0.6            |
| doughnut            | Bool                      | doughnut style                     |   No     | false          |
| series              | Array < number >          | series data array                  | **Yes**  |                |
| sliceColor          | Array < string >          | series slice color array           | **Yes**  |                |
| style               | Object                    | pie chart style                    |   No     | {}             |
