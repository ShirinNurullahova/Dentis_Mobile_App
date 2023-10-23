import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import PaymentButton from '../paymentButton/PaymentButton';

const OnWaitPayment = ({ item }: { item: any }) => {
  return (
    <View key={item.id} style={styles.content}>
      <View style={styles.topLine}>
        <View style={styles.contentImageSide}>
          <Image source={item.profImage} />
          <View>
            <Text style={styles.userName}>{item.userName}</Text>
            <Text style={styles.userNumber}>{item.userNumber}</Text>
          </View>
        </View>
        <View>
          <Image source={item.seenImage} />
          <Text style={styles.countSeen}>{item.countSeen}</Text>
        </View>
      </View>
      <View style={styles.topLine}>
        <View style={styles.contentPrice}>
          <View style={styles.pricePart}>
            <Text style={styles.totalPrice}>{item.totalPrice}</Text>
            <Text style={styles.totalProfit}>{item.totalProfit}</Text>
          </View>
          <View style={styles.onWaitPart}>
            <Text style={styles.waitingPrice}>{item.waitingPrice}</Text>
            <Text style={styles.onWait}>{item.onWait}</Text>
          </View>
        </View>
        <View>
          <PaymentButton
            textStyle={styles.buttonNew}
            viewStyle={styles.bgStyle}
            text={item.buttonData}
            onPress={() => {}}
            type=""
          />
        </View>
      </View>
    </View>
  );
};

export default OnWaitPayment;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    gap: 20,
  },
  contentImageSide: {
    gap: 12,
    flexDirection: 'row',
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.endTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    lineHeight: globalStyles.fontStyle.userHomePadeLineHeight,
  },
  userNumber: {
    color: globalStyles.colors.gray,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,
  },
  countSeen: {
    color: globalStyles.colors.green,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.doctorDetailFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.userHomePageFont,
    marginTop: 6,
  },
  pricePart: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: globalStyles.colors.paymentBg,
    borderWidth: 0,
    borderRadius: 4,
  },
  onWaitPart: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: globalStyles.colors.paymentLightBlue,
    borderWidth: 0,
    borderRadius: 4,
  },
  contentPrice: {
    gap: 8,
    flexDirection: 'row',
  },
  totalPrice: {
    color: globalStyles.colors.totalPriceText,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.inputLineHeight,
    textAlign: 'right',
  },
  totalProfit: {
    color: globalStyles.colors.totalPriceText,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.paymentSmallSizeFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.mediumTextFontSize,
  },
  onWait: {
    color: globalStyles.colors.onWaitPrice,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.inputLineHeight,
  },
  waitingPrice: {
    color: globalStyles.colors.onWaitPrice,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.paymentSmallSizeFont,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: globalStyles.fontStyle.mediumTextFontSize,
    textAlign: 'right',
  },
  buttonNew: {
    color: globalStyles.colors.white,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.mediumFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
  },
  bgStyle: {
    backgroundColor: globalStyles.colors.green,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 0,
    borderRadius: 4,
  },
});
