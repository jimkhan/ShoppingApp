import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AppText} from '@common';
import {Colors, FontSize} from '@config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  dicreaseFromCart,
} from '../feature/shoppingCart';
interface Props {
  title: string;
  brandName: string;
  price: number;
  image: string;
  quantity: number;
  item: object;
}

const CartProductCard = ({
  title,
  item,
  brandName,
  image,
  quantity,
  price = 0,
}: Props) => {
  const dispatch = useDispatch();

  const addItem = async () => {
    dispatch(addToCart(item));
  };
  const removeItem = async () => {
    dispatch(removeFromCart(item));
  };
  const removeSingleItem = async () => {
    dispatch(dicreaseFromCart(item));
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.imageStyle} />
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={removeItem}>
          <Icon name="ios-close-outline" size={RFValue(20)} />
        </TouchableOpacity>
        <AppText numberOfLines={1} style={styles.titleText}>
          {title}
        </AppText>
        <AppText numberOfLines={1} style={styles.brandText}>
          {brandName}
        </AppText>
        <AppText style={styles.priceText}>${price}</AppText>
        <View style={styles.countArea}>
          <TouchableOpacity
            style={styles.countButton}
            onPress={removeSingleItem}>
            <Icon name="ios-remove" size={RFValue(20)} />
          </TouchableOpacity>
          <AppText style={styles.countText}>{quantity}</AppText>
          <TouchableOpacity style={styles.countButton} onPress={addItem}>
            <Icon name="ios-add" size={RFValue(20)} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(15),
    flexDirection: 'row',
    paddingHorizontal: wp(2),
    marginBottom: hp(2),
    backgroundColor: Colors.white,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.32,
    elevation: 3,
  },
  subContainer: {
    height: hp(13),
    width: wp(53),
    marginLeft: wp(3),
  },
  brandText: {
    marginBottom: hp(0.4),
    color: Colors.darkGray,
  },
  closeButton: {
    position: 'absolute',
    width: hp(3),
    height: hp(3),
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    right: 0,
  },
  priceText: {
    marginBottom: hp(0.4),
    fontSize: FontSize.L,
    color: Colors.Completed,
  },
  titleText: {
    marginBottom: hp(0.4),
    width: wp(45),
    // backgroundColor: 'red',
  },
  imageStyle: {
    width: hp(13),
    height: hp(13),
  },
  countArea: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(35),
    height: hp(4),
    borderRadius: hp(0.5),
    backgroundColor: Colors.background,
  },
  countButton: {
    width: wp(11),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Colors.AllOrders,
  },

  countText: {},
});

export default CartProductCard;
