import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export class CustomButton extends PureComponent {
  render() {
    const {
      onHandlePress,
      buttonTitle,
      icon,
      secondaryColor,
      pdVertical,
      fSize,
      btnSmall,
      borderRadius,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.customButton,
          secondaryColor ? styles.secondaryColor : styles.primaryColor,
          {
            paddingVertical: pdVertical ? pdVertical : height / 95,
            borderRadius: borderRadius ? borderRadius : 5,
          },
        ]}
        onPress={() => onHandlePress()}>
        <View style={styles.customButtonBody}>
          {icon && (
            <View style={styles.btnIconContainer}>
              <Image
                source={icon}
                style={[btnSmall ? styles.btnSmall : styles.btnBig]}
              />
            </View>
          )}
          <Text
            style={[
              styles.customButtonTextColor,
              {fontSize: fSize ? fSize : width / 27},
            ]}>
            {buttonTitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButtonTextColor: {
    color: '#fff',
    fontFamily: 'Poppins',
  },
  btnIconContainer: {},
  btnBig: {
    width: width / 27,
    height: width / 27,
    marginRight: 6,
    resizeMode: 'contain',
  },
  customButtonBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryColor: {
    backgroundColor: '#1dd3e9',
  },
  secondaryColor: {
    backgroundColor: '#18A1B1',
  },
  btnSmall: {
    width: width / 40,
    height: width / 40,
    marginRight: 2.5,
    resizeMode: 'contain',
  },
});
