import React, { FC} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import { Formik } from 'formik';
import { resetValidationSchema } from '../../utils/validation';
import { usePasswordToggle } from '../../utils/showPassword';
import { patchData } from '../../hooks/CustomHooks';

interface FormData {
  oldPassword: string;
  newPassword: string;
}
const initialDataForm: FormData = {
  oldPassword: '',
  newPassword: '',
};


const ResetPasswordScreen: FC = () => {
  const [showPassword, togglePassword] = usePasswordToggle();
  const onSubmitHandler = async (values: FormData, resetForm:any) => {
    let dataForm: FormData = { ...initialDataForm };
    dataForm.oldPassword = values.oldPassword;
    dataForm.newPassword = values.newPassword;
    try {
      const response = await patchData('auth/login', dataForm);
      if (response.statusCode === 'success') { 
        resetForm()
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <SafeAreaView style={styles.all}>
      <Formik
        initialValues={{ oldPassword: '', newPassword: '' }}
        onSubmit={(values, {resetForm}) => {
          onSubmitHandler(values, resetForm);
        }}
        validationSchema={resetValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid, dirty }) => (
          <View>
            <TextComponent text="Yeni şifrə təyin et" fontSize={false} />
            <Input
              onChangeText={handleChange('oldPassword')}
              value={values.oldPassword}
              placeholder="şifrə daxil edin"
              label="Köhnə şifrə"
              type="text"
              onBlur={handleBlur('oldPassword')}
              iconShow={true}
              secureTextEntry={!showPassword} 
              handleShowPassword={togglePassword}
            />
            {values.oldPassword && errors.oldPassword && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.oldPassword}</Text>
            )}
            <Input
              onChangeText={handleChange('newPassword')}
              value={values.newPassword}
              placeholder="şifrə daxil edin"
              label="Yeni şifrəni təkrar et"
              onBlur={handleBlur('newPassword')}
              iconShow={true}
              secureTextEntry={!showPassword} 
              handleShowPassword={togglePassword}
            />
            {values.newPassword && errors.newPassword && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.newPassword}</Text>
            )}
            <View style={styles.bottom}>
              <CustomButton
                onPress={handleSubmit}
                text="Davam et"
                title="Submit"
                type="submit"
                disabled={isValid && dirty}
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
