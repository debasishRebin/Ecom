import {createSlice} from '@reduxjs/toolkit';
import axiosInstance from '../../helper/axiosInstance/axiosInstance';

const initialState = {
  overviewList: [],
  overviewListLoading: true,
  overviewListError: false,
};

export const productOverviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {
    overviewPending: state => {
      // state.overviewList = initialState.overviewList;
      state.overviewListLoading = true;
      state.overviewListError = false;
    },
    overviewErrored: (state, {payload}) => {
      // state.overviewList = initialState.overviewList;
      state.overviewListLoading = false;
      state.overviewListError = payload;
    },
    overviewDetails: (state, {payload}) => {
      state.overviewList = [...initialState.overviewList, ...payload];
      state.overviewListLoading = false;
      state.overviewListError = false;
    },
  },
});

// Destructure and export the plain action creators
export const {overviewPending, overviewErrored, overviewDetails} =
  productOverviewSlice.actions;

export default productOverviewSlice.reducer;

export const getOverviewList = limit => async (dispatch, getState) => {
  try {
    dispatch(overviewPending());

    const {data} = await axiosInstance.get(`products?limit=${limit}&skip=10`);

    dispatch(overviewDetails(data.products));
  } catch (overviewError) {
    dispatch(overviewErrored(true));
  }
};
