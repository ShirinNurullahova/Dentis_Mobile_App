import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface RadioButtonProps {
  index: number;
  checkedIndex: number;
}

const RadioButton: React.FC<RadioButtonProps> = ({ index, checkedIndex }) => {
  return (
    <View style={styles.btn}>
      <Image
        style={styles.img}
        source={index === checkedIndex ? require('../../assets/images/checked.png') : require('../../assets/images/unchecked.png')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RadioButton;
