import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  mrHrm: {
    marginHorizontal: width / 20,
  },
  mrhTitle: {
    marginHorizontal: width / 25,
  },
  mrHl: {
    marginHorizontal: height / 30,
  },
  pdHs: {
    paddingHorizontal: width / 15,
  },
  pdHl: {
    paddingHorizontal: height / 30,
  },
  wh100: {
    width: '100%',
    height: '100%',
  },
  fontLight: {
    fontWeight: '500',
  },
  fDarkColor: {
    color: '#828282',
  },
  fPrimaryColor: {
    color: '#6a7fa1',
  },
  psAb: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
