import React, {PureComponent} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export class AuthButton extends PureComponent {
  render() {
    const {onHandlePress, buttonTitle, disabled} = this.props;
    return (
      <TouchableOpacity
        style={styles.authButton}
        disabled={disabled}
        onPress={() => onHandlePress()}>
        <Text style={styles.authButtonTextColor}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  }
}

export default AuthButton;

const styles = StyleSheet.create({
  authButton: {
    backgroundColor: '#1dd3e9',
    width: '100%',
    paddingVertical: height / 95,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  authButtonTextColor: {
    color: '#fff',
    fontFamily: 'Poppins',
  },
});
