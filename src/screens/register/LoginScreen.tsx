import React, { FC, useEffect } from 'react';
import Screen from '../../components/Screen/Screen';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { VStack } from '../../components/features/VStack/VStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import EndTextComponent from '../../components/EndText/EndText';
import {Formik } from 'formik';
import * as Yup from 'yup';
import { globalStyles } from '../../constants/globalStyles';

const loginValidationSchema = Yup.object().shape({
  mobilNomre: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
  sifre: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const LoginScreen: FC = () => {
  return (
    <SafeAreaView style={styles.all}>
      <Formik
        initialValues={{ mobilNomre: '', sifre: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={loginValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
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
            {values.mobilNomre && errors.mobilNomre && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.mobilNomre}</Text>
            )}
            <Input
              onChangeText={handleChange('sifre')}
              value={values.sifre}
              placeholder="Şifrə daxil edin"
              label="Şifrə"
              onBlur={handleBlur('mobilNomre')}
              iconShow={true}
            />
            { values.sifre && errors.sifre && <Text style={{ fontSize: 10, color: 'red' }}>{errors.sifre}</Text>}
            <View style={styles.endTextDiv}>
              <Text style={styles.endText}>Şifrəni unutmusunuz ?</Text>
            </View>
            <CustomButton
              onPress={handleSubmit}
              text="Davam et"
              title="Submit"
              type='submit'
              disabled={(!values.mobilNomre && !values.sifre) ? !isValid :  isValid}
            />
          </View>
        )}
      </Formik>

      <EndTextComponent text="Hesabınız yoxdur?" diffText="Qeydiyyatdan keçin" size={false}/>
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
    color: globalStyles.colors.inputEndTextColor,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    lineHeight: globalStyles.fontStyle.endTextLineHeight /* 142.857% */,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    fontFamily: globalStyles.fontStyle.primary
  },
});

export default LoginScreen;
