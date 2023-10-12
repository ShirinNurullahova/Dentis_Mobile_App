import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

interface Props {
  text: string;
  diffText: string;
}

const EndTextComponent = ({ text,diffText }: Props) => {
  return (
       <View>
          <Text style={styles.all}>{text}<Text style={styles.difText}>{diffText}</Text></Text>
       </View>
  );
};

const styles = StyleSheet.create({
    all:{
        textAlign:'center',
        margin:20,
    },
      difText:{
        color:'#12CC89',
      }
});

export default EndTextComponent;
