import {StyleSheet, Animated, View, Dimensions,TouchableOpacity} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('screen');

const Pagination = ({data, scrollX, index,scrollToItem }) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.2, 1, 0.1],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', '#000', '#ccc'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              {
              width: dotWidth,
              //backgroundColor,
              height: dotWidth, // Make the dots round
              opacity, // Apply opacity animation
              },
               idx === index && styles.dotActive,
            ]}
          />
        );
      })}
    </View>
  );
};
//  <TouchableOpacity
//             key={idx.toString()}
//             onPress={() => scrollToItem(idx)} // Call scrollToItem with the index
//             style={[
//               styles.dot,
//               { width: dotWidth, backgroundColor, opacity },
//               idx === index && styles.dotActive,
//             ]}
//           />
//         );
//       })}
//     </View>
//   );
// };


export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 35,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 3,
    backgroundColor: 'white',
  },
  dotActive: {
    backgroundColor: 'white',
  },
});


