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
  showDate?: boolean;
  price: string;
  onWait: string;
  totalPrice: string;
  totalAmount: string;
  image: any;
}
const ClientDetail: React.FC<CardDetailButtonProps> = ({
  clientName,
  doctorName,
  number,
  date,
  showDate,
  price,
  onWait,
  totalPrice,
  totalAmount,
  image,
}) => {
  return (
    <View style={styles.clientdetail}>
      <View style={[styles.clientdetailLeft, showDate && styles.upDistance]}>
        <Image source={image} style={{ width: 48, height: 48 }} />
        <View style={styles.clientdetailLeftEl}>
          <Text style={styles.cName}>{clientName}</Text>
          <Text style={styles.cNumber}>{number}</Text>
          <Text style={styles.dName}>{doctorName}</Text>
          {showDate && <Text style={styles.dName}>{date}</Text>}
        </View>
      </View>
      <View style={styles.clientdetailRight}>
        <View style={styles.clientdetailRightEl}>
          <Text style={styles.clientdetailRightElText}>{price}</Text>
          <Text style={styles.clientdetailRightElText}>{onWait}</Text>
        </View>
        <View style={styles.clientdetailRightCommon}>
          <Text style={styles.clientdetailRightElTextCommon}>{totalPrice}</Text>
          <Text style={styles.clientdetailRightElTextCommon}>{totalAmount}</Text>
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
  upDistance: {
    marginTop: 0,
  },
  clientdetailRightEl: {
    marginBottom: 10,
    backgroundColor: '#F2F7FB',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  clientdetailLeftEl: {
    marginLeft: 15,
  },
  clientdetailRight: {
    display: 'flex',
    alignItems: 'flex-end',
  },
  clientdetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.colors.borderBottomColor,
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
