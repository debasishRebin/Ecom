import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Avatar from './src/components/UI/Avatar';
import {IMG} from './src/constants/Image';
import {logout} from './src/redux/auth/otpSlice';

const {width, height} = Dimensions.get('window');

const CustomDrawerContent = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [user, setUser] = useState({
    title: 'Welcome',
    mob: '',
  });
  const [drawerList, setDrawerList] = useState([]);
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.otpRes);
  const onLogout = () => {
    dispatch(logout());
    setIsVisible(false);
    props.navigation.closeDrawer();
  };

  useEffect(() => {
    if (userInfo) {
      setUser({
        ...user,
        title: userInfo?.title,
        mob: userInfo?.mobile,
      });
    }
  }, [userInfo]);

  const logOut = () => {
    Alert.alert(
      'Logout',
      'Are you sure? You want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: async () => {
            await AsyncStorage.clear();
            props.navigation.replace('AuthStack');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.avatarContainer}>
        <Avatar userInfo={user} />
      </View>
      <ScrollView
        overScrollMode="never"
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {userInfo && (
          <>
            <TouchableOpacity
              style={[styles.drawerContainer, {marginBottom: 30}]}
              onPress={logOut}>
              <View style={styles.drawerItem}>
                <View style={{flex: 1}}>
                  <Image source={IMG.IMAGE_LOG_OUT} style={styles.drawerIcon} />
                </View>
                <View style={{flex: 2.5, alignItems: 'flex-start'}}>
                  <Text style={styles.drawerItemText}>Logout</Text>
                </View>
              </View>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 20,
    width: '80%',
  },
  avatarContainer: {
    height: 150,
    justifyContent: 'center',
    marginLeft: 15,
  },

  drawerIcon: {
    height: height / 30,
    width: width / 15,
    resizeMode: 'contain',
    flex: 1,
  },
  drawerItem: {
    paddingHorizontal: 20,
    paddingVertical: 3,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  drawerItemText: {
    flex: 3,
    color: '#828282',
    fontSize: width / 30,
    fontFamily: 'Poppins',
    marginTop: 3,
  },
  hrRule: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginTop: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: width - 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBg: {
    width: '100%',
  },
  logoutText: {
    color: '#000',
    fontSize: width / 28,
  },
  modalApprove: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 18,
  },
  logoutConfirmText: {
    fontSize: width / 30,
    color: 'tomato',
    textTransform: 'uppercase',
  },
});
