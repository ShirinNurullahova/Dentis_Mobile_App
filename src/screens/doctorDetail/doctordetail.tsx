import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import { getData } from '../../hooks/CustomHooks';

const DoctorDetail = () => {
  const [aboutData, setAboutData] = useState<any>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await getData('api/v1/about/c354cc30-ec5c-42a3-85ea-82898fdc793b');
  //       if (response && response.aboutImage) {
  //         setAboutData(response);
  //         setImageUri(
  //           response.aboutImage
  //         );
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getData('api/v1/about');
        const responseLast = response.pop();

        if (responseLast && responseLast.aboutImage) {
          setAboutData(responseLast);
          setImageUri(responseLast.aboutImage);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.wrapperDetail}>
      {imageUri && (
        <View>
          <View>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </View>
          {aboutData && (
            <View style={styles.contentText}>
              <Text style={styles.titleText}>{aboutData.title}</Text>
              <Text style={styles.infoText}>{aboutData.description}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default DoctorDetail;

const styles = StyleSheet.create({
  wrapperDetail: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  image: {
    minWidth: '100%',
    width: 343,
    height: 200,
    borderRadius: 20,
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
