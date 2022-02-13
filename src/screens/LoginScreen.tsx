import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {AppTextInput, AppText, ButtonGradient} from '@common';
import {Colors, FontSize} from '@config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppText style={styles.title}>Login</AppText>
      <AppTextInput title={'Phone'} placeholder={'Enter phone number'} />
      <ButtonGradient
        title="Login"
        style={styles.loginButton}
        onPress={() => navigation.navigate('Otp')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
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
});

export default LoginScreen;
