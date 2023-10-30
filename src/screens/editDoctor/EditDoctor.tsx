import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import ImagePicker from '../../components/ImagePicker/ImagePicker';
import { globalStyles } from '../../constants/globalStyles';
import Input from '../../components/Input/Input';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomButton from '../../components/Button/Button';
import CameraNew from '../../components/Camera/Camera';
import { editDoctorSchema } from '../../utils/validation';


const EditDoctor = ({}) => {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <View style={{ position: 'relative', flex: 1 }}>
      {showCamera ? (
        <CameraNew setShowCamera={setShowCamera} />
      ) : (
        <>
          <View style={styles.editImage}>
            <ImagePicker setShowCamera={setShowCamera} />
          </View>
          <View>
            <Formik
              initialValues={{ name: '', ixtisas: '', textArea: '' }}
              onSubmit={(values) => console.log(values)}
              validationSchema={editDoctorSchema}
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
                <View style={styles.formik}>
                  <View style={{ zIndex: -1 }}>
                    <Input
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                      placeholder="Ad və soyad daxil edin"
                      label="Ad Soyad"
                      type="text"
                    />
                    {values.name && errors.name && (
                      <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }}>
                        {errors.name}
                      </Text>
                    )}
                  </View>
                  <View>
                    <Input
                      onChangeText={handleChange('ixtisas')}
                      onBlur={handleBlur('ixtisas')}
                      value={values.ixtisas}
                      placeholder="Ixtisas"
                      label="Ixtisas"
                      type="text"
                    />
                    {values.ixtisas && errors.ixtisas && (
                      <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }}>
                        {errors.ixtisas}
                      </Text>
                    )}
                  </View>
                  <View>
                    <Text style={styles.titleTextArea}>Melumat</Text>
                    <TextInput
                      multiline={true}
                      numberOfLines={10}
                      style={styles.textArea}
                      placeholder="Məlumat daxil edin"
                      onChangeText={handleChange('textArea')}
                      onBlur={handleBlur('textArea')}
                    />
                    {values.textArea && errors.textArea && (
                      <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }}>
                        {errors.textArea}
                      </Text>
                    )}
                  </View>
                  <View style={styles.button}>
                    <CustomButton
                      onPress={handleSubmit}
                      text="Yadda saxla"
                      title="Submit"
                      type="submit"
                      disabled={isValid && dirty}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </>
      )}
    </View>
  );
};

export default EditDoctor;

const styles = StyleSheet.create({
  editImage: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  formik: {
    paddingHorizontal: 16,
  },
  button: {
    marginTop: 24,
  },
  textArea: {
    height: 200,
    textAlignVertical: 'top',
    backgroundColor: '#F8F9F9',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    color: '#7E7F83',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 4,
  },
  titleTextArea: {
    color: '#7E7F83',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 24,
  },
  modal: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    position: 'absolute',
    top: 0,
    left: 100,
    width: 250,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#EFEFF1',
    borderRadius: 16,
    gap: 20,
    zIndex: +9,
  },
  lineModal: {
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9F9',
    paddingBottom: 10,
  },
});
