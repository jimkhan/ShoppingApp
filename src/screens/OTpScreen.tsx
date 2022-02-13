import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {AppTextInput, AppText, ButtonGradient} from '@common';
import {Colors, FontSize} from '@config';
import {signIn} from '../feature/auth/authentication';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';

const OTpScreen = () => {
  const dispatch = useDispatch();
  const setToken = async () => {
    dispatch(signIn('faketoken'));
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppText style={styles.title}>Verify</AppText>
      <AppTextInput title={'OTP'} placeholder={'Enter OTP'} />
      <ButtonGradient
        title="Verify"
        style={styles.loginButton}
        onPress={setToken}
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

export default OTpScreen;
