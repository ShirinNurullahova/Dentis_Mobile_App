import React from 'react';
import { StyleSheet, View,Text } from 'react-native';

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
        color: '#31353D',
        textAlign: 'center',
        fontSize: 34,
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: 28,
        lineHeight: 40,
      },
});

export default TextComponent;
