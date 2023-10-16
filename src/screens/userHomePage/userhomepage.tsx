import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { data } from '../../data/userData';
import { globalStyles } from '../../constants/globalStyles';

const UserHomePage = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.image}>
        <Image source={require('../../assets/images/doctor1.png')} />
      </View>
      {data?.map((data) => {
        return (
          <TouchableOpacity key={data.id}>
            <View key={data.id} style={styles.line}>
              <Image source={data.image} />
              <View style={styles.textContainer}>
                <Text style={styles.texts}>{data.text}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default UserHomePage;

const styles = StyleSheet.create({
  wrapper: {
    // gap: 12,
  },
  image: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  textContainer: {
    width: '100%',
    paddingRight: 16,
  },
  line: { flexDirection: 'row', marginTop: 28, gap: 12, paddingHorizontal: 16 },
  texts: {
    textAlignVertical: 'center',
    width: '90%',
    borderBottomWidth: 1,
    paddingBottom: 16,
    paddingTop: 8,
    borderBottomColor: globalStyles.colors.borderText,
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.userHomePageFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
  },
});
