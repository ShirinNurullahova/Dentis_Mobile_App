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
import { globalStyles } from '../../constants/globalStyles';
import ImagePicker from '../../components/ImagePicker/ImagePicker';

const settingValidationSchema = Yup.object().shape({
  adSoyad: Yup.string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  mobilNomre: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
});

const Settings: FC = () => {
  const [month, setMonth] = useState();

  const dates = useMemo(() => {
    return generateDateDropdownValues(month);
  }, [month]);

  return (
    <SafeAreaView style={styles.setting}>
      <ImagePicker />
      <View>
        <Formik
          initialValues={{ adSoyad: '', mobilNomre: '', day: '', month: '', year: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={settingValidationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
            <View>
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
              <View style={styles.dist}>
                <CustomButton
                  onPress={handleSubmit}
                  text="Şifrəni yenilə"
                  title="Submit"
                  type="submit"
                  bckgColor={true}
                  disabled={false}
                />
              </View>
              <View style={styles.dist}>
                <CustomButton
                  onPress={handleSubmit}
                  text="Yadda saxla"
                  title="Submit"
                  type="submit"
                  disabled={!values.mobilNomre && !values.adSoyad ? !isValid : isValid}
                  bckgColor={false}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  setting: {
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 40,
  },
  dropdown: {
    gap: 10,
    flexDirection: 'row',
    width: 343,
  },
  dropdownComponent: {
    paddingTop: 20,
  },
  dist: {
    marginTop: 30,
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
export default Settings;
