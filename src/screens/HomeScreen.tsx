import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {AppText, Loader} from '@common';
import {ProductCard, CategoryCard} from '@components';
import {Colors, FontSize} from '@config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native-gesture-handler';
import {getAllProduct, getAllCategory} from '../api/product';
import {setAllCategory, setAllProducts} from '../feature/products';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {isLoading, allProducts, allCategory} = useSelector(
    state => state.orders,
  );
  // const isLoading = false;

  const callAllProduct = async () => {
    const res = await getAllProduct();
    if (res.ok) {
      console.log('Okkk', res.data);
      dispatch(setAllProducts(res.data));
      console.log('reduxxxx', allProducts);
    }
  };
  const callAllCategory = async () => {
    const res = await getAllCategory();
    if (res.ok) {
      console.log('Okkk', res.data);
      dispatch(setAllCategory(res.data));
      console.log('reduxxxx', allProducts);
    }
  };

  const categoryItem = () => {
    return (
      <>
        <View style={styles.categoryArea}>
          {allCategory.length > 0 && (
            <AppText style={styles.titleText}>Category</AppText>
          )}

          <FlatList
            data={allCategory}
            contentContainerStyle={styles.commonContainerStyle}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            horizontal
            renderItem={({item, index}) => {
              return <CategoryCard position={index} title={item} />;
            }}
          />
        </View>
      </>
    );
  };
  const BestSellItem = () => {
    return (
      <>
        <View style={{height: hp(40)}}>
          {allProducts.length > 0 && (
            <AppText style={styles.titleText}>Featured item</AppText>
          )}
          <FlatList
            data={allProducts}
            contentContainerStyle={styles.commonContainerStyle}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item}) => {
              return (
                <ProductCard
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  details={item}
                />
              );
            }}
          />
        </View>
        <View>
          {allProducts.length > 0 && (
            <AppText style={styles.titleText}>Best sell</AppText>
          )}

          <FlatList
            data={allProducts}
            contentContainerStyle={styles.commonContainerStyle}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            horizontal
            renderItem={({item}) => {
              return (
                <ProductCard
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  details={item}
                />
              );
            }}
          />
        </View>
      </>
    );
  };

  useEffect(() => {
    callAllCategory();
    callAllProduct();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading && <Loader />}
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={categoryItem}
        ListFooterComponent={BestSellItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  categoryArea: {
    height: hp(17),
  },
  contentContainerStyle: {
    width: wp(100),
    alignItems: 'center',
  },
  commonContainerStyle: {
    paddingLeft: wp(5),
    alignItems: 'center',
  },
  title: {
    marginTop: hp(5),
    marginLeft: wp(5),
    fontSize: FontSize.XXL,
    marginBottom: hp(7),
  },
  loginButton: {
    marginTop: hp(8),
  },
  titleText: {
    fontSize: FontSize.L,
    paddingLeft: wp(5),
    marginBottom: hp(1),
  },
});

export default HomeScreen;
