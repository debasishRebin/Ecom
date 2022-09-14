import {createSlice} from '@reduxjs/toolkit';

const loginState = {
  otpInfo: null,
  otpLoading: false,
  otpError: false,
};

export const loginSlice = createSlice({
  name: 'loginOtp',
  initialState: loginState,

  reducers: {
    loginPending: state => {
      state.otpInfo = null;
      state.otpLoading = true;
      state.otpError = false;
    },
    loginErrored: (state, {payload}) => {
      state.otpInfo = null;
      state.otpLoading = false;
      state.otpError = payload;
    },
    loggedIn: (state, {payload}) => {
      state.otpInfo = payload;
      state.otpLoading = false;
      state.otpError = false;
    },
  },
});

// Destructure and export the plain action creators
export const {loginPending, loginErrored, loggedIn} = loginSlice.actions;

export default loginSlice.reducer;

export const logRes = (loginInfo, callBack) => async (dispatch, getState) => {
  try {
    dispatch(loginPending());

    callBack();
    dispatch(loggedIn(loginInfo));
  } catch (logError) {
    dispatch(loginErrored(true));
  }
};
