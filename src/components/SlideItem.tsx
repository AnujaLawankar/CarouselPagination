import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const iconSize = moderateScale(30);
const iconColor = 'white';

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
        <TouchableOpacity onPress={() => console.log('Photos Hits')}>
          <Ionicons name="images-outline" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      </View>

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
  image: {
    flex: 0.9,
    width: '100%',
    //height: '90%',
  },
  iconheart: {
    bottom: moderateScale(270),
    right: moderateScale(10),
    position: 'absolute',
    flexDirection: 'column-reverse',
    borderColor: 'yellow',
    borderWidth: 5,
  },

  iconshare: {
    bottom: moderateScale(220),
    right: moderateScale(10),
    position: 'absolute',
    flexDirection: 'column-reverse',
    borderColor: 'yellow',
    borderWidth: 5,
  },

  iconimage: {
    bottom: moderateScale(170),
    right: moderateScale(10),
    position: 'absolute',
    flexDirection: 'column-reverse',
    borderColor: 'yellow',
    borderWidth: 5,
  },

  content: {
    flex: 0.2,
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundColor: 'black',
  },
  textContainer: {
    marginBottom: moderateScale(34),
  },

  title: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: moderateScale(15),
    color: 'white',
  },
  price: {
    fontSize: moderateScale(13),
    fontWeight: 'bold',
    color: 'white',
  },
});
