import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {IMG} from '../../../constants/Image';
import {globalStyles} from '../../../globalStyles/globalStyles';
import CustomButton from '../CustomButton';

const {width, height} = Dimensions.get('window');

const NotFound = ({navigation}) => {
  return (
    <View style={[styles.notFound, globalStyles.mrHrm]}>
      <Image source={IMG.NORESULT} style={styles.notFoundImg} />
      <Text style={styles.noResultText}>No Results Found!</Text>
      <View style={{marginTop: 40, width: '60%'}}>
        <CustomButton
          buttonTitle="Continue shopping"
          onHandlePress={() => navigation.replace('DrawerNavigator')}
          secondaryColor={true}
          pdVertical={6.5}
          fSize={width / 28}
          icon={false}
          btnSmall={true}
        />
      </View>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  notFound: {
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundImg: {
    width: width / 3,
    height: width / 3,
  },
  noResultText: {
    color: '#6a7fa1',
    fontSize: width / 30,
    fontWeight: '400',
  },
});
