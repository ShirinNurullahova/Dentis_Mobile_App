import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  text: string;
  fontSize?: boolean;
}

const TextComponent = ({ text, fontSize}: Props) => {
  return (
       <View>
          <Text style={[styles.text, fontSize && styles.new]}>{text}</Text>
       </View>
  );
};

const styles = StyleSheet.create({
    text: {
        color: globalStyles.colors.black,
        textAlign: 'center',
        fontSize: globalStyles.fontStyle.largeFontSize,
        fontFamily: globalStyles.fontStyle.primary,
        fontWeight: globalStyles.fontStyle.textFontWeight,
        lineHeight: globalStyles.fontStyle.largeTextLineHeight,
      },
      new:{
        fontSize: globalStyles.fontStyle.mediumFontSize,
        textAlign:'auto'
      }
    
});

export default TextComponent;
