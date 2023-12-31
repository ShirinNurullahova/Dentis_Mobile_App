import React, { useState, useEffect, useRef } from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { postData } from '../../hooks/CustomHooks';

interface Props {
  handleTextChange: ((text: string) => void) | undefined;
  inputCount: number;
  autoFocus: boolean;
}

const OTPInput = ({ autoFocus, handleTextChange, inputCount }: Props) => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => setCounter(counter - 1), 1000);
      return () => clearTimeout(timer); // Clear the timer when the component unmounts or when counter is reset
    }
  }, [counter]);

  // Calculate minutes and seconds
  const minutes = Math.floor(counter / 60);
  const seconds = counter % 60;

  // Format minutes and seconds as 2-digit strings
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const loginBody = useSelector((state:any) => state.user.loginBody)

  const onSubmitHandler = async () => {

    try {
      const response = await postData('auth/login', loginBody);
      if (response.statusCode === 'success') {  
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <View>
      <Text style={styles.labelMain}>Şifrə göndərildi: +994 51 987 65 43</Text>
      <View style={styles.size}>
        <OTPTextInput
          autoFocus={autoFocus}
          tintColor={globalStyles.colors.green}
          textInputStyle={{
            borderWidth: 1,
            height: 50,
            width: 45,
            backgroundColor: '#F8F9F9',
            borderBlockColor: 'transparent',
            borderRadius: 12,
            borderBottomWidth: 1,
          }}
          inputCount={inputCount}
          handleTextChange={handleTextChange}
        />
      </View>

      {counter > 0 ? (
        <Text style={styles.label}>
          Yenidən göndərmək üçün {formattedMinutes}:{formattedSeconds}
        </Text>
      ) : (
        <Text style={styles.label}>Yenidən göndərmək üçün 00:00</Text>
      )}
      <TouchableOpacity onPress={()=>onSubmitHandler()}>
        <Text style={styles.send}>Yenidən göndər</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  size: {
    width: '50%',
  },
  label: {
    marginTop: 12,
    color: globalStyles.colors.inputEndTextColor,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    fontFamily: globalStyles.fontStyle.primary,
  },
  labelMain: {
    color: globalStyles.colors.inputEndTextColor,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    lineHeight: globalStyles.fontStyle.endTextLineHeight,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    fontFamily: globalStyles.fontStyle.primary,
    marginBottom: 20,
  },
  send: {
    color: globalStyles.colors.green,
    lineHeight: globalStyles.fontStyle.inputLineHeight,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontWeight: globalStyles.fontStyle.primaryWeight,
    fontFamily: globalStyles.fontStyle.primary,
    marginBottom: 150,
  },
});
export default OTPInput;
