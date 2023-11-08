import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

const SlideItem = ({item}: any) => {
  const translateYImage = new Animated.Value(0);

  // //Use dimensions to calculate responsive styles
  // const imageWidth = width;
  // const imageHeight = height;
  
  //
  // Animated.timing(translateYImage, {
  //   toValue: 0,
  //   duration: 1000,
  //   useNativeDriver: true,
  //   easing: Easing.bounce,
  // }).start();

  return (
    
  <>
      <Animated.Image
        source={item.img}
      
        style={[
          styles.image,
          
          {
            
            transform: [
              {
                translateY: translateYImage,
              },
            ],
            // width: imageWidth, height: imageHeight 
          },
        ]}
      
      />

      <View style={styles.content}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View> 
      </View> 
      </>
    
  );
};

export default SlideItem;


const styles = StyleSheet.create({

  image:{

  width: '100%',
  height: '85%',

  
  },
  
  content:{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
   // backgroundColor: 'rgba(0, 0, 0, 0.5)',
   backgroundColor:'black',
  },
  textContainer: {
    marginBottom:moderateScale(34),

  },

title:{

  fontSize: moderateScale(18),
  fontWeight: 'bold',
  color: 'white',


},
description:{
  fontSize: moderateScale(15),
  color: 'white',


},
price:{
  fontSize: moderateScale(13),
  fontWeight: 'bold',
  color: 'white',

},
  });