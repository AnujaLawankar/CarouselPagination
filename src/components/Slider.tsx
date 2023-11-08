import {
  Animated,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewabilityConfigCallbackPair,
  ViewToken
} from 'react-native';

import React, {useRef, useState} from 'react';
import SlideItem from './SlideItem';
import Pagination from './Pagination';

interface SliderProps {
  slides: any;
}

const Slider = (props: SliderProps) => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}:any) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <>
      <FlatList
        data={props.slides}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal={true}
        pagingEnabled={true}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          handleOnScroll(event);
        }}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={props.slides} scrollX={scrollX} index={index} />
    </>
  );
};

export default Slider;
