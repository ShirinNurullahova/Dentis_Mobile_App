import React, { FC, useEffect, useState, useMemo } from 'react';
import { TextInput, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/DropDown/DropDown';
import { generateDateDropdownValues } from '../../utils/generateDateValues';
import CustomButton from '../../components/Button/Button';
import EndTextComponent from '../../components/EndText/EndText';
import { Formik, FormikHelpers } from 'formik';
import { globalStyles } from '../../constants/globalStyles';
import { usePasswordToggle } from '../../utils/showPassword';
import { signUpValidationSchema } from '../../utils/validation';
import { postData } from '../../hooks/CustomHooks';
import { useNavigation } from '@react-navigation/native';

interface FormData {
  fullName: string;
  phone: string;
  dateOfBirth: string;
  password: string;
  dataPrivacy?: boolean;
}
const initialDataForm: FormData = {
  fullName: '',
  phone: '',
  dateOfBirth: '',
  password: '',
  dataPrivacy: false,
};
const SignUpScreen: FC = () => {
  const navigation = useNavigation()
  const [month, setMonth] = useState();
  const dates = useMemo(() => {
    return generateDateDropdownValues(month);
  }, [month]);

  const [showPassword, togglePassword] = usePasswordToggle();

  const onSubmitHandler = async (values: FormData, resetForm: any) => {
    let dataForm: FormData = { ...initialDataForm }; // Use spread operator to clone initialDataForm
    dataForm.fullName = values.fullName;
    dataForm.phone = values.phone;
    dataForm.dateOfBirth = values.dateOfBirth;
    dataForm.password = values.password;
    dataForm.dataPrivacy = values.dataPrivacy;

  
    
    try {
      const response = await postData('auth/signup', dataForm);
      if (response.statusCode === 'success') {
        navigation.navigate("LoginScreen");
      }
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleDateAndTime = (index: any, values: any, event: string, setFieldValue: any) => {
    if (index !== 2 && +event < 10) {
      event = '0' + event;
    }
    let newArray = values.dateOfBirth.split('-');
    newArray[index] = event;
    setFieldValue('dateOfBirth', newArray.join('-'));
  };
  return (
    <ScrollView>
      <SafeAreaView style={styles.allSignup}>
        <View>
          <Formik
            initialValues={{
              fullName: '',
              phone: '',
              password: '',
              dateOfBirth: '01-01-2023',
              dataPrivacy: false,
            }}
            onSubmit={(values, { resetForm }) => {
              onSubmitHandler(values, resetForm);
            }}
            validationSchema={signUpValidationSchema}
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
                <TextComponent text="Hesab yaradın" fontSize={false} />

                <Input
                  onChangeText={handleChange('fullName')}
                  value={values.fullName}
                  placeholder="Ad və soyadınızı daxil edin"
                  label="Ad və Soyad"
                  type="text"
                  onBlur={handleBlur('fullName')}
                />
                {values.fullName && errors.fullName && (
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.fullName}</Text>
                )}
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
                <View style={styles.dropdownComponent}>
                  <Text style={styles.text}>Doğum tarixi</Text>

                  <View style={styles.dropdown}>
                    <Dropdown
                      onPress={(event) => {
                        handleDateAndTime(0, values, event, setFieldValue);
                      }}
                      title="Day"
                      values={dates.days}
                    />
                    <Dropdown
                      type="month"
                      setMonth={setMonth}
                      onPress={(event) => {
                        handleDateAndTime(1, values, event, setFieldValue);
                      }}
                      title="Month"
                      values={dates.months}
                    />
                    <Dropdown
                      onPress={(event) => {
                        handleDateAndTime(2, values, event, setFieldValue);
                      }}
                      title="Year"
                      values={dates.years}
                    />
                  </View>
                </View>

                <Input
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="Şifrə daxil edin"
                  label="Şifrə"
                  onBlur={handleBlur('password')}
                  iconShow
                  secureTextEntry={!showPassword}
                  handleShowPassword={togglePassword}
                />
                {values.password && errors.password && (
                  <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                )}
                <EndTextComponent
                  setDataPrivacyState={(value) => {
                    setFieldValue('dataPrivacy', value);
                  }}
                  size={true}
                  text={'By singing up I accept the '}
                  diffText="terms of use and the data privacy policy"
                />
                {errors.dataPrivacy && (
                  <Text
                    style={{ fontSize: 12, marginBottom: 10, color: 'red', alignSelf: 'center' }}
                  >
                    {errors.dataPrivacy}
                  </Text>
                )}
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
        </View>

        {/* <EndTextComponent text={'Hesabınız var?'} diffText="Daxil olun" size={false} /> */}
      </SafeAreaView>
    </ScrollView>
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
    width: '100%',
    justifyContent: 'space-between',
  },
  dropdownComponent: {
    paddingTop: 20,
  },
  text: {
    color: globalStyles.colors.gray,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    marginBottom: 10,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.inputLineHeight,
  },
});
export default SignUpScreen;
