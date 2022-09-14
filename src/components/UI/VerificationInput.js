import React, {PureComponent} from 'react';
import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export class VerificationInput extends PureComponent {
  render() {
    const {value, changeText, placeholder, refData, onPress, keyPress} =
      this.props;
    return (
      <View style={styles.container}>
        <TextInput
          selectionColor={'#6a7b98'}
          maxLength={1}
          value={value}
          onChangeText={changeText}
          placeholder={placeholder}
          style={styles.inputText}
          ref={refData}
          onKeyPress={keyPress}
          keyboardType="number-pad"
        />
      </View>
    );
  }
}

export default VerificationInput;

const styles = StyleSheet.create({
  container: {
    width: width / 9,
    borderColor: '#7D7D7D',
    borderBottomWidth: 2,
    paddingBottom: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputText: {
    width: '80%',
    fontSize: width / 11,
    color: '#6a7b98',

    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: -5,
  },
});
