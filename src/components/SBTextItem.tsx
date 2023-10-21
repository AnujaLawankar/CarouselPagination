import React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>
  index?: number
}

const SBTextItem: React.FC<Props> = (props: Props) => {
  return (
    <View style={[styles.container, props.style]}>
      {typeof props.index === 'number' && <Text style={{ fontSize: 30, color: 'black' }}>{props.index}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default SBTextItem;
