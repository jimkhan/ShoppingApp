import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AppText} from '@common';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
interface Props {
  title: string;
  price: number;
  image: string;
  details: object;
}
const ProductCard = ({title, image, details, price = 0}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Details', {details})}>
      <Image source={{uri: image}} style={styles.imageStyle} />
      <AppText style={styles.priceText}>${price}</AppText>
      <AppText numberOfLines={2} style={styles.titleText}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(40),
    height: hp(33),
    // backgroundColor: Colors.btnBackOrange,
    marginRight: wp(5),
  },
  priceText: {
    marginTop: hp(1),
  },
  titleText: {
    marginTop: hp(1),
  },
  imageStyle: {
    width: wp(40),
    height: hp(23),
    borderRadius: hp(0.7),
  },
});

export default ProductCard;
