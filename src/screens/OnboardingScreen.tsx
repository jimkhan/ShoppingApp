import {Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {AppText, AppButton, ButtonGradient} from '@common';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, FontSize} from '@config';

const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppText style={styles.wecomeText}>Welcome to Bolt</AppText>
      <Image source={require('@img/Onboard.png')} style={styles.imageStyle} />
      <ButtonGradient
        title="Login with Phone"
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      />
      <AppButton title="Shop with us" style={styles.shopButton} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  wecomeText: {
    marginTop: hp(8),
    color: Colors.darkGray,
    fontSize: FontSize.L,
  },
  imageStyle: {
    marginTop: hp(15),
    width: wp(90),
    height: hp(30),
    marginBottom: hp(10),
  },
  loginButton: {
    width: wp(70),
  },
  shopButton: {
    width: wp(70),
    marginTop: hp(1),
  },
});

export default OnboardingScreen;
