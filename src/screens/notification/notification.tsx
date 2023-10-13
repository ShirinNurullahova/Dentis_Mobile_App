import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import notificationData from '../../data/notificationData.json';

const Notification = () => {
  return (
    <View style={styles.contentNotif}>
      {notificationData?.map((data) => {
        return (
          <View key={data.id} style={styles.line}>
            <Text style={styles.dateText}>{data.date}</Text>
            <Text style={styles.contentText}>{`\u2022 ${data.content}`}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  contentNotif: {
    marginTop: 20,
  },
  line: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: '#EFEFF1',
  },
  dateText: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    color: '#12CC89',
  },
  contentText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 24,
    color: '#5E6067',
    marginTop: 8,
  },
});
