import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '@config';
import {Chase} from 'react-native-animated-spinkit';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Loader = ({...otherProps}) => {
  return (
    <View style={styles.container}>
      <Chase
        {...otherProps}
        hidesWhenStopped={true}
        size={RFValue(48)}
        color={Colors.primary2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(40, 40, 43, 0.1)',
    zIndex: 1000,
  },
});

export default Loader;
