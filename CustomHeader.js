import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {IMG} from './src/constants/Image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');

const CustomHeader = ({pdBottom, headerHeight, isHome, navigation}) => {
  const cartReducer = useSelector(state => state.cart);
  const {userInfo} = useSelector(state => state.otpRes);

  return (
    <Animated.View style={[styles.headerContainer]}>
      <StatusBar backgroundColor="#1dd3e9" />
      <Animated.View
        style={[
          styles.headerSubContainer,
          {height: headerHeight, paddingBottom: pdBottom ? pdBottom : 1},
        ]}>
        {isHome ? (
          <TouchableOpacity
            style={styles.homeContainer}
            onPress={() => navigation.openDrawer()}>
            <Image
              style={styles.burgerMenu}
              source={IMG.IMAGE_DRAWER_ITEM_MENU}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.goBack}
            onPress={() => navigation.goBack()}>
            <Image
              style={styles.goBackIcon}
              source={IMG.IMAGE_LEFT_ARROW}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

        <View
          style={styles.logoContainer}
          onPress={() => navigation.replace('DrawerNavigator')}>
          <Image
            style={styles.whiteLogo}
            source={IMG.LOGO}
            resizeMode="contain"
          />
        </View>
        <View style={styles.notificationContainer}>
          {!userInfo && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AuthStack', {
                  screen: 'LogInReg',
                });
              }}>
              <Image
                style={styles.notificationItems}
                source={IMG.IMAGE_PROFILE}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={{position: 'relative'}}
            onPress={() => navigation.navigate('Favorite')}>
            <Image
              style={styles.notificationItems}
              source={IMG.IMAGE_LOVE}
              resizeMode="contain"
            />
            {/* <MaterialIcons
              name="favorite-border"
              size={width / 16}
              color={'#fff'}
              style={{paddingRight: 10, paddingLeft: 5}}
            /> */}
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default CustomHeader;
const styles = StyleSheet.create({
  headerContainer: {
    elevation: 2,
  },

  headerSubContainer: {
    flexDirection: 'row',
    backgroundColor: '#1dd3e9',
    zIndex: 5,
  },

  homeContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  burgerMenu: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  goBack: {
    flex: 1,
    justifyContent: 'center',
  },
  goBackIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  logoContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  whiteLogo: {
    width: 80,
    width: 80,
    resizeMode: 'contain',
  },
  notificationContainer: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 5,
  },
  notificationItems: {
    width: 25,
    resizeMode: 'contain',
    marginRight: 10,
  },
});
