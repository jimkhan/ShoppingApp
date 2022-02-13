import {SafeAreaView, StyleSheet, View, Alert} from 'react-native';
import React from 'react';
import {AppText, ButtonGradient} from '@common';
import {CartProductCard} from '@components';
import {Colors, FontSize} from '@config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import {clearState} from '../feature/shoppingCart';
import {useSelector, useDispatch} from 'react-redux';

const CheckoutScreen = ({}) => {
  const {productList, totalPrice} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const clear = async () => {
    dispatch(clearState());
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productList}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
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
        <AppText style={styles.priceText}>
          Total Price: ${totalPrice.toFixed(2)}
        </AppText>

        <ButtonGradient
          title="Confirm Order"
          onPress={() => {
            clear();
            totalPrice > 0
              ? Alert.alert(
                  'Congratulation',
                  'You have sucessfully submit the order!',
                )
              : Alert.alert(
                  'Your cart is empty!',
                  'Please add some item to the cart!',
                );
          }}
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
  priceText: {
    fontSize: FontSize.XL,
    fontWeight: 'bold',
    // color: Colors.card2,
    paddingLeft: wp(7),
    marginBottom: hp(3),
    marginTop: hp(2),
  },
  buttonArea: {
    width: wp(100),
    height: hp(20),
    // justifyContent: 'center',
    position: 'absolute',
    bottom: hp(3),
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {
    paddingTop: hp(2),
    paddingBottom: hp(30),
    alignItems: 'center',
    width: wp(100),
    // height: hp(40),
  },
});
export default CheckoutScreen;
