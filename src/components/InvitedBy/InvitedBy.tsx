import React, { ChangeEvent, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  text: string;
  name: string;
}

const InvitedBy = ({ name, text }: Props) => {
  return (
    <View style={styles.invitedBy}>
      <Text style={styles.invitedByText}>
        {name} <Text style={styles.difText}>{text}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  invitedBy: {
    backgroundColor: globalStyles.colors.inputBckgColor,
    height: 44,
    display: 'flex',
    al: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 40,
  },
  invitedByText: {
    textAlign: 'center',
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    color: globalStyles.colors.green,
  },
  difText: {
    color: globalStyles.colors.gray,
  },
});
export default InvitedBy;
