import React from 'react';
import {
  Dimensions, TouchableOpacity, Text
} from 'react-native';

import SlideItem from './SlideItem';
import Pagination from './Pagination';


import Carousel from 'react-native-reanimated-carousel';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import SBItem from './SBItem';




interface AnimatedCarouseProps {
  slides: any;
}

const AnimatedCarousel = (props: AnimatedCarouseProps) => {


  const colors = [
    '#26292E',
    '#899F9C',
    '#B3C680',
    '#5C6265',
    '#F5D399',
    '#F1F1F1',
  ];

  const window = Dimensions.get('window');
  const PAGE_WIDTH = window.width;
  const PAGE_HEIGHT = window.height;
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT-100,
  };
  const carouselRef = React.useRef<ICarouselInstance>(null);
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);
  const [isFast, setIsFast] = React.useState(false);
  const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);

  return (
    <>
      <Carousel
        {...baseOptions}
        loop={true}
        ref={carouselRef}
        style={{width:'100%'}}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={props.slides}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item}) => <SlideItem item={item} />}
      />
      <TouchableOpacity onPress={()=> {
        if (carouselRef.current)
          carouselRef.current.prev();
      }}>
        <Text>PREVIOUS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> {
        setIsAutoPlay(!isAutoPlay);
      }}>
        <Text>{isAutoPlay ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> {
        if (carouselRef.current)
          carouselRef.current.next();
      }}>
        <Text>NEXT</Text>
      </TouchableOpacity>
    </>
  );
};

export default AnimatedCarousel;
