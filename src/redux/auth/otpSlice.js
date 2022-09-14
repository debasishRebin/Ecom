import {createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../helper/axiosInstance/axiosInstance';

const otpState = {
  userInfo: null,
  logLoading: false,
  logError: false,
};

export const otpSlice = createSlice({
  name: 'otp',
  initialState: otpState,
  reducers: {
    otpPending: state => {
      state.userInfo = null;
      state.logLoading = true;
      state.logError = false;
    },
    otpSuccess: (state, {payload}) => {
      state.userInfo = payload;
      state.logLoading = false;
      state.logError = false;
    },
    otpErrored: (state, {payload}) => {
      state.userInfo = null;
      state.logLoading = false;
      state.logError = payload;
    },
    logout: state => {
      state.userInfo = null;
      state.logLoading = false;
      state.logError = false;
    },
  },
});

// Destructure and export the plain action creators
export const {otpPending, otpErrored, otpSuccess, logout} = otpSlice.actions;

export default otpSlice.reducer;

export const otpRes = (otpInfo, callBack) => async (dispatch, getState) => {
  try {
    dispatch(otpPending());

    const data = {
      title: 'Welcome',

      mobile: otpInfo.mobile,
    };

    dispatch(otpSuccess(data));
    callBack();
  } catch (otpError) {
    dispatch(otpErrored(true));
  }
};
export const socialLogin =
  (otpInfo, callBack) => async (dispatch, getState) => {
    try {
      dispatch(otpPending());
      const {data} = await axiosInstance.post(`/api/Home/SocialLogin`, otpInfo);

      if (data.isSuccess) {
        dispatch(otpSuccess(data.data));
        callBack();
      } else {
        dispatch(otpErrored(true));
      }
    } catch (otpError) {
      console.log(otpError);
      dispatch(otpErrored(true));
    }
  };
