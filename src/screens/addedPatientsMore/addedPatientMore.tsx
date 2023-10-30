import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ScrollView, Text, Button, Pressable } from 'react-native';
import AddClient from '../../components/AddClient/AddClient';
import { clientData } from '../../data/clientData';
import { globalStyles } from '../../constants/globalStyles';
const AddedPatientMore = () => {
   const createActiveStyle=(item: any, index:number)=>{
    return [item.status === allStatus && styles[item.status], allStatus == 'all' && index ==0 && styles.additionColor]
   }

  const statuses = [
    { title: 'Hamisi', status: 'all' },
    { title: 'Gözləmədə', status: 'waiting' },
    { title: 'Uğurlu əməliyyat', status: 'success' },
    { title: 'Ləğv edilmiş', status: 'rejected' },
  ];
  const [allStatus, setAllStatus] = useState('all');

  const fliteredData = useMemo(() => {
    return allStatus == 'all'
      ? clientData
      : clientData.filter((data) => data.status == allStatus);
  }, [allStatus]);

  return (
    <ScrollView>
      <View style={styles.addedPatientMore}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 40,
            marginBottom:32,
            backgroundColor: 'transparent',
          }}
        >
          {statuses.map((item, index) => {
            return (
              <Pressable
                style={{
               paddingRight:10
                }}
                onPress={() => {
                  setAllStatus(item.status);
                }}
              >
                <View style={[styles.scrollTextView , createActiveStyle(item,index)]}>
                  <Text
                   style={[styles.scrollText , createActiveStyle(item,index)]}
                  >{`\u2022 ${item.title}`}</Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <AddClient clientData={fliteredData} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addedPatientMore: {
    paddingHorizontal: 16
  },
  additionColor: {
    color: '#8A54E1',
    backgroundColor: '#F3EEFF',
  },
  success: {
    backgroundColor: '#F2FBF3',
    color: '#12CC89',
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,
  },
  waiting: {
    backgroundColor: '#FDF3E2',
    color: '#FF831E',
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,

  },
  rejected: {
    backgroundColor: '#FFECEF',
    color: '#F83252',
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,
   
  },
  scrollTextView: {
    paddingVertical: 6,
    paddingHorizontal:8,
    backgroundColor: '#F8F9F9',
    borderRadius: 4,
  },
  scrollText: {
    color: globalStyles.colors.gray,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
 
  },
});

export default AddedPatientMore;
