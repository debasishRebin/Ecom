import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {globalStyles} from '../../globalStyles/globalStyles';

const {width, height} = Dimensions.get('window');
const About = ({data, weight}) => {
  return (
    <View style={[globalStyles.mrHrm]}>
      <View style={styles.aboutSubContainer}>
        <Text style={[styles.aboutText, {fontWeight: weight ? weight : '400'}]}>
          {data}
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutText: {
    fontSize: width / 30.5,
    paddingVertical: 5,
    color: '#828282',
    letterSpacing: 0.15,
  },
});
