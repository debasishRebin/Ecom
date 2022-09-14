import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {IMG} from '../../constants/Image';
import {globalStyles} from '../../globalStyles/globalStyles';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const AuthBackground = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={IMG.SPLASH_SCREEN_BACKGROUND_IMG}
        style={[styles.authBgContainer, globalStyles.wh100]}
        resizeMode="cover">
        <ScrollView
          bounces={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          style={globalStyles.wh100}>
          <View style={styles.authModal}>
            <View style={styles.appLogoContainer}>
              <Image source={IMG.LOGO} style={styles.appLogo} />
            </View>
            <View style={styles.authModalContainer}>{children}</View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AuthBackground;

const styles = StyleSheet.create({
  authBgContainer: {
    backgroundColor: '#F9F9F9',
    flex: 1,
  },

  appLogoContainer: {
    width: '100%',
    position: 'absolute',
    top: 45,
  },
  appLogo: {
    width: '100%',
    height: width / 3,
    resizeMode: 'contain',
  },

  authModal: {
    height: height,
    position: 'relative',
    justifyContent: 'center',
  },
  authModalContainer: {
    height: '75%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
