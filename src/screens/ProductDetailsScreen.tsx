import {SafeAreaView, StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {AppText, ButtonGradient, Loader} from '@common';
import {ProductCard, CategoryCard} from '@components';
import {Colors, FontSize} from '@config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import {getAllProduct, getAllCategory} from '../api/product';
import {addToCart} from '../feature/shoppingCart';
import {useSelector, useDispatch} from 'react-redux';
import {DetailsNavigationProps} from 'types';
const ProductDetailsScreen = ({route}: DetailsNavigationProps) => {
  const item = route.params.details;
  const dispatch = useDispatch();
  const addProduct = async () => {
    dispatch(addToCart(item));
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Image source={{uri: item.image}} style={styles.image} />
        <AppText style={styles.priceText}>Price: ${item.price}</AppText>
        <AppText style={styles.title}>{item.title}</AppText>
        <ButtonGradient
          style={styles.button}
          title="Add to cart"
          onPress={addProduct}
        />
        <AppText style={styles.titleDescription}>Description</AppText>
        <AppText style={styles.description}>{item.description}</AppText>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    // marginTop: hp(2),
    alignItems: 'center',
    paddingBottom: hp(7),
  },
  description: {
    width: wp(90),
  },
  button: {
    width: wp(90),
  },
  titleDescription: {
    width: wp(90),
    marginTop: hp(2),
    marginBottom: hp(1),
    fontSize: FontSize.M,
    fontWeight: 'bold',
  },
  priceText: {
    color: Colors.card2,
    fontSize: FontSize.XL,
    marginBottom: hp(0.5),
  },
  title: {
    fontSize: FontSize.L,
    marginBottom: hp(2),
    fontWeight: 'bold',
    width: wp(90),
  },
  image: {
    width: wp(80),
    height: hp(50),
    marginVertical: hp(2),
  },
});

export default ProductDetailsScreen;
