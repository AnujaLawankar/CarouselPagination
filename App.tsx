
import {View} from 'react-native';
import React from 'react';
import Slider from './src/components/Slider';
import data from './src/data';

const App = () => {
  return (
    <View>
      <Slider slides={data} />
    </View>
  );
};


export default App;
