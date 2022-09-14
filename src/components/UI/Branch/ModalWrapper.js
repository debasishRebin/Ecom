import React from 'react';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import {globalStyles} from '../../../globalStyles/globalStyles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ModalWrapper = ({isVisible, setIsVisible, children}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      statusBarTranslucent={true}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}>
      <View style={[styles.centeredView, globalStyles.psAb]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default ModalWrapper;
