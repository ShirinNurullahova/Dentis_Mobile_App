import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Profile from '../../components/Profile/Profile';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import CustomButton from '../../components/Button/Button';
import AddClient from '../../components/AddClient/AddClient';
import { globalStyles } from '../../constants/globalStyles';
import { clientData } from '../../data/clientData';

const HomePage = () => {
  const handleSubmit = () => {};
  return (
    <View style={styles.profilContainer}>
      <Profile title={'Nermin Mammadova'} />
      <ProfileCard title={'Gözlənilən'} amount={32.5} commonAmount={60.5} />
      <CustomButton
        onPress={handleSubmit}
        text="Müştəri daxil et"
        title="Submit"
        type="submit"
        disabled={true}
      />
      <View style={styles.addTitle}>
        <Text style={styles.add}>Əlavə Etdiniz</Text>
        <Text style={styles.more}>Daha çox</Text>
      </View>
      <AddClient clientData={clientData}/>
    </View>
  );
};
const styles = StyleSheet.create({
  profilContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  addTitle:{
    display:'flex',
    marginTop:30,
    marginBottom:20,
    flexDirection:'row',
    justifyContent:'space-between'
 },
 add:{
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    color: globalStyles.colors.black,
    fontSize: globalStyles.fontStyle.mediumFontSize
 },more:{
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    color: globalStyles.colors.green,
    fontSize: globalStyles.fontStyle.mediumTextFontSize
 }
});
export default HomePage;
