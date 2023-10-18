import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface CardDetailButtonProps {
  text: string; // Specify the type of the 'text' prop
  isPressed: boolean;
  onPress: () => void;
  endText: string
}
const CardDetailButton: React.FC<CardDetailButtonProps> = ({ text, isPressed, onPress, endText}) => {
  return (
    <TouchableOpacity onPress={onPress} >
       <View style={[
        styles.cardButton,
        isPressed ? { borderColor: '#12CC89', borderWidth:1 } : null // Change border color to green if isPressed is true
      ]}>
        <View style={styles.left}>
          <Image source={require('../../assets/images/Ellipse6.png')} style={{ width: 32, height: 32 }} />
          <Text style={styles.cardText}>{text}****{endText}</Text>
        </View>
        <Image source={require('../../assets/images/dropdown.png')} style={styles.rotateImg} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardButton: {
    paddingHorizontal:20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.colors.inputBckgColor,
    borderRadius: globalStyles.borderRadius,
    width: 343,
    height: 64,
    marginBottom:20
  },
 
  left:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText:{
     fontFamily: globalStyles.fontStyle.primary,
     fontWeight: globalStyles.fontStyle.textFontWeight,
     color:"#7E7F83",
     marginLeft:10
  },
  rotateImg:{
    width:20,
    height:20,
    transform:[
      {rotate:'-90deg'}
    ]
  }
});

export default CardDetailButton;
