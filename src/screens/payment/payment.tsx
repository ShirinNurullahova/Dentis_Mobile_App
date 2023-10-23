import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import OnWaitPayment from '../../components/OnWaitPayment/OnWaitPayment';
import { paymentData } from '../../data/payment';
import PaymentButton from '../../components/paymentButton/PaymentButton';
import { globalStyles } from '../../constants/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import PaymentHistory from '../../components/paymentHistory/PaymentHistory';

const Payment = () => {
  const [showSectionPay, setShowSectionPay] = useState(true);
  const [showSection, setShowSection] = useState(false);

  return (
    <SafeAreaView>
      <View style={styles.buttonContent}>
        <PaymentButton
          textStyle={showSectionPay ? styles.buttonNew : styles.buttonNew2}
          viewStyle={showSectionPay ? styles.bgStyle : styles.bgStyle2}
          text="Gözləyən ödənişlər"
          onPress={() => {
            setShowSectionPay(true);
            setShowSection(false);
          }}
          type=""
        />
        <PaymentButton
          textStyle={showSection ? styles.buttonNew : styles.buttonNew2}
          viewStyle={showSection ? styles.bgStyle : styles.bgStyle2}
          text="Tarixçə"
          onPress={() => {
            setShowSection(true);
            setShowSectionPay(false);
          }}
          type=""
        />
      </View>
      {showSectionPay && (
        <FlatList
          style={styles.list}
          data={paymentData}
          renderItem={({ item }) => <OnWaitPayment item={item} />}
          keyExtractor={(paymentData) => paymentData.id.toString()}
        />
      )}
      {showSection && <PaymentHistory />}
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'space-between',
  },
  buttonNew: {
    color: globalStyles.colors.white,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    width: 137,
    textAlign: 'center',
    paddingVertical: 5,
  },
  buttonNew2: {
    color: globalStyles.colors.black,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    width: 137,
    textAlign: 'center',
    paddingVertical: 5,
    backgroundColor: globalStyles.colors.inputBckgColor,
  },
  bgStyle: {
    backgroundColor: globalStyles.colors.green,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 0,
    borderRadius: 4,
  },
  bgStyle2: {
    backgroundColor: globalStyles.colors.inputBckgColor,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 0,
    borderRadius: 4,
  },
  list: {
    marginTop: 20,
    marginBottom: 50,
  },
});
