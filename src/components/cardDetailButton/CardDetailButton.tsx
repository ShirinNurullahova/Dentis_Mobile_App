import React, { ChangeEvent } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput,ImageSourcePropType } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface CardDetailButtonProps {
  text: string; // Specify the type of the 'text' prop
  isPressed?: boolean;
  onPress?: () => void;
  value: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  endText?: string;
  showIcon?: boolean;
  disabled?: boolean;
  imgIcon:ImageSourcePropType,
  width?: boolean;
  type?: string | any;
}
const CardDetailButton: React.FC<CardDetailButtonProps> = ({
  text,
  isPressed,
  onPress,
  endText="",
  showIcon,
  disabled,
  imgIcon,
  width,
  type,
  onChangeText
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.cardButton,
          isPressed ? { borderColor: '#12CC89', borderWidth: 1 } : null, width && styles.smallText // Change border color to green if isPressed is true
        ]}
      >
        <View style={styles.left}>
          {showIcon ? (
            <Image
              source={require('../../assets/images/Ellipse6.png')}
              style={{ width: 32, height: 32 }}
            />
          ) : (
            <Image
              source={imgIcon}
              style={{ width: 20, height: 20 }}
            />
          )}
          <TextInput style={styles.cardText} placeholder= {`${text}${showIcon ? '****' : ''} ${endText}`} editable={disabled}  keyboardType={type}   onChangeText={onChangeText} />
        </View>
        {showIcon ? (
          <Image source={require('../../assets/images/dropdown.png')} style={styles.rotateImg} />
        ) : null}
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
    width: 343,
    height: 48,
    marginBottom: 20,
  },
  smallText:{
      width:167
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
    width:"100%"
  },
  rotateImg: {
    width: 20,
    height: 20,
    transform: [{ rotate: '-90deg' }],
  },
});

export default CardDetailButton;
