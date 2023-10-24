import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import ClientDetail from '../../components/clientDetail/ClientDetail';





const renderİtem = ({item}: any)=>{
    return (
        <ClientDetail
        doctorName={item.clientName}
        number={item.clientNumber}
        image={item.clientImage}
        showDate
        {...item}
      />
    );
  }

const PatientList = () => {
    const data =[
        {
          id: 1,
          clientName: 'Nərmin Məmmədova',
          clientImage: require('../../assets/images/doctor1.png'),
          clientNumber: '+994 51 987 65 43',
          bookedDoctor: 'İlham Hüseynov',
          date: '03.02.2001',
          price: '32.50',
          onWait: 'Gözlənilən',
          totalPrice: '60.50',
          totalAmount: 'Ümumi məbləğ',
        },
        {
          id: 2,
          clientImage: require('../../assets/images/doctor2.png'),
          clientName: 'Nərmin Məmmədova',
          clientNumber: '+994 51 987 65 43',
          bookedDoctor: 'İlham Hüseynov',
          date: '03.02.2001',
          price: '32.50',
          onWait: 'Gözlənilən',
          totalPrice: '60.50',
          totalAmount: 'Ümumi məbləğ',
        },
        {
          id: 3,
          clientImage: require('../../assets/images/doctor2.png'),
          clientName: 'Emin Muradov',
          clientNumber: '+994 51 987 65 43',
          bookedDoctor: 'İlham Hüseynov',
          date: '03.02.2001',
          price: '32.50',
          onWait: 'Gözlənilən',
          totalPrice: '60.50',
          totalAmount: 'Ümumi məbləğ',
        },
        {
          id: 4,
          clientImage: require('../../assets/images/doctor2.png'),
          clientName: 'Nərmin Məmmədova',
          clientNumber: '+994 51 987 65 43',
          bookedDoctor: 'İlham Hüseynov',
          date: '03.02.2001',
          price: '32.50',
          onWait: 'Gözlənilən',
          totalPrice: '60.50',
          totalAmount: 'Ümumi məbləğ',
        },
        {
          id: 5,
          clientImage: require('../../assets/images/doctor2.png'),
          clientName: 'Emin Muradov',
          clientNumber: '+994 51 987 65 43',
          bookedDoctor: 'İlham Hüseynov',
          date: '03.02.2001',
          price: '32.50',
          onWait: 'Gözlənilən',
          totalPrice: '60.50',
          totalAmount: 'Ümumi məbləğ',
        },
      ]
  
  return (
    <ScrollView>
      <View style={styles.patientList}>
    
     <FlatList data={data} renderItem={renderİtem}/>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  patientList: {
    paddingVertical:100,
  },
 
});

export default PatientList;
