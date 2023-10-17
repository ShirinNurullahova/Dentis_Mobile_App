import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import CustomButton from '../../components/Button/Button';

const DoctorPersonalPage = () => {
  const route = useRoute();
  const [data, setData] = useState(route?.params?.doctor);
  // console.log( route?.params?.doctor)
  console.log(data);
  function handleSubmit() {
    console.log('salam');
  }

  return (
    <View>
      <View style={styles.contentHead}>
        <View style={styles.centerImage}>
          <Image source={data.image} />
        </View>
        <View>
          <Text style={styles.topText}>{data.name}</Text>
          <Text style={styles.bottomText}>{data.profession}</Text>
        </View>
      </View>

      <View style={styles.buttonHolder}>
        <CustomButton
          onPress={handleSubmit}
          text="Müştəri daxil et"
          title="Submit"
          type="submit"
          disabled={true}
        />
      </View>
      <View style={styles.aboutDoctor}>
        <Text style={styles.titleDoctor}>Həkim haqqında:</Text>
        <Text style={styles.doctorInfo}>{data.info}</Text>
      </View>
    </View>
  );
};

export default DoctorPersonalPage;

const styles = StyleSheet.create({
  contentHead: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFF1',
  },
  bottomText: {
    marginTop: 8,
    color: globalStyles.colors.gray,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
    textAlign: 'center',
  },
  topText: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.userHomePageFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
    textAlign: 'center',
  },
  centerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHolder: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  aboutDoctor: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  doctorInfo: {
    color: globalStyles.colors.gray,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.dropDownFontSize,
    marginTop: 13,
  },
  titleDoctor: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.userHomePageFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
  },
});
