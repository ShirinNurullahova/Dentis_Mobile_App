import React, { ChangeEvent, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  text: string;
  name: string;
  changeColor?: boolean;
  imgData?: any;
}

const InvitedBy = ({ name, text, changeColor, imgData }: Props) => {
  imgData = [
    require('../../assets/images/add.png'),
    require('../../assets/images/add.png'),
    require('../../assets/images/add.png'),
  ];
  return (
    <View style={styles.invitedBy}>
      <Text style={[styles.invitedByText, changeColor && styles.changeText]}>
        {name} <Text style={[styles.difText, changeColor && styles.changeDifText]}>{text}</Text>
      </Text>
      <View style={[styles.imgs, changeColor && styles.addImgs]}>
        {changeColor &&
          imgData.map((e: any, index: number) => {
            return <Image source={e} style={[styles.smallImg, index !== 0 && {position:'relative', left: -10 * index}]} />;
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  invitedBy: {
    backgroundColor: globalStyles.colors.inputBckgColor,
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 40,
  },
  smallImg: {
    width: 24,
    height: 24,
  
  },
  imgs: {
    display: 'flex',
    flexDirection: 'row'
  },
  addImgs: {
    marginLeft: 5,
    position:'relative'
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
  changeText: {
    color: globalStyles.colors.gray,
  },
  changeDifText: {
    color: globalStyles.colors.green,
  },
});
export default InvitedBy;
