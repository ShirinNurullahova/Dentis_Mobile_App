import React, { FC, useEffect } from 'react';
import Screen from '../../components/Screen/Screen';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { VStack } from '../../components/features/VStack/VStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import { Formik } from 'formik';
import { resetValidationSchema } from '../../utils/validation';
import { usePasswordToggle } from '../../utils/showPassword';



const ResetPasswordScreen: FC = () => {
  const [showPassword, togglePassword] = usePasswordToggle();

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
              secureTextEntry={!showPassword} 
              handleShowPassword={togglePassword}
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
              secureTextEntry={!showPassword} 
              handleShowPassword={togglePassword}
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
    marginTop:40
  }
});

export default ResetPasswordScreen;
