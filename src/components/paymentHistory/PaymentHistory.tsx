import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { PaymentHistoryData } from '../../data/paymentHistory';
import { globalStyles } from '../../constants/globalStyles';
import { FlatList } from 'react-native-gesture-handler';

const PaymentHistory = () => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.contentInner}>
              <Text style={styles.date}>{item.date}</Text>
              {item.childrens.map((child, childIndex) => (
                <View key={childIndex} style={styles.line}>
                  <View style={styles.lineOfDetail}>
                    <Image source={child.profImage} alt="Profile" />
                    <View>
                      <Text style={styles.userName}>{child.userName}</Text>
                      <Text style={styles.number}>{child.userNumber}</Text>
                    </View>
                  </View>
                  <View
                    style={[child.paid === 'Rejected' ? styles.paymentSideRed : styles.paymentSide]}
                  >
                    <Text style={[child.paid === 'Rejected' ? styles.priceR : styles.price]}>{child.paidPrice}</Text>
                    <Text style={[child.paid === 'Rejected' ? styles.paidR : styles.paid]}>{child.paid}</Text>
                  </View>
                </View>
              ))}
            </View>
          );
        }}
        data={PaymentHistoryData}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({
  contentInner: {
    marginTop: 20,
  },
  date: {
    color: globalStyles.colors.green,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,
    marginLeft: 16,
  },
  line: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.colors.borderBottomColor,
  },
  lineOfDetail: {
    flexDirection: 'row',
    gap: 12,
  },
  price: {
    textAlign: 'right',
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.inputLineHeight,
  },
  paid: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.paymentSmallSizeFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.mediumTextFontSize,
  },
  priceR: {
    textAlign: 'right',
    color: globalStyles.colors.rejectedText,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.inputLineHeight,
  },
  paidR: {
    color: globalStyles.colors.rejectedText,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.paymentSmallSizeFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.mediumTextFontSize,
  },
  userName: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.userHomePageFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
  },
  number: {
    color: globalStyles.colors.gray,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,
  },
  paymentSide: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: globalStyles.colors.inputBckgColor,
  },
  paymentSideRed: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: globalStyles.colors.rejected,
  },
  wrapper: {
    marginBottom: 120,
  },
});
