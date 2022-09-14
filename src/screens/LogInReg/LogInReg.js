import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch, useSelector} from 'react-redux';
import AuthBackground from '../../components/AuthBackground/AuthBackground';
import AuthButton from '../../components/UI/AuthButton';
import {IMG} from '../../constants/Image';
import {logRes} from '../../redux/auth/loginSlice';
const {width, height} = Dimensions.get('window');

const LogInReg = ({navigation, route}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const userRes = useSelector(state => state.userRes);
  const loginRes = useSelector(state => state.login);

  const toast = useToast();
  const dispatch = useDispatch();

  const handleSubmitPress = async () => {
    if (mobileNumber === '') {
      toast.hideAll();
      toast.show('Mobile Number is required!', {
        type: 'warning',
        placement: 'top',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });

      return;
    } else if (mobileNumber.length < 10) {
      toast.hideAll();
      toast.show('Please provide a valid mobile number!', {
        type: 'warning',
        placement: 'top',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });

      return;
    } else {
      dispatch(
        logRes(
          {
            mobile: mobileNumber,
          },
          () => {
            navigation.navigate('AuthStack', {
              screen: 'Otp',
              params: {
                mobileNumber: mobileNumber,
              },
            });
          },
        ),
      );
    }
  };

  return (
    <AuthBackground>
      <KeyboardAvoidingView
        style={styles.subContainer}
        keyboardVerticalOffset={-200}>
        <Pressable
          style={styles.otpHeaderContainer}
          onPress={() => navigation.goBack()}>
          <Image source={IMG.IMAGE_LEFT_ARROW} style={styles.leftArrow} />
          <Text style={styles.registerHeaderText}>Login</Text>
        </Pressable>

        <Text style={styles.registerBodyText}>
          Please enter your mobile number
        </Text>

        <View style={styles.inputContainer}>
          <View style={styles.textInputContainer}>
            <View style={styles.mobileIconContainer}>
              <Image source={IMG.IMAGE_MOBILE_ICON} style={styles.mobileIcon} />
            </View>
            <TextInput
              style={styles.otpTextInput}
              placeholder="Mobile Number"
              underlineColorAndroid="transparent"
              placeholderTextColor="#828282"
              selectionColor="#4d626f"
              maxLength={10}
              keyboardType="number-pad"
              onChangeText={e => {
                setMobileNumber(e);
              }}
            />
          </View>
        </View>

        <View style={styles.otpButtonContainer}>
          <AuthButton
            // isLoading={userRes.logLoading}
            onHandlePress={handleSubmitPress}
            buttonTitle="Login"
          />
        </View>
      </KeyboardAvoidingView>
    </AuthBackground>
  );
};

export default LogInReg;

const styles = StyleSheet.create({
  subContainer: {
    overflow: 'hidden',
    height: '85%',
    width: '80%',
  },
  inputContainer: {
    marginTop: 60,
    marginBottom: 80,
  },
  otpHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  leftArrow: {
    height: 17,
    width: 17,
    marginRight: 10,
    resizeMode: 'contain',
  },
  registerHeaderText: {
    flex: 16,
    fontSize: width / 20,
    fontFamily: 'Poppins',
    color: '#4d626f',
  },

  registerBodyText: {
    color: '#424242',
    fontSize: width / 28,
    marginBottom: 20,
  },
  textInputContainer: {
    paddingVertical: 8,
    width: '100%',
    borderBottomColor: '#B2B9C2',
    borderBottomWidth: 2,
    flexDirection: 'row',
    marginVertical: 15,
  },
  otpTextInput: {
    width: '100%',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#4d626f',
  },
  mobileIconContainer: {
    justifyContent: 'center',
    width: 40,
  },
  mobileIcon: {
    height: width / 10,
    resizeMode: 'contain',
  },
  otpButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  termsAndConditionText: {
    color: '#6a7b98',
    fontSize: width / 30,
    marginTop: 10,
    fontFamily: 'Poppins',
  },
  termsText: {
    color: '#6a7b98',
    fontWeight: 'bold',
    fontSize: width / 31,
    marginTop: 10,
  },
  errorTextStyle: {
    color: 'tomato',
    textAlign: 'center',
    marginTop: 5,
    fontSize: width / 30,
  },
  socialbtn: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
  },
});
