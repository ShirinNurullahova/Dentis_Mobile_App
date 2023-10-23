import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, ViewStyle, TextStyle } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  type: string;
  viewStyle?:ViewStyle,
  textStyle?:TextStyle
}

const PaymentButton = ({ text, onPress, disabled, textStyle, viewStyle }: Props) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View style={[styles.buttonNew, viewStyle, disabled && styles.disabled]}>
        <Text style={[styles.buttonTextNew, textStyle, disabled && styles.disabled  ]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentButton;

const styles = StyleSheet.create({
  buttonNew: {
    // paddingVertical:0
  },

  buttonTextNew: {},
  disabled: {
    backgroundColor: globalStyles.colors.gray,
    color:globalStyles.colors.white
  },
});
