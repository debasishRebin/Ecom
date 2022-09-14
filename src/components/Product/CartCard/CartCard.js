import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {IMG} from '../../../constants/Image';
import {removeFromCart} from '../../../redux/cartSlice/cartSlice';

const {width, height} = Dimensions.get('window');

const CartCard = ({item}) => {
  const [cartList, setCartList] = useState([]);

  const dispatch = useDispatch();
  // const cartReducer = useSelector(state => state.cart);

  const handleDeleteToCard = cartItem => {
    dispatch(removeFromCart(cartItem));
  };

  const renderItem = item => (
    <View style={styles.cartCardContainer}>
      <View style={styles.cartCardSubContainer}>
        <View style={styles.cartImageContainer}>
          <FastImage
            style={styles.itemImage}
            source={{
              uri: item.thumbnail,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.itemInfo}>
          <Text style={[styles.itemDesc, styles.itemText]}>{item.title}</Text>
          <View style={styles.itemPriceContainer}>
            <Text style={[styles.itemPrice, styles.itemText]}>
              Price: <Text style={styles.price}>{item.discountPercentage}</Text>
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Image
              key={item.id}
              source={require('../../../assets/products/full-rating.png')}
              style={styles.fullStarIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={styles.cartCartFooterContainer}>
        <TouchableOpacity
          onPress={() => handleDeleteToCard(item)}
          style={styles.trashImageContainer}>
          <Image
            key={item.id}
            style={styles.trashImage}
            source={IMG.IMAGE_TRASH}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  return <View style={styles.productList}>{renderItem(item)}</View>;
};

export default CartCard;

const styles = StyleSheet.create({
  cartCardContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    marginHorizontal: width / 20,
    paddingTop: width / 30,
    paddingBottom: width / 30,
    elevation: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  cartCardSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartImageContainer: {
    flex: 1,
  },
  itemInfo: {
    flex: 1.1,
    borderColor: 'red',
    marginLeft: width / 40,
  },

  itemImage: {
    height: 120,
    width: '100%',
    marginRight: 10,
  },
  itemPriceContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  itemDesc: {
    color: '#6a7fa1',
  },
  itemText: {
    fontSize: width / 32,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    letterSpacing: 0.1,
  },
  itemPrice: {
    color: '#828282',
  },
  price: {color: '#6a7fa1', fontSize: width / 30},
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  fullStarIcon: {
    width: width / 6,
  },
  productList: {
    position: 'relative',
  },
  cartCartFooterContainer: {
    flex: 1,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  trashImage: {
    width: width / 20,
    height: width / 20,
  },
});
