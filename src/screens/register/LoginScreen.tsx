import { Formik } from 'formik';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { postData } from '../../hooks/CustomHooks';
import CustomButton from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import TextComponent from '../../components/Text/Text';
import { globalStyles } from '../../constants/globalStyles';
import { usePasswordToggle } from '../../utils/showPassword';
import { loginValidationSchema } from '../../utils/validation';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setLoginBody } from '../../store/reducers/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FormData {
  phone: number | string;
  password: string;
}
const initialDataForm: FormData = {
  phone: '',
  password: '',
};
const LoginScreen: FC = () => {
  const navigation = useNavigation()

  const [showPassword, togglePassword] = usePasswordToggle();
  const dispatch = useDispatch()

  const onSubmitHandler = async (values: FormData, resetForm:any) => {
    let dataForm: FormData = { ...initialDataForm }; // Use spread operator to clone initialDataForm
    dataForm.phone = values.phone;
    dataForm.password = values.password;
    try {
      dispatch(setLoginBody(values))
      const response = await postData('auth/login', dataForm);
      if (response.statusCode === 'success') { 
        await AsyncStorage.setItem('accessToken', response.accessToken);
        await AsyncStorage.setItem('refreshToken', response.refreshToken);
        navigation.navigate("OTPScreen");
      
        resetForm()
      }
    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <View style={styles.all}>
      <Formik
        initialValues={{ phone: '', password: '' }}
        onSubmit={(values, {resetForm}) => {
          onSubmitHandler(values, resetForm);
        }}
        validationSchema={loginValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, dirty }) => (
          <View>
            <TextComponent text="Daxil Olun" fontSize={false}/>
            <Input
              onChangeText={handleChange('phone')}
              value={values.phone}
              placeholder="+994"
              label="Mobil nömrə"
              type="phone-pad"
              onBlur={handleBlur('phone')}
            />
            {values.phone && errors.phone && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.phone}</Text>
            )}
            <Input
              onChangeText={handleChange('password') }
              value={values.password}
              placeholder="Şifrə daxil edin"
              label="Şifrə"
              onBlur={handleBlur('password')}
              iconShow={true}
              secureTextEntry={!showPassword} 
              handleShowPassword={togglePassword}
            />
            {values.password && errors.password && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
            )}
            <View style={styles.endTextDiv}>
              <Text style={styles.endText}>Şifrəni unutmusunuz ?</Text>
            </View>
            <CustomButton
              onPress={handleSubmit}
              text="Davam et"
              title="Submit"
              type="submit"
              disabled={isValid && dirty}
            />
          </View>
        )}
      </Formik>
      <Text style={styles.bottomView}>
          Hesabınız yoxdur? <Text style={[styles.difText]}>Qeydiyyatdan keçin</Text>
      </Text>
    </View>
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
    fontFamily: globalStyles.fontStyle.primary,
  },
  bottomView: {
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    fontSize: globalStyles.fontStyle.endTextFontSize,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    fontFamily: globalStyles.fontStyle.primary,
  },

  difText: {
    color: globalStyles.colors.green,
  },
});

export default LoginScreen;
