import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {IMG} from '../../constants/Image';

const {width, height} = Dimensions.get('window');

export class Flower extends PureComponent {
  render() {
    const {flowerWidth, flowerHeight} = this.props;
    return (
      <Image
        source={IMG.IMAGE_FLOWER}
        resizeMode="contain"
        style={{
          width: flowerWidth ? flowerWidth : width / 3.9,
          height: flowerHeight ? flowerHeight : width / 3.9,
        }}
      />
    );
  }
}

export default Flower;
