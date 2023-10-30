import React, { ChangeEvent, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import { G } from 'react-native-svg';

interface Props {
  value: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  placeholder?: string;
  label?: string;
  iconShow?: boolean;
  cardIconShow?: boolean;
  onBlur?: (e: string | ChangeEvent<any>) => void;
  type?: string | any;
  handleShowPassword?: () => void;
  secureTextEntry?: boolean;
}

const Input = ({
  onChangeText,
  value,
  placeholder,
  label,
  iconShow = false,
  type = 'default',
  handleShowPassword,
  secureTextEntry,
}: Props) => {
  const [border, setBorder] = useState(false);

  const handleFocus = () => {
    setBorder(true);
  };

  const handleBlur = () => {
    setBorder(false);
  };
console.log({secureTextEntry})
  return (
    <View style={styles.inputComponent}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputDiv}>
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          style={[styles.input, border && styles.borderColor]}
          placeholder={placeholder}
          placeholderTextColor="#B4B6B8"
          keyboardType={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          multiline={false}
          autoCapitalize="none"
        />
        {iconShow && (
          <TouchableOpacity onPress={handleShowPassword}>
            <Image source={require('../../assets/images/inputicon.png')} style={styles.image} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputComponent: {
    marginTop: 28,
  },
  borderColor: {
    borderColor: globalStyles.colors.green,
    borderWidth: 1,
  },
  input: {
    width: '100%',
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
