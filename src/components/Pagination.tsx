import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import {moderateScale, scale} from 'react-native-size-matters';
const { width } = Dimensions.get('screen');

const Pagination = (props: {
  slides: any;
  currentIndex: number;
  carouselRef: React.RefObject<ICarouselInstance>;
}) => {
  const scrollToItem = (index: number) => {
    // Check if the carouselRef exists and is not null
    if (props.carouselRef.current) {
      // Scroll to the specified item
      props.carouselRef.current.scrollTo({
        animated: true,
        index,

        // carouselItem = props.slides;
      });
    }
  };

  return (
  
    <>
      <View style={styles.dotView}>
        {props.slides.map((_: any, index: number) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
            styles.circle,
              { backgroundColor: index === props.currentIndex ? 'white' : 'grey' },
            ]}
            onPress={() => scrollToItem(index)}
          />
        ))}
      </View>

</>
  );
};


export default Pagination;



const styles = StyleSheet.create({

  dotView:{
    borderColor: 'green',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',  // Center horizontally
    alignItems: 'center',
    bottom: moderateScale(100),
    right: moderateScale(10), 
  
  },
  circle: {
        width: 15,
        height: 15,
        backgroundColor: 'grey',
        borderRadius: 50,
        marginHorizontal: 5,
        
      },

});
