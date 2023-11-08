import React, {useRef, useState} from 'react';
import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import SlideItem from './SlideItem';
import Carousel from 'react-native-reanimated-carousel';
import type {ICarouselInstance} from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pagination from './Pagination';
import {moderateScale, scale} from 'react-native-size-matters';

//import Tiles from './Tiles';

interface AnimatedCarouseProps {
  slides: any;
}
const iconSize = moderateScale(30); 
const iconColor = 'white';

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
        style={{width: '100%',height: '100%'}}
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

      
      <Pagination
        slides={props.slides}
        currentIndex={currentIndex}
        carouselRef={carouselRef}
      />

      <View style={styles.iconheart}>
        <TouchableOpacity onPress={() => console.log('Hit Like')}>
          <Ionicons name="heart-outline" size={iconSize} color={iconColor} />
        </TouchableOpacity>
</View>
<View style={styles.iconshare}>
        <TouchableOpacity onPress={() => console.log('Hit Share')}>
          <Ionicons name="share-outline" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.iconimage}>
        <TouchableOpacity
          onPress={() => console.log('Photos Hits')}>
          <Ionicons name="images-outline" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      </View>

      <View style={styles.controls}>
      <View style={styles.backplay}>
          <TouchableOpacity
            onPress={() => {
              if (carouselRef.current) carouselRef.current.prev();
            }}
          >
            <Ionicons name="play-back" size={20} color="white" />
          </TouchableOpacity>
      </View>

        <View style={styles.play}>
        
          <TouchableOpacity
            onPress={() => setIsAutoPlay(!isAutoPlay)}
          >
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
            >
            <Ionicons name="play-forward" size={20} color="white" />
          </TouchableOpacity>
        
        </View>
        </View>
        </View>
  );
};


const styles = StyleSheet.create({

  container:{
    flex:1,
    borderColor: 'red',
    borderWidth: 5,
  },
  iconheart:{
    bottom: moderateScale(170),
    right: moderateScale(10), 
    position: 'absolute',
    flexDirection: 'column-reverse',
    borderColor: 'yellow',
    borderWidth: 5,
 
    
  },
  iconshare:{
    bottom: moderateScale(120),
    right: moderateScale(10), 
    position: 'absolute',
    flexDirection: 'column-reverse',
    borderColor: 'yellow',
    borderWidth: 5,
  

  },
  iconimage:{
    bottom: moderateScale(69),
    right: moderateScale(10), 
    position: 'absolute',
    flexDirection: 'column-reverse',
    borderColor: 'yellow',
    borderWidth: 5,
  
  
    

  },
  controls:{
  
  //  borderColor: 'green',
   // borderWidth: 5,
  
    flexDirection: 'row',
    alignSelf:'center',
    justifyContent:'space-around',
    
  },
  backplay:{
  //  borderColor: 'blue',
  //  borderWidth: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: moderateScale(120),
    right: moderateScale(10), 
    width: '10%',
    height: '110%',
    alignItems: 'center',
    marginHorizontal: moderateScale(5),
  
  },
  play:{
  //  borderColor: 'blue',
  //  borderWidth: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '10%',
    height: '110%',
    alignItems: 'center',
    bottom: moderateScale(120),
    right: moderateScale(10), 
    marginHorizontal: moderateScale(5),

  },
  Nextplay:{
  //  borderColor: 'blue',
  //  borderWidth: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '10%',
    height: '110%',
    alignItems: 'center',
    bottom: moderateScale(120),
    right: moderateScale(10), 
    marginHorizontal: moderateScale(5),
  },


});

export default AnimatedCarousel;