import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  text: string;
}

const TextComponent = ({ text }: Props) => {
  return (
       <View>
          <Text style={styles.text}>{text}</Text>
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
});

export default TextComponent;
