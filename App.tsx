import {View} from 'react-native';
import React from 'react';
import Slider from './src/components/Slider';
import AnimatedCarousel from './src/components/AnimatedCarousel';
import data from './src/data';

const App = () => {
  const useOldCode = false;
  const CarouselType = useOldCode ? Slider : AnimatedCarousel;

  //-- VS: if you want to use View here, which you might, you need to have flex:1 here
  return (
    <View style={{flex: 1}}>
      <CarouselType slides={data} />
    </View>
  );
};

export default App;
