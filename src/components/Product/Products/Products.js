import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import ProductCard from './ProductCard';

const {width, height} = Dimensions.get('window');

let stopFetchMore = false;

const Products = ({navigation, productData, handleAddToCart, onPagination}) => {
  return (
    <View style={styles.productList}>
      <FlatList
        overScrollMode="never"
        numColumns={2}
        onEndReachedThreshold={0.5}
        initialNumToRender={6}
        onEndReached={onPagination}
        bounces={false}
        columnWrapperStyle={{justifyContent: 'space-evenly'}}
        data={productData}
        renderItem={({item}) => (
          <ProductCard item={item} handleAddToCart={handleAddToCart} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  productList: {
    position: 'relative',
    flex: 1,
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
  addToCart: {
    width: width / 35,
    height: height / 35,
    marginRight: 3,
  },
  percentageText: {
    fontSize: width / 45,
    fontWeight: 'bold',
    color: '#fff',
  },
});
