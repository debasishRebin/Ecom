import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useToast} from 'react-native-toast-notifications';
import {useDispatch, useSelector} from 'react-redux';
import CustomHeader from '../../../CustomHeader';
import Products from '../../components/Product/Products/Products';
import MainTitle from '../../components/UI/MainTitle';
import {addToCart} from '../../redux/cartSlice/cartSlice';
import {getOverviewList} from '../../redux/productOverviewSlice/productOverviewSlice';

const {width, height} = Dimensions.get('window');

const ProductOverview = ({navigation, route}) => {
  const subTitle = 'Bestsellers in india';

  const activeRoute = useRoute();
  const [limit, setLimit] = useState(10);
  const [stopFetchMore, setSTopFetchMore] = useState(true);

  const dispatch = useDispatch();
  const toast = useToast();

  const {overviewListLoading, overviewList} = useSelector(
    state => state.productOverview,
  );

  useEffect(() => {
    dispatch(getOverviewList(limit));
  }, [limit]);

  const onPagination = () => {
    setLimit(limit + 10);
  };

  const handleAddToCart = addItem => {
    dispatch(addToCart(addItem));

    toast.hideAll();
    toast.show('The product is added to your cart', {
      type: 'success',
      placement: 'bottom',
      duration: 4000,
      offset: 30,
      animationType: 'slide-in',
    });
  };

  return (
    <SafeAreaView style={styles.ProductOverviewContainer}>
      <StatusBar backgroundColor="#1dd3e9" />
      {/* <SpinnerModal loading={overviewListLoading} /> */}
      <View style={{zIndex: -1}}>
        <CustomHeader
          title="ProductOverview"
          isHome={true}
          navigation={navigation}
          goBackRoute="ProductOverview"
          route={activeRoute}
          pdBottom={height / 25}
          headerHeight={height / 8}
        />
      </View>

      <FlatList
        data={[]}
        overScrollMode="never"
        bounces={false}
        ListEmptyComponent={null}
        keyExtractor={() => 'product'}
        renderItem={null}
        // showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{marginTop: 10}}>
            <MainTitle titleOne={`Product Overview`} titleTwo={subTitle} />
            {/* {overviewList.length === 0 && <NotFound navigation={navigation} />} */}
            <Products
              navigation={navigation}
              productData={overviewList}
              handleAddToCart={handleAddToCart}
              onPagination={onPagination}
              stopFetchMore={stopFetchMore}
              setSTopFetchMore={setSTopFetchMore}
            />
          </View>
        }
        ListFooterComponent={
          <>
            {overviewListLoading && (
              <ActivityIndicator
                size="small"
                color="#1dd3e9"
                style={{paddingVertical: 20}}
              />
            )}
          </>
        }
      />
    </SafeAreaView>
  );
};

export default ProductOverview;

const styles = StyleSheet.create({
  ProductOverviewContainer: {
    backgroundColor: '#e9edef',
    flex: 1,
    position: 'relative',
  },

  rangeSliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 45,
    marginHorizontal: width / 20,
  },
  rangeSlider: {
    width: '95%',
  },
  rangeSliderSubContainer: {
    borderColor: 'red',
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rangeText: {
    color: '#6a7fa1',
    fontWeight: '600',
    flex: 1,
  },

  //
});
