import React, { useEffect } from 'react';
import { View,SafeAreaView, StyleSheet } from 'react-native';
import OTPInput from '../../components/OTP/OTPInput';
import CustomButton from '../../components/Button/Button';
import TextComponent from '../../components/Text/Text';
import { Formik} from 'formik';
import { postData } from '../../hooks/CustomHooks';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface FormData {
  twoFactorCode: number | null;
}
const initialDataForm: FormData = {
  twoFactorCode: null,
};

const OTPScreen = () => {
 
  const navigation = useNavigation()

  const handleTextChange = (e: any, setFieldValue: any) => {
    setFieldValue('twoFactorCode', e);
  };

  const onSubmitHandler = async (values: FormData, resetForm: any) => {
    let dataForm: FormData = { ...initialDataForm }; // Use spread operator to clone initialDataForm
    dataForm.twoFactorCode = values.twoFactorCode;
    try {
      const response = await postData('auth/twoFactor', dataForm);
      if (response.statusCode === 'success') {
        await AsyncStorage.setItem('accessToken', response.accessToken);
        await AsyncStorage.setItem('refreshToken', response.refreshToken);
        navigation.navigate("UserHomePage");
      }
    } catch (error) {
      console.log('salam',error);
    }
  };
  return (
    <SafeAreaView style={styles.otpScreen}>
      <Formik
        initialValues={{
          twoFactorCode: '',
        }}
        onSubmit={(values, { resetForm }) => {
          onSubmitHandler(values, resetForm);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          setFieldValue,
          isValid,
          dirty,
        }) => (
          <View>
            <TextComponent text="Göndərilən şifrəni daxil edin" fontSize={true} />
            <OTPInput
              autoFocus
              handleTextChange={(e) => handleTextChange(e, setFieldValue)}
              inputCount={4}
            />
            <CustomButton
              onPress={handleSubmit}
              text="Davam et"
              title="Submit"
              type="submit"
              disabled={dirty && isValid}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  otpScreen: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 40,
  },
});
export default OTPScreen;
