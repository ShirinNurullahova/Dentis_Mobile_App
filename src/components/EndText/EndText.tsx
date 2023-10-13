import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

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
        fontSize:16,
        fontWeight:'400',
        fontFamily:'Poppins-Regular',
    },
    size:{
      fontSize:13,
    },
      difText:{
        color:'#12CC89'
      }
});

export default EndTextComponent;
