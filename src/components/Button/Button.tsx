import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  text: string;
  onPress: () => void;
  title: string;
  disabled: boolean;
  type: string;
  bckgColor?: boolean;
}

const CustomButton = ({ text, onPress, disabled, bckgColor}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, (disabled && styles.diff)]}>
        <Text style={styles.buttonText}>{text}</Text>

      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 12,
    marginBottom:20,
    backgroundColor: globalStyles.colors.gray,
  },
  addition: {
    backgroundColor: globalStyles.colors.inputBckgColor,
  },
  additionText: {
    color: globalStyles.colors.gray,
  },
  diff: {
    backgroundColor: globalStyles.colors.green,
  },
  buttonText: {
    color: globalStyles.colors.white,
    fontSize: globalStyles.fontStyle.buttonFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.buttonLineHeight,
  },
});

export default CustomButton;
