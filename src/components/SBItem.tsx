import React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {LongPressGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';


import SBImageItem from './SBImageItem';
import SBTextItem from './SBTextItem';

interface Props {
  style?: StyleProp<ViewStyle>
  index?: number
}

const SBItem = (props: Props) => {
  const [isPretty, setIsPretty] = React.useState(true);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}
    >
      <Animated.View style={{flex: 1}}>
        {isPretty
          ? (
            <SBImageItem style={props.style} index={props.index} showIndex={typeof props.index === 'number'} />
          )
          : (
            <SBTextItem style={props.style} index={props.index} />
          )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};

export default SBItem;
