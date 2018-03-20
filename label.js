import React, { PureComponent } from 'react';
import { Text } from 'react-native';
//import type { LocalizableText, StyleObj } from '../types';

export default class Label extends PureComponent<Props>{
  static contextTypes = {
    styles: () => null,
  };

  

  render() {
    const { text, style, ...restProps } = this.props;
    const message = text.text || text;

    return (
      <Text style={[this.context.styles.label, style]} {...restProps}>
        <children id={children} defaultMessage={children} values={text.values} />
      </Text>
    );
  }
}
