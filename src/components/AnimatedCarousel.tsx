import React, {useRef, useState} from 'react';
import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
//import SlideItem from './SlideItem';
import Carousel from 'react-native-reanimated-carousel';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pagination from './Pagination';
import {moderateScale, scale} from 'react-native-size-matters';

import Tiles from './Tiles';

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
    height: PAGE_HEIGHT,
  };

  return (
    <View style={styles.container}>
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
        renderItem={({item}) => <Tiles item={item} />}
      />

      {/* Render the Pagination component and pass required props */}
      <Pagination
        slides={props.slides}
        currentIndex={currentIndex}
        carouselRef={carouselRef}
      />

      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => console.log('Hit Like')}>
          <Ionicons name="heart-outline" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Hit Share')}>
          <Ionicons name="share-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.imageIconContainer}> */}
        <TouchableOpacity
          style={styles.imageIconButton}
          onPress={() => console.log('Photos Hits')}>
          <Ionicons name="images-outline" size={30} color="white" />
        </TouchableOpacity>
      {/* </View> */}

      <View style={styles.controls}>
        <View style={styles.backplay}>
          <TouchableOpacity
            onPress={() => {
              if (carouselRef.current) carouselRef.current.prev();
            }}
            style={styles.controlButton}>
            <Ionicons name="play-back" size={20} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.play}>
          <TouchableOpacity
            onPress={() => setIsAutoPlay(!isAutoPlay)}
            style={styles.controlButton}>
            <Ionicons
              name={isAutoPlay ? 'pause' : 'play'}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.Nextplay}>
          <TouchableOpacity
            onPress={() => {
              if (carouselRef.current) carouselRef.current.next();
            }}
            style={styles.controlButton}>
            <Ionicons name="play-forward" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 5,
    
  },

  controls: {
    borderColor: 'yellow',
    borderWidth: 5,
    // flexDirection: 'row',
    // justifyContent: 'center'
   // flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 150,
    margin: 100,
    alignItems: 'center',
  },
  controlButton: {
    borderColor: 'blue',
    borderWidth: 5,
    //marginHorizontal: scale(10),
  },
  iconRow: {
    zIndex: 1,
    borderColor: 'yellow',
    borderWidth: 5,
    // backgroundColor: 'black',
    // width: 40,
    // height: 40,
  //  position: 'absolute',
    flexDirection: 'row',
  marginTop: moderateScale(40),
    marginLeft: scale(250),
    justifyContent: 'flex-end',
    // marginBottom: 10 // Adjust the margin to create space for the image icon
  },

  // imageIconContainer: {
  //   width:'10%',
  //   height:'10%',
  //   borderColor: 'green',
  //   borderWidth: 5,
  //   position: 'absolute',
  //   paddingTop: 300,
  //   paddingLeft: 350,
  //   paddingBottom: 20,
  // },
  imageIconButton: {
    borderColor: 'blue',
    borderWidth: 5,
    
  },
  backplay: {
    borderColor: 'yellow',
    borderWidth: 5,
    backgroundColor: '#87cefa',
    width: 50,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  play: {
    backgroundColor: '#87cefa',
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Nextplay: {
    backgroundColor: '#87cefa',
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedCarousel;
