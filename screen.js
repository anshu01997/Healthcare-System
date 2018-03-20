import React, { PureComponent } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import type { Children, Dimensions, LocalizableText } from '../types';
import connectWithActions from '../connectWithActions';
import { KeyboardAvoider, ZulipStatusBar } from '../common';
import ModalNavBar from '../nav/ModalNavBar';
//import ModalSearchNavBar from '../nav/ModalSearchNavBar';

const componentStyles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  padding: {
    padding: 10,
  },
});

class Screen extends PureComponent {
  //props: Props;

  static contextTypes = {
    styles: () => null,
  };

  render() {
    const { padding, search, title, children, safeAreaInsets, searchBarOnChange } = this.props;
    const { styles } = this.context;
    const ModalBar = search ? ModalSearchNavBar : ModalNavBar;

    return (
      <View style={[styles.screen, { marginBottom: safeAreaInsets.bottom }]}>
        <ZulipStatusBar />
        <ModalBar title={title} searchBarOnChange={searchBarOnChange} />
        <View style={componentStyles.screenWrapper}>
          <KeyboardAvoider behavior="padding">
            <ScrollView
              keyboardShouldPersistTaps="always"
              contentContainerStyle={[padding && componentStyles.padding]}
            >
              {children}
            </ScrollView>
          </KeyboardAvoider>
        </View>
      </View>
    );
  }
}

export default connectWithActions((state, props) => ({
  safeAreaInsets: state.app.safeAreaInsets,
}))(Screen);