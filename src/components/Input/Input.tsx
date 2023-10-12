import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native';

interface Props {
  value: string;
  onChange: () => void;
  placeholder?: string;
  label?: string;
  iconShow?: boolean;
}

const Input = ({ onChange, value, placeholder, label, iconShow = false }: Props) => {
  return (
    <View style={styles.inputComponent}>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.inputDiv}>
        <TextInput
          onChangeText={onChange}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#B4B6B8"
        />
        {iconShow && (
          <TouchableOpacity>
            <Image source={require('../../assest/images/inputicon.png')} style={styles.image} />
          </TouchableOpacity>
        )}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputComponent:{
    marginTop:20,
  },
  input: {
    width: 343,
    color: '#B4B6B8',
    backgroundColor: '#F8F9F9',
    paddingHorizontal: 14,
    paddingVertical: 16,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 12,
  },
  inputDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    right: 5,
    top:-7,
    width: 20,
    height: 20,
  },
  text: {
    color: '#9EA0A3',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom:10,
    lineHeight: 18 /* 138.462% */,
  },
});
export default Input;
