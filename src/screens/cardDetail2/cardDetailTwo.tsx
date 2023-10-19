import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import CardDetailButton from '../../components/cardDetailButton/CardDetailButton';
import CustomButton from '../../components/Button/Button';
import CheckBox from '@react-native-community/checkbox';
import InfoIcon from '../../assets/icons/InfoIcon';
import { globalStyles } from '../../constants/globalStyles';

import { cardData } from '../../data/cardData.js';
const CardDetailTwo = () => {
  const handleSubmit = () => {};
  const [isSelected, setSelection] = useState(false);
  const handleCheckboxChange = () => {
    setSelection(!isSelected);
  };
  return (
    <View style={styles.cardDetailTwoPage}>
      <CardDetailButton text="1234 5678 9876 5432" showIcon={false} disabled={true} imgIcon={require('../../assets/images/cardDetail.png')}/>
      <View style={styles.add}>
        <CheckBox
          disabled={false}
          onValueChange={handleCheckboxChange}
          onCheckColor={'red'}
          onFillColor={'yellow'}
          onTintColor={'#80F4E8'}
          value={isSelected}
        />
        <Text style={styles.checktext}>Ödənişlərin qəbulu üçün əsas kart olaraq təyin et</Text>
      </View>
      <CustomButton
        onPress={handleSubmit}
        text="Kartı sil"
        title="Submit"
        type="submit"
        disabled={false}
        bckgColor={true}
      />
      <CustomButton
        onPress={handleSubmit}
        text="Yadda saxla"
        title="Submit"
        type="submit"
        disabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardDetailTwoPage: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  add: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checktext: {
    marginLeft:10,
    width:317,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    color: globalStyles.colors.black,
  },
});
export default CardDetailTwo;
