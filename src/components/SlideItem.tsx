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

          },
        ]}
      
      />

      <View style={styles.content}>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View> 

      </>
    
  );
};

export default SlideItem;


const styles = StyleSheet.create({

  image:{
    flex:0.9,
   width: '100%',
  
  },
  
  content:{
  flex:0.2,
   backgroundColor:'black',
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