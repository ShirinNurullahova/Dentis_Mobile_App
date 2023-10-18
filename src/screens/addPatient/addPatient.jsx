import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import Input from '../../components/Input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../components/Button/Button';
import DropDownPicker from 'react-native-dropdown-picker';

const addPatient = Yup.object().shape({
  name: Yup.string().min(
    4,
    ({ min }) => `Name content has to be contain at least ${min} characters`
  ),
  number: Yup.string()
    .min(7, ({ min }) => `Number content has to be contain at least ${min} characters`)
    .required('Number required'),
  doctorName: Yup.string().required('Choose a doctor'),
});

const AddPatient = () => {
  const [collapse, setCollapse] = useState(false);
  const [currentValue, setCurrentValue] = useState('');

  const doctors = [
    { label: 'As', value: 'as' },
    { label: 'Artur', value: 'artur' },
    { label: 'Nick', value: 'nick' },
    { label: 'Tural', value: 'tural' },
    { label: 'John', value: 'John' },
    { label: 'Tony', value: 'tony' },
    { label: 'James', value: 'james' },
    { label: 'John', value: 'John' },
    { label: 'John', value: 'John' },
    { label: 'John', value: 'John' },
  ];

  return (
    <View>
      <View style={styles.textOfPatient}>
        <Text style={styles.titleOfPatient}>Müştəri daxil et</Text>
      </View>
      <View style={styles.paddingHorizontal}>
        <Formik
          initialValues={{ name: '', number: '', doctorName: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={addPatient}
        >
          {({
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            dirty,
          }) => (
            <View>
              <View style={styles.inputs}>
                <Input
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                  placeholder="Ad və soyad daxil edin"
                  label="Ad və soyad"
                  type="text"
                />
                {values.name && errors.name && (
                  <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }}>{errors.name}</Text>
                )}
              </View>
              <View>
                <Input
                  onChangeText={handleChange('number')}
                  onBlur={handleBlur('number')}
                  value={values.number}
                  placeholder="+994"
                  label="Mobil nömrə"
                  type="phone-pad"
                />
                {values.number && errors.number && (
                  <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }}>{errors.number}</Text>
                )}
              </View>
              <View style={styles.addDoctor}>
                <Text style={styles.doctorText}>Add Doctor</Text>
              </View>
              <View style={styles.dropDown}>
                <DropDownPicker
                  style={styles.dropDownn}
                  items={doctors}
                  open={collapse}
                  setOpen={() => setCollapse(!collapse)}
                  value={values.doctorName}
                  onSelectItem={(val) => {
                    setFieldValue('doctorName', val.value);
                  }}
                  placeholder="Həkimi seç"
                  placeholderStyle={styles.placeholderStyle}
                  showTickIcon={false}
                  labelStyle={styles.labelStyles}
                  arrowIconStyle={styles.iconDropDown}
                  closeAfterSelecting={true}
                  listParentContainerStyle={{
                    backgroundColor: '#F8F9F9',
                  }}
                  listItemLabelStyle={{ color: '#B4B6B8' }}
                />
                {values.doctorName && errors.doctorName && (
                  <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }}>
                    {errors.doctorName}
                  </Text>
                )}
              </View>

              <View style={styles.button}>
                <CustomButton
                  onPress={handleSubmit}
                  text="Müştəri daxil et"
                  title="Submit"
                  type="submit"
                  disabled={isValid && dirty}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default AddPatient;

const styles = StyleSheet.create({
  textOfPatient: {
    paddingTop: 32,
  },
  titleOfPatient: {
    textAlign: 'center',
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    color: globalStyles.colors.black,
    fontSize: globalStyles.fontStyle.largeFontSize,
    color: globalStyles.colors.black,
  },
  paddingHorizontal: {
    paddingHorizontal: 16,
  },
  addDoctor: { marginTop: 20, marginBottom: 4 },
  button: {
    marginTop: 40,
  },
  dropDown: {
    borderRadius: 12,
  },
  dropDownn: {
    color: globalStyles.colors.inputBckgColor,
    borderWidth: 1,
  },
  dropDownBottomBorder: {
    color: globalStyles.colors.inputBckgColor,
    borderColor: globalStyles.colors.green,
    borderWidth: 1,
  },
  labelStyles: {
    color: globalStyles.colors.disableColor,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontStyle: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: 20,
  },
  placeholderStyle: {
    color: globalStyles.colors.disableColor,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontStyle: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: 20,
  },
  // iconDropDown: {
  //   fill: 'red',
  //   color:"red",
  //   backgroundColor:"red"
  // },
  doctorText: {
    marginBottom: 6,
    color: globalStyles.colors.disableColor,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontStyle: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,
  },
});
