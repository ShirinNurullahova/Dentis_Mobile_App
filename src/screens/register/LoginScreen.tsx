import React, { FC, useEffect } from 'react';
import Screen from '../../components/Screen/Screen';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { VStack } from '../../components/features/VStack/VStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import EndTextComponent from '../../components/EndText/EndText';
import { Form, Formik } from 'formik';
const LoginScreen: FC = () => {
  return (
    <SafeAreaView style={styles.all}>
        <Formik
          initialValues={{ mobilNomre: '', sifre: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextComponent text="Daxil Olun" />
              <Input
                onChangeText={handleChange('mobilNomre')}
                value={values.mobilNomre}
                placeholder="+994"
                label="Mobil nömrə"
                type="phone-pad"
                onBlur={handleBlur('mobilNomre')}
              />
              <Input
                onChangeText={handleChange('sifre')}
                value={values.sifre}
                placeholder="Şifrə daxil edin"
                label="Şifrə"
                onBlur={handleBlur('mobilNomre')}
                iconShow={true}
              />
              <View style={styles.endTextDiv}>
                <Text style={styles.endText}>Şifrəni unutmusunuz ?</Text>
              </View>
              <CustomButton onPress={handleSubmit} text="Davam et" title="Submit" disabled={!(values.mobilNomre && values.sifre)}/>
            </View>
          )}
        </Formik>
   

      <EndTextComponent text="Hesabınız yoxdur?" diffText="Qeydiyyatdan keçin" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 40,
  },
  endTextDiv: {
    margin: 20,
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
