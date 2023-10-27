
import {View} from 'react-native';
import React from 'react';
import Slider from './src/components/Slider';
import AnimatedCarousel from './src/components/AnimatedCarousel';
import data from './src/data';

const App = () => {
  const useOldCode = false;
  const CarouselType = useOldCode ? Slider : AnimatedCarousel;

  return (
    <View >
      <CarouselType slides={data} />
    </View>
  );
};


export default App;
