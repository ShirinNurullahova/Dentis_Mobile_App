import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  text: string;
  diffText: string;
  size:boolean
}

const EndTextComponent = ({ text,diffText,size }: Props) => {
  return (
       <View>
          <Text style={[styles.all, size && styles.size]}>{text}{'  '}<Text style={styles.difText}>{diffText}</Text></Text>
       </View>
  );
};

const styles = StyleSheet.create({
    all:{
        textAlign:'center',
        margin:20,
        fontSize: globalStyles.fontStyle.endTextFontSize,
        fontWeight: globalStyles.fontStyle.textFontWeight,
        fontFamily:  globalStyles.fontStyle.primary,
    },
    size:{
      fontSize:globalStyles.fontStyle.smallTextFontSize,
    },
      difText:{
        color: globalStyles.colors.green
      }
});

export default EndTextComponent;
