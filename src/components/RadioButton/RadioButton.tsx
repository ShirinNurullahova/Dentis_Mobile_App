import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const RadioButton = ({index}:{index:number}) => {
    const [checked, setChecked] = useState(0);
  
  return (
    <View>
      <View style={styles.btn}>
            <View >
              {checked == index ? (
                <TouchableOpacity style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../../assets/images/checked.png')}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(index);
                  }}
                  style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../../assets/images/unchecked.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
         
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RadioButton;