// import React, { useRef,useState } from 'react';
// import {View,Dimensions, TouchableOpacity, Text, Image} from 'react-native';
//
// import SlideItem from './SlideItem';
// //import Pagination from './Pagination';
// import Carousel from 'react-native-reanimated-carousel';
// import type {ICarouselInstance} from 'react-native-reanimated-carousel';
// import SBItem from './SBItem';
// import Animated from 'react-native-reanimated';
// import Ionicons from 'react-native-vector-icons/Ionicons';
//
// import { IonIcon } from '@ionic/react';
// // import { playBack} from 'ionicons/icons';
// // import { play} from 'ionicons/icons';
// // import { playForward} from 'ionicons/icons';
//
// interface AnimatedCarouseProps {
//   slides: any;
// }
//
// const AnimatedCarousel = (props: AnimatedCarouseProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0); // State variable for the current index
//
//
//   const carouselRef = React.useRef<ICarouselInstance>(null);
//   const [isAutoPlay, setIsAutoPlay] = React.useState(false);
//   const [isFast, setIsFast] = React.useState(false);
//   const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
//  // Create the scrollX value and initialize it
//  //const scrollX = React.useRef(new Animated.Value(0)).current;
//
//   const colors = [
//     '#26292E',
//     '#899F9C',
//     '#B3C680',
//     '#5C6265',
//     '#F5D399',
//     '#F1F1F1',
//   ];
//
//   const window = Dimensions.get('window');
//   const PAGE_WIDTH = window.width;
//   const PAGE_HEIGHT = window.height;
//   const baseOptions = {
//     vertical: false,
//     width: PAGE_WIDTH,
//     height: PAGE_HEIGHT-200,
//   };
//
//   const scrollToItem = (index) => {
//     if (carouselRef.current) {
//       carouselRef.current.snapToItem(index); // Use the snapToItem method of carouselRef
//     }
//   };
//
//   return (
//
//     <>
//   <View style={styles.container}>
//       <Carousel
//         {...baseOptions}
//         loop={true}
//         ref={carouselRef}
//         style={{width:'100%'}}
//         autoPlay={isAutoPlay}
//         autoPlayInterval={isFast ? 100 : 2000}
//         data={props.slides}
//         pagingEnabled={isPagingEnabled}
//        onSnapToItem={index => {
//            setCurrentIndex(index);
//            console.log('current index:', index);
//          }}
//         renderItem={({item}) => <SlideItem item={item} />}
//       //  scrollX={scrollX} // Pass scrollX to Carousel
//       />
//
//  <View style={styles.dotView}>
//         {carouselItem.map(({}, index: number) => (
//           <TouchableOpacity
//             key={index.toString()}
//             style={[
//               styles.circle,
//               { backgroundColor: index == currentIndex ? 'white' : 'grey' },
//             ]}
//             onPress={() => scrollToItem(index)}
//           />
//         ))}
//       </View>
//
//   <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={()=> {
//         if (carouselRef.current)
//           carouselRef.current.prev();
//             console.log('Play back');
//       }}>
// {/*         <Text>PREVIOUS</Text> */}
//     <Ionicons name="play-back" size={20} color="white" />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=> {
//         setIsAutoPlay(!isAutoPlay);
//            console.log('Play');
//
//       }}>
// {/*         <Text>{isAutoPlay ? 'Pause' : 'Play'}</Text> */}
//   <Ionicons name="play" size={20} color="white" />
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=> {
//         if (carouselRef.current)
//           carouselRef.current.next();
//             console.log('Play forward');
//       }}>
// {/*         <Text>NEXT</Text> */}
//     <Ionicons name="play-forward" size={20} color="white" />
//       </TouchableOpacity>
//
//
//
// </View>
// </View>
//
//     </>
//   );
// };
//
// export default AnimatedCarousel;
//
// const styles = StyleSheet.create({
//
//  container: {
//     flex: 1,
//     backgroundColor: 'black',
//   },
//
//   dotView: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       marginVertical: 20,
//     },
//     circle: {
//       width: 10,
//       height: 10,
//       backgroundColor: 'grey',
//       borderRadius: 50,
//       marginHorizontal: 5,
//     },
// });
import React, { useRef, useState } from 'react';
import { View, Dimensions, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import SlideItem from './SlideItem';
import Carousel from 'react-native-reanimated-carousel';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    height: PAGE_HEIGHT-200,
  };

   const scrollToItem = (index:number) => {
      if (carouselRef.current) {
        carouselRef.current?.scrollToItem({ animated: true, index: index }); // Use the snapToItem method of carouselRef
      }
    };

  const carouselItem = props.slides;

  return (
    <View style={styles.container}>
     <View style={styles.iconRow}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => console.log('Hit Like')}
       >
          <Ionicons name="heart-outline" size={30} color="white"  />
    </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
               onPress={() => console.log('Hit Share') }
                >
           <Ionicons name="share-outline" size={30} color="white"  />
             </TouchableOpacity>
             </View>

      <Carousel
        {...baseOptions}
        loop={true}
        ref={carouselRef}
        style={{ width: '100%' }}
        autoPlay={isAutoPlay}
        autoPlayInterval={isFast ? 100 : 2000}
        data={props.slides}
        pagingEnabled={isPagingEnabled}
         onSnapToItem={index => {
                  setCurrentIndex(index);
                  console.log('current index:', index);
                }}
        renderItem={({ item }) => <SlideItem item={item} />}
      />

 <View style={styles.imageIconContainer}>
        <TouchableOpacity
          style={styles.imageIconButton}
          onPress={() => console.log('Photos Hits')}
        >
          <Ionicons name="images-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.dotView}>
        {carouselItem.map((_, index) => (
          <TouchableOpacity
            key={index.toString()}
            style={[
              styles.circle,
              { backgroundColor: index === currentIndex ? 'white' : 'grey' },
            ]}
            onPress={() => scrollToItem(index)}
          />
        ))}
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

    backgroundColor: 'black',
  },
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
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  controlButton: {
    marginHorizontal: 10,
  },
   iconRow: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 10, // Adjust the margin to create space for the image icon
    },
    iconButton: {
      backgroundColor: 'transparent',
      marginHorizontal: 10,
    },
      imageIconContainer: {
        position: 'absolute',
        bottom: 10, // Adjust the bottom value for the desired position
        right: 10, // Adjust the right value for the desired position
      },
      imageIconButton: {
        backgroundColor: 'transparent',
      },
});

export default AnimatedCarousel;

