import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PaymentsDetails from '../../components/paymentsDetails/PaymentsDetails';

const PaymentList = () => {
    
  const data = [
    {
      title: 'Gözlənilən',
      buttonText: '33.00',
      children: [
        { date: '12.06.1998', amount: '8.00' },
        { date: '12.06.1998', amount: '12.00' },
        { date: '12.06.1998', amount: '16.00' },
      ],
    },
    {
      title: 'Tarixçə',
      buttonText: '145.85',
      type: 'history',
      children: [
        { date: '12.06.1998', amount: '8.00' },
        { date: '12.06.1998', amount: '12.00' },
        { date: '12.06.1998', amount: '16.00' },
        { date: '12.06.1998', amount: '8.00' },
        { date: '12.06.1998', amount: '12.00' },
        { date: '12.06.1998', amount: '16.00' },
        { date: '12.06.1998', amount: '8.00' },
        { date: '12.06.1998', amount: '12.00' },
        { date: '12.06.1998', amount: '16.00' },
        { date: '12.06.1998', amount: '8.00' },
        { date: '12.06.1998', amount: '12.00' },
        { date: '12.06.1998', amount: '16.00' }
      ],
    },
  ];
  return (
    <ScrollView>
      <View style={styles.paymentList}>
        <PaymentsDetails data={data}  showButton={true}/>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paymentList: {
    paddingHorizontal: 16,
  },
 
});

export default PaymentList;
