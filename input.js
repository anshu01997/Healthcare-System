import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

//import { nullFunction } from '../nullObjects';
import { HALF_COLOR } from '../styles';


export default class Input extends PureComponent {
  static contextTypes = {
    styles: () => null,
  };

  textInput: TextInput;
  
  static defaultProps = {
    placeholder: {},
  };

  static defaultProps = {
    restProps: [],
    clearButton: false,
    onChangeText: nullFunction,
    textInputRef: nullFunction,
  };

  handleClear = () => {
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText('');
    }
    this.textInput.clear();
  };

  render() {
    const { styles } = this.context;
    const { style, placeholder, textInputRef, ...restProps } = this.props;
    const placeholderMessage = placeholder.text || placeholder;

    return (
      <ChildrenArray
        id={placeholderMessage}
        defaultMessage={placeholderMessage}
        values={placeholder.values}
      >
        {text => (
          <TextInput
            style={[styles.input, style]}
            placeholder={text}
            placeholderTextColor={HALF_COLOR}
            ref={(component: any) => {
              this.textInput = component;
              if (textInputRef) textInputRef(component);
            }}
            {...restProps}
          />
        )}
      </ChildrenArray>
    );
  }
}
