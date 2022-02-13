import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import {AppText} from '@common';
import {Colors} from '@config';

const HeaderRight = ({}) => {
  const navigation = useNavigation(); //cart-outline

  const {totalItem} = useSelector(state => state.cart);
  const itemIncart = totalItem;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.subContainer}
        onPress={() => navigation.navigate('Cart')}>
        {itemIncart > 0 && (
          <View style={styles.cardValueArea}>
            <AppText style={styles.cardValue}>{itemIncart}</AppText>
          </View>
        )}
        <Icon name="cart-outline" size={RFValue(25)} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(15),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  cardValue: {
    color: Colors.white,
  },
  cardValueArea: {
    position: 'absolute',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(2.5),
    height: hp(2.5),
    borderRadius: hp(2),
    top: -hp(0.5),
    right: 0,
    color: Colors.redButtonBack,
    zIndex: 999,
  },
  subContainer: {
    width: wp(10),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default HeaderRight;
