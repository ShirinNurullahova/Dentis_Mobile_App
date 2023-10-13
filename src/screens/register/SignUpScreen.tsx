import React, { FC, useEffect, useState, useMemo } from 'react';
import { TextInput, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/DropDown/DropDown';
import { generateDateDropdownValues } from '../../utils/generateDateValues';
import CustomButton from '../../components/Button/Button';
import EndTextComponent from '../../components/EndText/EndText';
import { Form, Formik } from 'formik';

const SignUpScreen: FC = () => {
  const [month, setMonth] = useState(0);

  const dates = useMemo(() => {
    return generateDateDropdownValues(month);
  }, [month]);

  return (
    <SafeAreaView style={styles.allSignup}>
      <View>

        <Formik
          initialValues={{ adSoyad: '', mobilNomre: '', sifre: '',day:"",month:'',year:''}}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
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
              <Input
                onChangeText={handleChange('mobilNomre')}
                value={values.mobilNomre}
                placeholder="+994"
                label="Mobil nömrə"
                type="phone-pad"
                onBlur={handleBlur('mobilNomre')}
              />

              <View style={styles.dropdown}>
                <Dropdown onPress={handleChange('day')} title="Day" values={dates.days}/>
                <Dropdown
                  type="month"
                  setMonth={setMonth}
                  onPress={handleChange("month")}
                  title="Month"
                  values={dates.months}
                />
                <Dropdown onPress={handleChange("year")} title="Year" values={dates.years} />
              </View>

              <Input
                
                onChangeText={handleChange('sifre')}
                value={values.sifre}
                placeholder="Şifrə daxil edin"
                label="Şifrə"
                onBlur={handleBlur('sifre')}
                iconShow
              />
              <EndTextComponent
                text={'By singing up I accept the '}
                diffText="terms of use and the data privacy policy"
              />

              <CustomButton
                onPress={handleSubmit}
                text="Davam et"
                title="Submit"
                disabled={!(values.mobilNomre && values.sifre)}
              />
            </View>
          )}
        </Formik>
      </View>

      <EndTextComponent text={'Hesabınız var?'} diffText="Daxil olun" />
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
  },
});
export default SignUpScreen;
