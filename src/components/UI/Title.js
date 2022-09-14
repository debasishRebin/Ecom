import React, {PureComponent} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export class Title extends PureComponent {
  render() {
    const {
      titleOne,
      titleTwo,
      mainTitleFontSize,
      subTitleFontSize,
      alignItems,
    } = this.props;
    return (
      <View
        style={[
          styles.titleContainer,
          {alignItems: alignItems ? alignItems : 'center'},
        ]}>
        <Text
          style={[
            styles.titleOne,
            styles.allText,
            {
              fontSize: mainTitleFontSize
                ? width / mainTitleFontSize
                : width / 20,
            },
          ]}>
          {titleOne}
        </Text>
        <Text
          style={[
            styles.titleTwo,
            styles.allText,
            {
              fontSize: subTitleFontSize
                ? width / subTitleFontSize
                : width / 38,
            },
          ]}>
          {titleTwo}
        </Text>
      </View>
    );
  }
}

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  allText: {
    color: '#6a7fa1',
  },
  titleOne: {
    letterSpacing: 0.1,
    fontWeight: 'bold',
  },
  titleTwo: {
    letterSpacing: 0.1,
    fontWeight: '600',
  },
});
