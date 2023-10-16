import React, { FC, useEffect } from 'react';
import Screen from '../../components/Screen/Screen';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { VStack } from '../../components/features/VStack/VStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import { Formik } from 'formik';
import * as Yup from 'yup';

const resetValidationSchema = Yup.object().shape({
  sifre: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  yenisifre: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

const ResetPasswordScreen: FC = () => {
  return (
    <SafeAreaView style={styles.all}>
      <Formik
        initialValues={{ sifre: '', yenisifre: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={resetValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
          <View>
            <TextComponent text="Yeni şifrə təyin et" fontSize={false} />
            <Input
              onChangeText={handleChange('sifre')}
              value={values.sifre}
              placeholder="şifrə daxil edin"
              label="Yeni şifrə"
              type="text"
              onBlur={handleBlur('sifre')}
              iconShow={true}
            />
            {values.sifre && errors.sifre && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.sifre}</Text>
            )}
            <Input
              onChangeText={handleChange('yenisifre')}
              value={values.yenisifre}
              placeholder="şifrə daxil edin"
              label="Yeni şifrəni təkrar et"
              onBlur={handleBlur('yenisifre')}
              iconShow={true}
            />
            {values.yenisifre && errors.yenisifre && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.yenisifre}</Text>
            )}
            <View style={styles.bottom}>
              <CustomButton
                onPress={handleSubmit}
                text="Davam et"
                title="Submit"
                type="submit"
                disabled={!values.sifre && !values.yenisifre ? !isValid : isValid}
              />
            </View>
          </View>
        )}
      </Formik>
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
  bottom:{
    marginTop:60
  }
});

export default ResetPasswordScreen;