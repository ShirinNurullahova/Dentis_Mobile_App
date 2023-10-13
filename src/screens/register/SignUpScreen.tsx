import React, { FC, useEffect, useState, useMemo } from 'react';
import { TextInput, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/DropDown/DropDown';
import { generateDateDropdownValues } from '../../utils/generateDateValues';
import CustomButton from '../../components/Button/Button';
import EndTextComponent from '../../components/EndText/EndText';
import { Formik } from 'formik';
import * as Yup from 'yup';

const signUpValidationSchema = Yup.object().shape({
  adSoyad: Yup.string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  mobilNomre: Yup.string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),

  sifre: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const SignUpScreen: FC = () => {
  const [month, setMonth] = useState();

  const dates = useMemo(() => {
    return generateDateDropdownValues(month);
  }, [month]);

  return (
    <SafeAreaView style={styles.allSignup}>
      <View>
        <Formik
          initialValues={{ adSoyad: '', mobilNomre: '', sifre: '', day: '', month: '', year: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={signUpValidationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
            <View>
              <TextComponent text="Hesab yaradın" />
              <Input
                onChangeText={handleChange('adSoyad')}
                value={values.adSoyad}
                placeholder="Ad və soyadınızı daxil edin"
                label="Ad və Soyad"
                type="text"
                onBlur={handleBlur('adSoyad')}
              />
              {values.adSoyad && errors.adSoyad && (
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.adSoyad}</Text>
              )}
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
              <View style={styles.dropdownComponent}>
                <Text style={styles.text}>Doğum tarixi</Text>
                <View style={styles.dropdown}>
                  <Dropdown onPress={handleChange('day')} title="Day" values={dates.days} />
                  <Dropdown
                    type="month"
                    setMonth={setMonth}
                    onPress={handleChange('month')}
                    title="Month"
                    values={dates.months}
                  />
                  <Dropdown onPress={handleChange('year')} title="Year" values={dates.years} />
                </View>
              </View>

              <Input
                onChangeText={handleChange('sifre')}
                value={values.sifre}
                placeholder="Şifrə daxil edin"
                label="Şifrə"
                onBlur={handleBlur('sifre')}
                iconShow
              />
              {values.sifre && errors.sifre && (
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.sifre}</Text>
              )}

              <EndTextComponent
                size={true}
                text={'By singing up I accept the '}
                diffText="terms of use and the data privacy policy"
              />

              <CustomButton
                onPress={handleSubmit}
                text="Davam et"
                title="Submit"
                type="submit"
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
      </View>

      <EndTextComponent text={'Hesabınız var?'} diffText="Daxil olun" size={false} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  allSignup: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 40,
  },
  dropdown: {
    gap: 10,
    flexDirection: 'row',
    width:343,
  },
  dropdownComponent:{
     paddingTop:20,
  },
  text: {
    color: '#9EA0A3',
    fontSize: 13,
    marginBottom: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18 /* 138.462% */,
  },
});
export default SignUpScreen;
