import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { doctorAccData } from '../../data/doctorAccount';
import { globalStyles } from '../../constants/globalStyles';
import ClientDetail from '../../components/clientDetail/ClientDetail';

const DoctorAccount = () => {
  const [showAllChildren, setShowAllChildren] = useState(false);
  return (
    <FlatList
      data={doctorAccData}
      renderItem={({ item }) => (
        <View>
          <View style={styles.topSide}>
            <View>
              <Image source={item.image} />
            </View>
            <View style={styles.textTop}>
              <Text style={styles.doctorName}>{item.doctorName}</Text>
              <Text style={styles.profession}>{item.profession}</Text>
            </View>
          </View>
          <View style={styles.titleUser}>
            <Text style={styles.clients}>Müştərilər ({item.children.length})</Text>
            <TouchableOpacity onPress={() => setShowAllChildren(true)}>
              <Text style={styles.all}>{item.all}</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={showAllChildren ? item.children : item.children.slice(0, 3)}
            renderItem={({ item: childItem }) => (
              <View>
                <ClientDetail
                  doctorName={childItem.clientName}
                  number={childItem.clientNumber}
                  image={childItem.clientImage}
                  showDate
                  {...childItem}
                />
              </View>
            )}
            keyExtractor={(childItem) => childItem.id.toString()}
          />
          <View style={styles.aboutContent}>
            <Text style={styles.titleAbout}>{item.titleAbout}</Text>
            <Text style={styles.about}>{item.about}</Text>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default DoctorAccount;

const styles = StyleSheet.create({
  topSide: {
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 12,
    gap: 16,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.colors.borderBottomColor,
  },
  textTop: {
    gap: 6,
  },

  clientAbout: {
    gap: 6,
  },
  doctorName: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.userHomePageFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
    textAlign: 'center',
  },

  clients: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.inputLineHeight,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    lineHeight: globalStyles.fontStyle.amountFontSize,
  },

  profession: {
    color: globalStyles.colors.gray,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.userHomePageFont,
    textAlign: 'center',
  },
  titleUser: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 32,
    marginBottom: 8,
  },
  aboutContent: {
    marginTop: 32,
    gap: 13,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  all: {
    color: globalStyles.colors.green,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    lineHeight: globalStyles.fontStyle.marginTop,
  },
  titleAbout: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.endTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
  },
  about: {
    color: globalStyles.colors.gray,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.userHomePageFont,
  },
});
