import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Flower from './Flower';

const {width, height} = Dimensions.get('window');

export class MainTitle extends PureComponent {
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    const {titleOne, titleTwo, flwHeight, subWeight} = this.props;
    return (
      <View style={styles.mainTitleContainer}>
        <View style={styles.flowerImage}>
          <Flower flowerWidth={flwHeight} />
        </View>
        <Text style={styles.mainTitle}>{titleOne}</Text>
        <Text
          style={[
            styles.subTitle,
            {fontWeight: subWeight ? subWeight : 'normal'},
          ]}>
          {titleTwo}
        </Text>
      </View>
    );
  }
}

export default MainTitle;

const styles = StyleSheet.create({
  mainTitleContainer: {
    paddingHorizontal: width / 20,
    paddingVertical: height / 30,
    marginTop: 15,
  },
  flowerImage: {
    position: 'absolute',
    right: 5,
    top: -10,
  },

  flowerContainer: {
    position: 'absolute',
    top: -40,
    zIndex: -1,
    right: width / 2.69,
  },
  mainTitle: {
    color: '#6a7fa1',
    fontSize: width / 22,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginBottom: 6,
  },
  subTitle: {
    color: '#6a7fa1',
    fontSize: width / 35,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
});
