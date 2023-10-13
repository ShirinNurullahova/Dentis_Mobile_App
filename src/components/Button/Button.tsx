import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  backgroundColor?: string;
}

const CustomButton = ({ text, onPress, backgroundColor = '#B4B6B8' }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, { backgroundColor }]}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 13,
    // backgroundColor: '#B4B6B8',
    borderRadius: 12,
    marginTop: 28,
    gap: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
  },
});

export default CustomButton;
