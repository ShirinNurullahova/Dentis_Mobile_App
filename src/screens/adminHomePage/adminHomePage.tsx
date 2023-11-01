import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import Profile from '../../components/Profile/Profile';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import CustomButton from '../../components/Button/Button';
import AddClient from '../../components/AddClient/AddClient';
import { globalStyles } from '../../constants/globalStyles';
import { data } from '../../data/willTePaid';
import PaymentButton from '../../components/paymentButton/PaymentButton';
import BottomModal from '../../components/modals/BottomModal/BottomModal';

const AdminHomePage = () => {
  const handleSubmit = () => {};
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView>
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
          <Text style={styles.add}>Gözlənilən</Text>
        </View>
        <View>
          {data.map((item, index) => (
            <View key={index} style={styles.bottomHome}>
              <View style={styles.leftHomePart}>
                <Image source={item.image} />
                <View style={styles.leftHomePartEl}>
                  <Text style={styles.itemNames}>{item.name}</Text>
                  <Text style={styles.itemNumber}>{item.number}</Text>
                </View>
              </View>
              <View style={styles.rightHomePart}>
                <Text style={styles.paymentButton}>{item.payment} AZN</Text>
                <PaymentButton
                  textStyle={styles.buttonNew}
                  viewStyle={styles.bgStyle}
                  text="Ödəniş et"
                  onPress={toggleModal}
                  type=""
                />
              </View>
            </View>
          ))}
        </View>
      </View>
      <BottomModal termOfUse={false}  toggleModal={toggleModal} setModalVisible={setModalVisible} isModalVisible={isModalVisible}/>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  profilContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
  },
  addTitle: {
    display: 'flex',
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  bottomHome: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomColor: globalStyles.colors.borderBottomColor,
    borderBottomWidth: 1,
  },
  buttonNew: {
    color: globalStyles.colors.green,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
  },
  paymentButton: {
    backgroundColor: '#F2F7FB',
    color: '#3676CB',
    textAlign: 'center',
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgStyle: {
    borderColor: globalStyles.colors.green,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 4,
  },
  leftHomePart: {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center'
  },
  leftHomePartEl: {
    marginLeft: 10,
  },
  rightHomePart: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemNames:{
    fontSize: globalStyles.fontStyle.endTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    color: globalStyles.colors.black
  }, 
  itemNumber:{
    fontSize: globalStyles.fontStyle.mediumTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    color: globalStyles.colors.black
  }
});
export default AdminHomePage;
