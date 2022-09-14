import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch, useSelector} from 'react-redux';
import AuthBackground from '../../components/AuthBackground/AuthBackground';
import AuthButton from '../../components/UI/AuthButton';
import VerificationInput from '../../components/UI/VerificationInput';
import {IMG} from '../../constants/Image';
import {HeaderContext} from '../../context/HeaderContext';
import {logRes} from '../../redux/auth/loginSlice';
import {otpErrored, otpRes} from '../../redux/auth/otpSlice';
import {getSubTotals} from '../../redux/cartSlice/cartSlice';

const {width, height} = Dimensions.get('window');

const Otp = ({navigation, route}) => {
  const [firstOtpCode, setFirstOtpCode] = useState('');
  const [secondOtpCode, setSecondOtpCode] = useState('');
  const [thirdOtpCode, setThirdOtpCode] = useState('');
  const [fourthOtpCode, setFourthOtpCode] = useState('');
  const [fifthOtpCode, setFifthOtpCode] = useState('');
  const [sixthOtpCode, setSixthOtpCode] = useState('');

  const {logError} = useSelector(state => state.otpRes);
  const {goBackRoute} = useContext(HeaderContext);

  const toast = useToast();

  const dispatch = useDispatch();

  useEffect(() => {
    if (logError) {
      toast.hideAll();
      toast.show(`Please enter a valid OTP`, {
        type: 'success',
        placement: 'top',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
      dispatch(otpErrored(false));
    }
  }, [logError]);

  const {mobileNumber} = route.params;

  const onOtpSubmit = () => {
    if (
      firstOtpCode !== '' ||
      secondOtpCode !== '' ||
      thirdOtpCode !== '' ||
      fourthOtpCode !== '' ||
      fifthOtpCode !== '' ||
      sixthOtpCode !== ''
    ) {
      dispatch(
        otpRes(
          {
            mobile: mobileNumber,
            otp: `${firstOtpCode}${secondOtpCode}${thirdOtpCode}${fourthOtpCode}${fifthOtpCode}${sixthOtpCode}`,
          },
          () => {
            navigation.replace('DrawerNavigator', {
              screen: 'MenuTab',
              params: {
                screen: 'Home',
              },
            });
          },
        ),
      );
    } else {
      toast.hideAll();
      toast.show(`Please enter a valid OTP`, {
        type: 'success',
        placement: 'top',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in',
      });
    }
  };

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const forthRef = useRef();
  const fifthRef = useRef();
  const sixthRef = useRef();

  useEffect(() => {
    firstRef.current.focus();
  }, []);

  const firstCodeHandler = e => {
    setFirstOtpCode(e);
    if (e !== '') {
      secondRef.current.focus();
    }
  };

  const secondCodeHandler = e => {
    setSecondOtpCode(e);
    if (e !== '') {
      thirdRef.current.focus();
    }
  };

  const thirdCodeHandler = e => {
    setThirdOtpCode(e);
    if (e !== '') {
      forthRef.current.focus();
    }
  };
  const forthCodeHandler = e => {
    setFourthOtpCode(e);
    if (e !== '') {
      fifthRef.current.focus();
    }
  };
  const fifthCodeHandler = e => {
    setFifthOtpCode(e);
    if (e !== '') {
      sixthRef.current.focus();
    }
  };
  const sixthCodeHandler = e => {
    setSixthOtpCode(e);
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
          <Text style={styles.otpHeaderText}>OTP Verification</Text>
        </Pressable>
        <Text style={styles.otpBodyText}>
          Please provide five digits random OTP
        </Text>

        <View style={styles.inputWrapper}>
          <View style={styles.textInputContainer}>
            <View style={styles.otpInputMargin}>
              <VerificationInput
                value={firstOtpCode}
                refData={firstRef}
                keyboardType="numeric"
                changeText={firstCodeHandler}
                keyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    console.log('');
                  }
                }}
              />
            </View>
            <View style={styles.otpInputMargin}>
              <VerificationInput
                value={secondOtpCode}
                refData={secondRef}
                keyboardType="numeric"
                changeText={secondCodeHandler}
                keyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    firstRef.current.focus();
                  }
                }}
              />
            </View>
            <View style={styles.otpInputMargin}>
              <VerificationInput
                value={thirdOtpCode}
                refData={thirdRef}
                keyboardType="numeric"
                changeText={thirdCodeHandler}
                keyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    secondRef.current.focus();
                  }
                }}
              />
            </View>
            <View style={{marginRight: 10}}>
              <VerificationInput
                value={fourthOtpCode}
                refData={forthRef}
                keyboardType="numeric"
                changeText={forthCodeHandler}
                keyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    thirdRef.current.focus();
                  }
                }}
              />
            </View>
            <View style={{marginRight: 10}}>
              <VerificationInput
                value={fifthOtpCode}
                refData={fifthRef}
                keyboardType="numeric"
                changeText={fifthCodeHandler}
                keyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    forthRef.current.focus();
                  }
                }}
              />
            </View>
            <View style={{marginRight: 10}}>
              <VerificationInput
                value={sixthOtpCode}
                refData={sixthRef}
                keyboardType="numeric"
                changeText={sixthCodeHandler}
                keyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    fifthRef.current.focus();
                  }
                }}
              />
            </View>
          </View>

          <View style={styles.wrongNumberContainer}>
            <TouchableOpacity
              style={styles.wrongNumberSubContainer}
              onPress={() => navigation.replace('LogInReg')}>
              <Text style={styles.wrongNumber}>Change Number?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.otpButtonContainer}>
          <AuthButton onHandlePress={onOtpSubmit} buttonTitle="Submit" />
        </View>
      </KeyboardAvoidingView>
    </AuthBackground>
  );
};

export default Otp;

const styles = StyleSheet.create({
  subContainer: {
    overflow: 'hidden',
    height: '85%',
    width: '80%',
  },
  otpHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  leftArrow: {
    flex: 1,
    height: width / 25,
    width: width / 20,
    marginRight: 5,
    resizeMode: 'contain',
  },
  otpHeaderText: {
    flex: 16,
    fontSize: width / 18,
    fontFamily: 'Poppins',
    color: '#4d626f',
  },

  otpBodyText: {
    color: '#424242',
    fontSize: width / 28,
    marginBottom: 20,
  },
  textInputContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  wrongNumberContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  wrongNumberSubContainer: {width: '40%', alignItems: 'flex-end'},
  wrongNumber: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    color: '#6F7F9B',
    fontSize: width / 34,
  },
  inputWrapper: {
    marginTop: 60,
    marginBottom: 90,
  },

  otpTextInput: {
    marginLeft: 10,
    color: '#828282',
    width: 20,
    fontFamily: 'Poppins',
    fontSize: 17,
    fontSize: width / 30,
  },
  otpButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  resendText: {
    color: '#6F7F9B',
    marginLeft: '69%',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: width / 30,
  },
  termsAndConditionText: {
    color: '#6F7F9B',
    fontSize: width / 30,
    marginTop: 10,
    fontFamily: 'Poppins',
  },
  termsText: {
    color: '#6F7F9B',
    fontWeight: 'bold',
    fontSize: width / 31,
    marginTop: 10,
  },
  otpInputMargin: {marginRight: width / 36},
});
