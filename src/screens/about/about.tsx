import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { globalStyles } from '../../constants/globalStyles';
import { aboutValidationSchema } from '../../utils/validation';
import { postData } from '../../hooks/CustomHooks';
interface FormData {
  title: string;
  description: string;
  aboutImage: string;
}
const initialDataForm: FormData = {
  title: '',
  description: '',
  aboutImage: '',
};
const onSubmitHandler = async (values: FormData, resetForm: any) => {
  let dataForm: FormData = { ...initialDataForm };
  dataForm.title = values.title;
  dataForm.description = values.description;
  dataForm.aboutImage = values.aboutImage;
  console.log(values);

  try {
    const response = await postData('api/v1/about', dataForm);
    console.log(response);
    
    if (response.status === 'success') {
      resetForm();
    }
  } catch (error) {}
};
const About = () => {
  const [file, setFile] = useState('');

  const onChooseImg = async (setFieldValue: any) => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
    });

    if (result?.assets && result?.assets[0]?.uri) {
      setFile(result?.assets[0]?.uri);
      setFieldValue('aboutImage', result?.assets[0]?.uri);
    }
  };

  return (
    <ScrollView>
      <View style={styles.content}>
        <Formik
          initialValues={{ title: '', description: '', aboutImage: '' }}
          onSubmit={(values, { resetForm }) => {
            onSubmitHandler(values, resetForm);
          }}
          validationSchema={aboutValidationSchema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            dirty,
            setFieldValue,
          }) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  onChooseImg(setFieldValue);
                }}
                style={styles.imageContent}
              >
                <View style={styles.centerContent}>
                  {file?.length ? (
                    <ImageBackground source={{ uri: file }} style={styles.selectedImageContent} />
                  ) : (
                    <>
                      <Image source={require('../../assets/images/plusIcon.png')} />
                      <Text style={styles.centerText}>Şəkil əlavə edin</Text>
                    </>
                  )}
                </View>
              </TouchableOpacity>
              {file?.length > 0 && (
                <View style={styles.rowButton}>
                  <TouchableOpacity>
                    <View style={styles.buttonNew}>
                      <Text style={styles.textNewButton}>Şəkil əlavə et</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      onChooseImg(setFieldValue);
                    }}
                  >
                    <View style={styles.buttonNew}>
                      <Text style={styles.textNewButton}>Şəkli dəyişdir</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              <View>
                <View style={styles.inputs}>
                  <Input
                    onChangeText={handleChange('title')}
                    onBlur={handleBlur('title')}
                    value={values.title}
                    placeholder="Basliq daxil edin"
                    label="Basliq"
                    type="text"
                  />
                  {values.title && errors.title && (
                    <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }}>
                      {errors.title}
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
                    onChangeText={handleChange('description')}
                    onBlur={handleBlur('description')}
                  />
                  {values.description && errors.description && (
                    <Text style={{ fontSize: 10, color: 'red', marginTop: 10 }}>
                      {errors.description}
                    </Text>
                  )}
                </View>
                {/* {console.log(errors)} */}
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
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 38,
    paddingHorizontal: 16,
  },
  selectedImageContent: {
    overflow: 'hidden',
    width: 343,
    height: 200,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContent: {
    width: 343,
    height: 200,
    backgroundColor: '#F8F9F9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    alignItems: 'center',
    gap: 12,
  },
  centerText: {
    fontSize: 16,
    color: '#7E7F83',
    fontWeight: '500',
    lineHeight: 24,
    fontStyle: 'normal',
  },
  inputs: {
    marginTop: 24,
  },
  titleTextArea: {
    color: '#7E7F83',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
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
    width: 343,
  },
  buttonNew: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 12,
    borderColor: '#12CC89',
    width: 167,
    borderWidth: 1,
    alignItems: 'center',
  },
  textNewButton: {
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    color: '#12CC89',
  },
  rowButton: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 20,
  },
  button: {
    marginTop: globalStyles.fontStyle.marginTop,
  },
});
