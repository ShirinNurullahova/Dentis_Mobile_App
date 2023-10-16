import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import OTPInput from '../../components/OTP/OTPInput';
import CustomButton from '../../components/Button/Button';
import TextComponent from '../../components/Text/Text';
const OTPScreen = () => {
  const [otp, setOtp] = useState('');
  const handleTextChange = (e: any) => {
    console.log(e);
    setOtp(e);
  };
  const handleSubmit = () => {};
    
  
 
 
  return (
    <SafeAreaView style={styles.otpScreen}>
      <TextComponent text="Göndərilən şifrəni daxil edin" fontSize={true} />
      <OTPInput autoFocus handleTextChange={handleTextChange} inputCount={4} />
      <CustomButton
        onPress={handleSubmit}
        text="Davam et"
        title="Submit"
        type="submit"
        disabled={(otp?.length === 4)}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  otpScreen: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 40,
  },
});
export default OTPScreen;
