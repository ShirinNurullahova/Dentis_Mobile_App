import React, { ChangeEvent, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ImageSourcePropType,
} from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import RadioButton from '../RadioButton/RadioButton';

interface CardDetailButtonProps {
  text?: string; // Specify the type of the 'text' prop
  isPressedButton?: boolean;
  onPress?: (index?: number) => void;
  value?: string;
  onChangeText?: (e: string | ChangeEvent<any>) => void;
  endText?: string;
  showIcon?: boolean;
  disabled?: boolean;
  imgIcon?: ImageSourcePropType | undefined;
  width?: boolean;
  type?: string | any;
  showCheckBox?: boolean;
  index?: number;
  showDropDown?: boolean;
  setDetail?: any;
  selectedRadioButton?: any;
}
const CardDetailButton: React.FC<CardDetailButtonProps> = ({
  text,
  onPress,
  endText = '',
  showIcon,
  disabled,
  imgIcon,
  width,
  type,
  onChangeText,
  showCheckBox,
  showDropDown,
  index,
  setDetail,
  selectedRadioButton,
  isPressedButton
}) => {
  // const isPressedButton = index === selectedRadioButton;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.cardButton,
          isPressedButton ? { borderColor: '#12CC89', borderWidth: 1 } : null,
          width && styles.smallText,
        ]}
      >
        <View style={styles.left}>
          {showIcon ? (
            <Image source={imgIcon} style={{ width: 32, height: 32 }} />
          ) : (
            <Image source={imgIcon} style={{ width: 20, height: 20 }} />
          )}
          <TextInput
            style={styles.cardText}
            placeholder={`${text}${showIcon ? '****' : ''} ${endText}`}
            editable={disabled}
            keyboardType={type}
            onChangeText={onChangeText}
          />
        </View>

        <View>
          {showDropDown ? (
            <Image source={require('../../assets/images/dropdown.png')} style={styles.rotateImg} />
          ) : null}
          {showCheckBox ? (
            <TouchableOpacity
              onPress={() => {
                setDetail(index), onPress(index);
              }}
            >
              {showCheckBox ? (
                <RadioButton index={index} checkedIndex={selectedRadioButton} />
              ) : null}
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardButton: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.colors.inputBckgColor,
    borderRadius: globalStyles.borderRadius,
    width: '100%',
    height: 64,
    // marginBottom: 20,
  },
  smallText: {
    width: 167,
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    color: '#7E7F83',
    marginLeft: 10,
    zIndex:999999,
    // width: "100%"
  },
  rotateImg: {
    width: 20,
    height: 20,
    transform: [{ rotate: '-90deg' }],
    zIndex: 9999999,
  },
});

export default CardDetailButton;
