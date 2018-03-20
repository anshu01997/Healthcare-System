import React from 'react';
import { TouchableNativeFeedback, Platform, View } from 'react-native';

import { HIGHLIGHT_COLOR } from '../styles';

const background =
  Platform.Version >= 21
    ? TouchableNativeFeedback.Ripple(HIGHLIGHT_COLOR)
    : TouchableNativeFeedback.SelectableBackground();


export default ({ onPress, style, children, onLongPress }: Props) => {
  const WrapperComponent = onPress || onLongPress ? TouchableNativeFeedback : View;

  return (
    <WrapperComponent
      style={style}
      background={background}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <View>{ChildrenArray}</View>
    </WrapperComponent>
  );
};