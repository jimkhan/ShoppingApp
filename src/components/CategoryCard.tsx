import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {AppText} from '@common';
import {Colors} from '@config';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
interface Props {
  title: string;
  position: number;
  image: string;
}

const CategoryCard = ({position = 11, title, image}: Props) => {
  const index = position % 3;
  const color = [
    {
      start: Colors.primary,
      end: Colors.primary2,
    },
    {
      start: Colors.card1,
      end: Colors.card2,
    },
    {
      start: Colors.card3,
      end: Colors.card4,
    },
  ];
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: image}} style={styles.imageStyle} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[color[index].start, color[index].end]}
        style={[styles.gradientStyle]}>
        <AppText numberOfLines={1} style={styles.titleText}>
          {title}
        </AppText>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(35),
    height: hp(10),
    backgroundColor: Colors.active,
    borderRadius: hp(0.7),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp(3),
    shadowOffset: {
      width: 0,
      height: 0.3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.32,
    elevation: 3,
  },
  titleText: {
    color: Colors.white,
    fontWeight: '600',
    position: 'absolute',
  },
  gradientStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(0.7),
    width: wp(35),
    height: hp(10),
    opacity: 0.8,
  },
  imageStyle: {
    width: wp(35),
    height: hp(10),
    borderRadius: hp(0.7),
    position: 'absolute',
  },
});

export default CategoryCard;
