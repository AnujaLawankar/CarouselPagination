import React, {useRef, useState} from 'react';
import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import SlideItem from './SlideItem';
import Carousel from 'react-native-reanimated-carousel';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pagination from './Pagination';

interface AnimatedCarouseProps {
  slides: any;
}

const AnimatedCarousel = (props: AnimatedCarouseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isFast, setIsFast] = useState(false);
  const [isPagingEnabled, setIsPagingEnabled] = useState(true);

  const window = Dimensions.get('window');
  const PAGE_WIDTH = window.width;
  const PAGE_HEIGHT = window.height;
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT - 200
  };



  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => console.log('Hit Like')}
        >
          <Ionicons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => console.log('Hit Share')}
        >
          <Ionicons name="share-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <Carousel
        {...baseOptions}
        loop={true}
        ref={carouselRef}
        style={{width: '100%'}}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={props.slides}
        pagingEnabled={isPagingEnabled}
        onSnapToItem={index => {
          setCurrentIndex(index);
          console.log('current index:', index);
        }}
        renderItem={({item}) => <SlideItem item={item} />}
      />
      {/* Render the Pagination component and pass required props */}
      <Pagination
        slides={props.slides}
        currentIndex={currentIndex}
        carouselRef={carouselRef}
      />

      <View style={styles.imageIconContainer}>
        <TouchableOpacity
          style={styles.imageIconButton}
          onPress={() => console.log('Photos Hits')}
        >
          <Ionicons name="images-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>


      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() => {
            if (carouselRef.current) carouselRef.current.prev();
          }}
          style={styles.controlButton}
        >
          <Ionicons name="play-back" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsAutoPlay(!isAutoPlay)}
          style={styles.controlButton}
        >
          <Ionicons name={isAutoPlay ? 'pause' : 'play'} size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (carouselRef.current) carouselRef.current.next();
          }}
          style={styles.controlButton}
        >
          <Ionicons name="play-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'black'
  },

  controls: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  controlButton: {
    marginHorizontal: 10
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10 // Adjust the margin to create space for the image icon
  },
  iconButton: {
    backgroundColor: 'transparent',
    marginHorizontal: 10
  },
  imageIconContainer: {
    position: 'absolute',
    bottom: 10, // Adjust the bottom value for the desired position
    right: 10 // Adjust the right value for the desired position
  },
  imageIconButton: {
    backgroundColor: 'transparent'
  }
});

export default AnimatedCarousel;

