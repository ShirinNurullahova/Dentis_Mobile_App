import React, { ChangeEvent, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  value: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  placeholder?: string;
  label?: string;
  iconShow?: boolean;
  cardIconShow?: boolean;
  onBlur: (e: string | ChangeEvent<any>) => void;
  type?: string | any;
}

const Input = ({
  onChangeText,
  value,
  placeholder,
  label,
  iconShow = false,
  type = 'default'
}: Props) => {
  return (
    <View style={styles.inputComponent}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputDiv}>
       
         
          <TextInput
            onChangeText={onChangeText}
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#B4B6B8"
            keyboardType={type}
          />
       

        {iconShow && (
          <TouchableOpacity>
            <Image source={require('../../assets/images/inputicon.png')} style={styles.image} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputComponent: {
    marginTop: 20,
  },
 
  input: {
    width: 343,
    color: globalStyles.colors.disableColor,
    backgroundColor: globalStyles.colors.inputBckgColor,
    paddingHorizontal: 14,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    display: 'flex',
    alignItems: 'center',
    borderRadius: globalStyles.borderRadius,
  },
  inputDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    right: 5,
    top: -7,
    width: 20,
    height: 20,
  },
  text: {
    color: globalStyles.colors.gray,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    marginBottom: 10,
    lineHeight: globalStyles.fontStyle.inputLineHeight /* 138.462% */,
  },
});
export default Input;
