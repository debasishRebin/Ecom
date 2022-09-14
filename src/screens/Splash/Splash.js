import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StatusBar, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {IMG} from '../../constants/Image';

// const screenDimension = Dimensions.get('screen');

const Splash = ({navigation}) => {
  const [animating, setAnimating] = useState(true);
  const {userInfo} = useSelector(state => state.otpRes);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);

      navigation.replace(userInfo === null ? 'AuthStack' : 'DrawerNavigator');
    }, 2000);
  }, [userInfo]);

  return (
    <ImageBackground
      source={IMG.SPLASH_SCREEN_BACKGROUND_IMG}
      style={styles.container}>
      <StatusBar backgroundColor="#1dd3e9" />
      <Image source={IMG.LOGO} style={styles.splashLogo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    resizeMode: 'cover',
  },
  splashLogo: {width: '50%', resizeMode: 'contain', margin: 30},
});
