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

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
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
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
   width: '100%',
      height: '100%', // Use the desired height for your container
      alignItems: 'center',
      paddingBottom: 20, // Adjust the value as needed
      },

  image: {
    flex: 0.6,
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
      alignItems: 'center',
  },
  description: {
    fontSize: 15,
    marginVertical: 12,
    color: 'white',
      alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
     color: 'white',
       alignItems: 'center',
  },
});