import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

const PaymentsDetails = () => {
  const data = [
    {
      title: 'Ödənişlər',
      children: [
        { date: '12.06.1998', amount: '8.00' },
        { date: '12.06.1998', amount: '12.00' },
        { date: '12.06.1998', amount: '16.00' },
      ],
    },
  ];
  return (
    <View>
      {data.map((el: any) => {
        return (
          <View>
            <View style={styles.addTitle}>
              <Text style={styles.add}>{el.title}</Text>
              <Text style={styles.more}>Daha çox</Text>
            </View>
            {el.children.map((e: any) => {
              return (
                <View style={styles.paymentEl}>
                  <Text style={styles.dateTime}>{e.date}</Text>
                  <View style={styles.amountButton}>
                    <Text style={styles.amountButtonText}>{e.amount}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  addTitle: {
    display: 'flex',
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTime:{
     color: globalStyles.colors.black,
     fontSize: globalStyles.fontStyle.mediumTextFontSize,
     fontFamily: globalStyles.fontStyle.primary,
  },
  amountButton: {
    backgroundColor: '#F2F7FB',
    borderRadius: 4,
    width: 90,
    paddingHorizontal: 12,
    height: 36,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  amountButtonText: {
    color: '#3676CB',
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
  },
  paymentEl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth:2,
    paddingBottom:10,
    borderBottomColor: globalStyles.colors.borderBottomColor
  },
  add: {
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    color: globalStyles.colors.black,
    fontSize: globalStyles.fontStyle.mediumFontSize,
  },
  more: {
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    color: globalStyles.colors.green,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
  },
});

export default PaymentsDetails;
