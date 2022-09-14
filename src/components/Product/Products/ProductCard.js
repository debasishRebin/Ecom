import React, {PureComponent} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const {width, height} = Dimensions.get('window');

export class ProductCard extends PureComponent {
  render() {
    const {item, handleAddToCart} = this.props;

    return (
      <Pressable style={styles.productsContainer}>
        <FastImage
          style={styles.itemImage}
          source={{
            uri: item.thumbnail,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        <View style={styles.itemInfo}>
          <Text style={[styles.itemDesc, styles.itemText]}>{item.title}</Text>
          <View style={styles.itemPriceContainer}>
            <Text style={[styles.itemPrice, styles.itemText]}>
              Price: <Text style={styles.price}>{item.price}</Text>{' '}
            </Text>
            <Text style={[styles.itemActualPrice, styles.itemText]}>
              {item.discountPercentage}
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <FastImage
              style={styles.fullStarIcon}
              source={{
                uri: 'https://electricoworld.com/images/five-star.png',
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />

            <View style={styles.percentageContainer}>
              <Pressable
                onPress={() => handleAddToCart(item)}
                style={styles.percentageSubContainer}>
                <Text style={styles.percentageText}>Add to Favorite</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
    );
  }
}

export default ProductCard;
const styles = StyleSheet.create({
  productList: {
    position: 'relative',
  },

  productsContainer: {
    width: '45%',
    margin: 5,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 4,
    marginBottom: 15,
  },

  itemImage: {
    height: 120,
    width: '100%',
    marginBottom: 10,
    marginRight: 10,
  },

  itemPriceContainer: {
    flexDirection: 'row',
  },
  itemInfo: {
    width: '100%',
  },
  itemDesc: {
    color: '#6a7fa1',
  },
  itemText: {
    fontSize: width / 36,
    marginTop: 10,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    letterSpacing: 0.1,
  },
  itemPrice: {
    color: '#828282',
  },
  price: {color: '#6a7fa1'},
  itemActualPrice: {
    color: '#828282',
    textDecorationColor: 'red',
    textDecorationLine: 'line-through',
  },
  fullStarIcon: {
    width: width / 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 2,
  },

  percentageContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  percentageSubContainer: {
    backgroundColor: '#1dd3e9',
    paddingLeft: 8,
    paddingRight: 4,
    paddingVertical: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addToFav: {
    width: width / 35,
    height: height / 35,
    marginRight: 3,
  },
  percentageText: {
    fontSize: width / 32,
    paddingVertical: 2,
    fontWeight: 'bold',
    color: '#fff',
  },
});
