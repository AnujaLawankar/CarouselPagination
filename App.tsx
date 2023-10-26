
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Slider from './src/components/Slider';
import AnimatedCarousel from './src/components/AnimatedCarousel';
import data from './src/data';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = ({ carouselRef }) => {
  const useOldCode = false;
  const CarouselType = useOldCode ? Slider : AnimatedCarousel;

  return (

<View >
      <CarouselType slides={data} />
</View>


  );
};


export default App;
