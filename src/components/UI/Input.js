import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Keyboard,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  ref,
  returnKeyType = 'done',
  secureTextEntry,
  keyboardType,
}) => {
  const {containerStyle, labelStyle, inputStyle} = styles;
  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType ? keyboardType : 'default'}
        returnKeyType={returnKeyType}
        selectionColor="#B8BFCE"
        blurOnSubmit={false}
        onSubmitEditing={Keyboard.dismiss}
        placeholderTextColor="#B8BFCE"
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  containerStyle: {},
  labelStyle: {},
  inputStyle: {
    fontSize: width / 34,
    height: width / 10,
    borderColor: '#e9edef',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontFamily: 'Poppins',
    color: '#B8BFCE',
    letterSpacing: 0.1,
    fontWeight: '600',
  },
});
