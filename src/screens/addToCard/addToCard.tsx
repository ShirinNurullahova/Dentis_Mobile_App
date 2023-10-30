import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../../components/Button/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { globalStyles } from '../../constants/globalStyles';
import { aboutData } from '../../utils/validation';


const AddToCard = () => {
  return (
    <View>
      <View style={styles.textContent}>
        <Text style={styles.titleContent}>Kartınızı əlavə edin</Text>
      </View>
      <Formik
        initialValues={{ cardNumber: '', date: '', ccv: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={aboutData}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
          <View style={styles.inputs}>
            <View style={styles.firstInput}>
              <View style={styles.iconCenter}>
                <Image source={require('../../assets/images/cardImg.png')} style={styles.image} />
              </View>
              <View>
                <TextInput
                  placeholder="Kartın nömrəsi"
                  style={styles.input}
                  onBlur={handleBlur('cardNumber')}
                  onChangeText={handleChange('cardNumber')}
                />
              </View>
            </View>
            {values.cardNumber && errors.cardNumber && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.cardNumber}</Text>
            )}
            <View style={styles.bottomInputs}>
              <View style={styles.flex}>
                <View style={styles.iconCenter}>
                  <Image
                    source={require('../../assets/images/calendar.png')}
                    style={styles.image}
                  />
                </View>
                <TextInput
                  placeholder="MM/YY"
                  style={styles.inputB}
                  onBlur={handleBlur('date')}
                  onChangeText={handleChange('date')}
                />
              </View>

              <View style={styles.flex}>
                <View style={styles.iconCenter}>
                  <Image source={require('../../assets/images/lock.png')} style={styles.image} />
                </View>
                <TextInput
                  placeholder="CVV"
                  style={styles.inputB}
                  onBlur={handleBlur('ccv')}
                  onChangeText={handleChange('ccv')}
                />
              </View>
            </View>
            {values.date && errors.date && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.date}</Text>
            )}
            {values.ccv && errors.ccv && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.ccv}</Text>
            )}
            <TouchableOpacity style={styles.button}>
              <CustomButton
                onPress={handleSubmit}
                text="Yadda saxla"
                title="Submit"
                type="submit"
                disabled={isValid}
              />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddToCard;

const styles = StyleSheet.create({
  textContent: {
    paddingHorizontal: 30,
    marginTop: 36,
  },
  titleContent: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 40,
    color: '#31353D',
  },
  inputs: {
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  image: {
    width: 20,
    height: 20,
  },
  iconCenter: {
    paddingTop: 20,
    paddingLeft: 14,
    alignItems: 'center',
  },
  firstInput: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#F8F9F9',
    borderRadius: 12,
    gap: 8,
  },
  input: {
    width: '100%',
    paddingHorizontal: 14,
    paddingVertical: 16,
    color: '#B4B6B8',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    fontStyle: 'normal',
  },
  bottomInputs: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 20,
  },
  inputB: {
    width: 135,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  flex: {
    flexDirection: 'row',
    backgroundColor: '#F8F9F9',
    borderRadius: 12,
  },
  button: {
    marginTop: globalStyles.fontStyle.marginTop,
  },
});
