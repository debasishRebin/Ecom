import {combineReducers} from 'redux';
import loginReducer from './redux/auth/loginSlice';
import otpReducer from './redux/auth/otpSlice';
import cartReducer from './redux/cartSlice/cartSlice';
import productOverviewReducer from './redux/productOverviewSlice/productOverviewSlice';

const rootReducer = combineReducers({
  cart: cartReducer,

  productOverview: productOverviewReducer,

  login: loginReducer,
  otpRes: otpReducer,
});

export default rootReducer;
