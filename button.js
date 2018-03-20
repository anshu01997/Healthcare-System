import React, { PureComponent } from 'react';
import { ImageBackground, View } from 'react-native';
import { Touchable } from './';


export default class ImageAvatar extends PureComponent {

  static defaultProps = {
    onPress: nullFunction,
  };

  render() {
    const { avatarUrl, children, size, shape, onPress } = this.props;
    const touchableStyle = {
      height: size,
      width: size,
    };

    const borderRadius =
      shape === 'rounded' ? size / 8 : shape === 'circle' ? size / 2 : shape === 'square' ? 0 : 0;

    return (
      <View>
        <Touchable onPress={onPress} style={touchableStyle}>
          <ImageBackground
            style={touchableStyle}
            source={{ uri: avatarUrl }}
            resizeMode="cover"
            borderRadius={borderRadius}
          >
            {children}
          </ImageBackground>
        </Touchable>
      </View>
    );
  }
}
