import React from 'react';
import {Dimensions} from 'react-native';
import {Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';

const {height, width} = Dimensions.get('window');
const SocialButton = ({
  textColor,
  buttontitle,
  img,
  backgroundColor,
  color,
  onpress,
  ...rest
}) => {
  var bgColor = backgroundColor;
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}
      onPress={onpress}>
      <View style={styles.iconWrapper}>
        <Image source={img} style={styles.socialIcon} />
      </View>
      <View style={styles.iconTxtWrapper}>
        <Text style={[styles.buttonText, {color: textColor}]}>
          {buttontitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default SocialButton;

const styles = StyleSheet.create({
  socialIcon: {
    width: '80%',
    height: '80%',
    marginTop: 8,
    marginRight: 5,
  },
  buttonContainer: {
    marginTop: height / 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
    height: height / 17.5,
    backgroundColor: '#2e64e5',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 11,
  },

  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingBottom: 5,
  },
  iconTxtWrapper: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 2,
  },
});
