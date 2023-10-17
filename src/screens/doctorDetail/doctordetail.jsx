import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import { doctorDetail } from '../../data/doctorDetail';

const DoctorDetail = () => {
  return (
    <View style={styles.wrapperDetail}>
      {doctorDetail?.map((data) => {
        return (
          <View key={data.id}>
            <View>
              <Image source={data.image} />
            </View>
            <View style={styles.contentText}>
              <Text style={styles.titleText}>{data.title}</Text>
              <Text style={styles.infoText}>{data.text}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default DoctorDetail;

const styles = StyleSheet.create({
  wrapperDetail: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  contentText: {
    marginTop: 20,
    gap: 13,
  },
  titleText: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.userHomePageFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
  },
  infoText: {
    color: globalStyles.colors.gray,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.endTextFontSize,
  },
});
