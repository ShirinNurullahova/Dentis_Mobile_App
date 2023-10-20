import React, { ChangeEvent } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ImageSourcePropType,
} from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

interface CardDetailButtonProps {
  clientName: string;
  doctorName: string;
  number: string;
  date: string;
}
const ClientDetail: React.FC<CardDetailButtonProps> = ({
  clientName,
  doctorName,
  number,
  date,
}) => {
  return (
    <View style={styles.clientdetail}>
      <View style={styles.clientdetailLeft}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={{ width: 48, height: 48 }}
        />
        <View style={styles.clientdetailLeftEl}>
          <Text style={styles.cName}>{clientName}</Text>
          <Text style={styles.cNumber}>{number}</Text>
          <Text style={styles.dName}>{doctorName}</Text>
          {/* <Text style={styles.dName}>{date}</Text> */}
        </View>
      </View>
      <View style={styles.clientdetailRight}>
        <View style={styles.clientdetailRightEl}>
          <Text style={styles.clientdetailRightElText}>32.50</Text>
          <Text style={styles.clientdetailRightElText}>Gözlənilən</Text>
        </View>
        <View style={styles.clientdetailRightCommon}>
          <Text style={styles.clientdetailRightElTextCommon}>60.50</Text>
          <Text style={styles.clientdetailRightElTextCommon}>Ümumi qazanılan</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cName: {
    fontSize: globalStyles.fontStyle.endTextFontSize,
    color: globalStyles.colors.black,
    fontWeight: globalStyles.fontStyle.fontWeight,
    fontFamily: globalStyles.fontStyle.primary,
  },
  cNumber: {
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    color: globalStyles.colors.black,
    fontWeight: globalStyles.fontStyle.fontWeight,
    fontFamily: globalStyles.fontStyle.primary,
    margin: 4,
  },
  dName: {
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    color: globalStyles.colors.gray,
    fontWeight: globalStyles.fontStyle.fontWeight,
    fontFamily: globalStyles.fontStyle.primary,
  },
  clientdetailLeft: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  clientdetailRightEl: {
    marginBottom: 10,
    backgroundColor: '#F2F7FB',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: '70%',
  },
  clientdetailLeftEl: {
    marginLeft: 15,
  },
  clientdetailRight: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  clientdetail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingBottom:5,
    borderBottomWidth:3,
    borderBottomColor:globalStyles.colors.borderText
  },
  clientdetailRightElText: {
    textAlign: 'right',
    color: '#3676CB',
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.primaryWeight,
  },
  clientdetailRightElTextCommon: {
    textAlign: 'right',
    color: '#8A54E1',
  },
  clientdetailRightCommon: {
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#F3EEFF',
  },
});

export default ClientDetail;
