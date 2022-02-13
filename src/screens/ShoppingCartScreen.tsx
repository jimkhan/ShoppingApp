import {SafeAreaView, StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {AppText, ButtonGradient, Loader} from '@common';
import {CartProductCard} from '@components';
import {Colors, FontSize} from '@config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import {getAllProduct, getAllCategory} from '../api/product';
import {
  addToCart,
  removeFromCart,
  dicreaseFromCart,
} from '../feature/shoppingCart';
import {useSelector, useDispatch} from 'react-redux';
import {DetailsNavigationProps} from 'types';

const ShoppingCartScreen = ({navigation}) => {
  const {productList} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const addProduct = async () => {
    dispatch(addToCart(item));
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productList}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          console.log('iiii', item);

          return (
            <CartProductCard
              title={item.title}
              item={item}
              brandName={'N/A'}
              image={item.image}
              price={item.price}
              quantity={item.quantity}
            />
          );
        }}
      />
      <View style={styles.buttonArea}>
        <ButtonGradient
          title="Checkout"
          onPress={() => navigation.navigate('Checkout')}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  buttonArea: {
    width: wp(100),
    height: hp(10),
    justifyContent: 'center',
    position: 'absolute',
    bottom: hp(3),
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {
    paddingTop: hp(2),
    paddingBottom: hp(7),
    alignItems: 'center',
    width: wp(100),
  },
});

export default ShoppingCartScreen;
