import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { doctorList } from '../../data/doctorListData';
import { useNavigation } from '@react-navigation/native';

const Doctorlist = () => {
  const navigation = useNavigation()
  function pressHandler(item) {
    navigation.navigate('DoctorPersonalPage', {doctor:item});
  }
  return (
    <View style={styles.contentDoctorList}>
      <FlatList
        data={doctorList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            pressHandler(item)
          }}>
            <View key={item.id} style={styles.doctorLine}>
              <View>
                <Image source={item.image} />
              </View>
              <View>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.doctorProfession}>{item.profession}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Doctorlist;

const styles = StyleSheet.create({
  contentDoctorList: {
    marginTop: 20,
    marginBottom: 10,
  },
  doctorLine: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#EFEFF1',
  },
  doctorName: {
    color: '#31353D',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
  },
  doctorProfession: {
    color: '#9EA0A3',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    marginTop: 6,
  },
});
