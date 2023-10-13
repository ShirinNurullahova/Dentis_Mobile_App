import React, { FC, useEffect } from 'react';
import Screen from '../../components/Screen/Screen';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { VStack } from '../../components/features/VStack/VStack';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen: FC = () => {
  return (
      <SafeAreaView style={styles.all}>
         <View>
          <Text style={styles.text}>Daxil olun</Text>
          <Input onChange={() => {console.log("alert")}} value="" placeholder="+994" label="Mobil nömrə" />
          <Input
            onChange={() => {console.log("first")}}
            value="test"
            placeholder="Şifrə daxil edin"
            label="Şifrə"
            iconShow
          />
          <View style={styles.endTextDiv}>
            <Text style={styles.endText}>Şifrəni unutmusunuz ?</Text>
          </View>
          <CustomButton onPress={() => {console.log("salam")
          }} text="Davam et" />
        </View>
        <View>
          <Text>Hesabınız yoxdur? Qeydiyatdan keçin</Text>
        </View>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  all: {
    flex:1,
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingHorizontal: 16,
   paddingTop:100,
   paddingBottom:40
  },
  text: {
    color: '#31353D',
    textAlign: 'center',
    fontSize: 34,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 28,
    lineHeight: 40,
  },
  endTextDiv: {
    marginTop: 16,
    alignItems: 'flex-end',
  },
  endText: {
    color: '#5E6067',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20 /* 142.857% */,
  },
});

export default LoginScreen;
