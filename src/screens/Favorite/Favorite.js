import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import CustomHeader from '../../../CustomHeader';
import CartCard from '../../components/Product/CartCard/CartCard';
import CustomButton from '../../components/UI/CustomButton';
import MainTitle from '../../components/UI/MainTitle';
import {IMG} from '../../constants/Image';
import {globalStyles} from '../../globalStyles/globalStyles';

const {width, height} = Dimensions.get('window');

const NoFound = ({navigation}) => {
  return (
    <View style={[noItemStyle.notFoundContainer, globalStyles.mrHrm]}>
      <View style={noItemStyle.notFound}>
        <Image source={IMG.NOCART} style={noItemStyle.notFoundImg} />
        <Text style={[noItemStyle.noCartText, {fontWeight: '600'}]}>
          Your Cart Is Empty!
        </Text>
        <View
          style={{
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={[noItemStyle.noResultText]}>
            Looks like you haven't added
          </Text>
          <Text style={noItemStyle.noResultText}>
            anything to your favorites list yet
          </Text>
        </View>
        <View style={{marginTop: 40, width: '60%'}}>
          <CustomButton
            buttonTitle="Continue shopping"
            onHandlePress={() => navigation.replace('DrawerNavigator')}
            secondaryColor={true}
            pdVertical={6.5}
            fSize={width / 28}
            icon={false}
            btnSmall={true}
          />
        </View>
      </View>
    </View>
  );
};

const Favorite = ({navigation}) => {
  const mainTitle = 'Your favorites products';
  const subTitle = 'Bestsellers in india';

  const cartReducer = useSelector(state => state.cart);

  return (
    <SafeAreaView style={styles.favContainer}>
      <StatusBar backgroundColor="#1dd3e9" />

      <View style={{zIndex: -1}}>
        <CustomHeader
          title="favorite"
          isHome={true}
          navigation={navigation}
          goBackRoute="favorite"
          pdBottom={height / 25}
          headerHeight={height / 8}
        />
      </View>

      <ScrollView
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <React.Fragment>
          {cartReducer.cartItems.length === 0 && (
            <NoFound navigation={navigation} />
          )}
          {cartReducer.cartItems.length > 0 && (
            <View style={styles.favContainer}>
              <View style={styles.favTitleContainer}>
                <View style={styles.favTitle}>
                  <MainTitle
                    titleOne={mainTitle}
                    titleTwo={subTitle}
                    flwHeight={width / 6}
                  />
                </View>
                <View style={styles.favImgContainer}>
                  <Image
                    style={styles.favImage}
                    source={IMG.IMAGE_CART_BIG}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View style={{marginVertical: 5}}>
                {cartReducer.cartItems.map((cartItem, idx) => {
                  return <CartCard item={cartItem} key={idx} />;
                })}
              </View>
            </View>
          )}
        </React.Fragment>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  favContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  favTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width / 50,
  },

  favTitle: {
    flex: 3.2,
  },

  favImgContainer: {
    flex: 1,
    position: 'relative',
  },

  favImage: {
    width: width / 6,
    marginRight: 25,
    position: 'absolute',
    top: -50,
    left: -5,
  },

  favContainer: {
    backgroundColor: '#e9edef',
    flex: 1,
  },
});

export const noItemStyle = StyleSheet.create({
  notFoundContainer: {
    height: height / 2,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notFoundImg: {
    width: width / 3,
    height: width / 3,
  },
  noResultText: {
    color: '#6a7fa1',
    fontSize: width / 30,
    fontWeight: '400',
  },
  noCartText: {
    color: '#6a7fa1',
    fontSize: width / 28,
    fontWeight: '400',
  },
  notFound: {
    backgroundColor: '#fff',
    width: '90%',
    height: '100%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
