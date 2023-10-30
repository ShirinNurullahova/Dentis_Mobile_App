import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import InfoIcon from '../../assets/icons/InfoIcon';



interface Props {
     background: boolean
  }
const InfoView = ({background}: Props) => {
  return (
    <View style={[styles.info, background && styles.addBckg]}>
      <InfoIcon />
      <Text style={styles.checktext}>
        Ödənişlərin qəbulu üçün əsas kart olaraq təyin edilmişdir.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checktext: {
    marginLeft: 10,
    width: 317,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    color: globalStyles.colors.black,
  },
  addBckg:{
    backgroundColor:globalStyles.colors.inputBckgColor,
    borderRadius:globalStyles.borderRadius,
    height:56,
    paddingLeft:12
  }
});

export default InfoView;
