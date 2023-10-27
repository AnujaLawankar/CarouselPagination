import {StyleSheet, View, Dimensions,TouchableOpacity} from 'react-native';
import React from 'react';
import SlideItem from './SlideItem';
import Animated from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('screen');

const Pagination = (props: {
  slides: any;
  currentIndex: number;
  carouselRef: React.RefObject<ICarouselInstance>;
}) => {
 const scrollToItem = (index: number) => {
     // Check if the carouselRef exists and is not null
     if (props.carouselRef.current) {
       // Scroll to the specified item
       props.carouselRef.current.scrollToItem({
         animated: true,
         index,

       // carouselItem = props.slides;
       });
       }
       };

  return (

       <View style={styles.dotView}>
              {props.slides.map((_, index) => (
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


  );
};


export default Pagination;

const styles = StyleSheet.create({

   dotView: {
     flexDirection: 'row',
     justifyContent: 'center',
     marginVertical: 20,
   },
   circle: {
     width: 10,
     height: 10,
     backgroundColor: 'grey',
     borderRadius: 50,
     marginHorizontal: 5,
   },

});


