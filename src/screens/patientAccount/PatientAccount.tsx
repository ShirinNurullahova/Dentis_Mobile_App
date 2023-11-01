import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import InvitedBy from '../../components/InvitedBy/InvitedBy';
import ClientDetail from '../../components/clientDetail/ClientDetail';
import AddClient from '../../components/AddClient/AddClient';
import { globalStyles } from '../../constants/globalStyles';
import PaymentsDetails from '../../components/paymentsDetails/PaymentsDetails';
import { clientData } from '../../data/clientData';
const PatientAccount = () => {
  const data = [
    {
      title: 'Ödənişlər',
      buttonText:'Daha çox',
      children: [
        { date: '12.06.1998', amount: '8.00' },
        { date: '12.06.1998', amount: '12.00' },
        { date: '12.06.1998', amount: '16.00' },
      ],
    }
  ];
  const firstThreeLinesOfData = clientData.slice(0, 3); // Get the first 3 lines of data

  return (
    <ScrollView>
      <View style={styles.patient}>
        <View style={styles.invite}>
        <InvitedBy text={'tərəfindən daxil olunub'} name="Sənan Rzayev" />

        </View>
        <ClientDetail
          clientName={'Nermin Memmedov'}
          doctorName={'ilham Huseynov'}
          number={'+994707034368'}
          date={'12.06.1995'}
          showDate={true}
          price={'32.50'}
          onWait={'Gözlənilən'}
          totalPrice={'60.50'}
          totalAmount={'Ümumi məbləğ'}
          image={require('../../assets/images/profile.png')}
        />
        <InvitedBy text={'24 nəfər'} name="Əlavə edilənlər:" changeColor={true} />
        <PaymentsDetails data={data} showButton={false}/>
        <View style={styles.addTitle}>
          <Text style={styles.add}>Əlavə Etdiniz</Text>
          <Text style={styles.more}>Daha çox</Text>
        </View>
       
        <AddClient clientData={firstThreeLinesOfData}/>
      </View>
    </ScrollView>
  );
};

export default PatientAccount;

const styles = StyleSheet.create({
  patient: {
    paddingHorizontal: 16
  },
  addTitle: {
    display: 'flex',
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  invite:{
     margin:16
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
