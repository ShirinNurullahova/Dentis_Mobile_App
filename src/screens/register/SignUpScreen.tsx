import React, { FC, useEffect, useState, useMemo } from 'react';
import { TextInput, StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/DropDown/DropDown';
import { generateDateDropdownValues } from '../../utils/generateDateValues';
import CustomButton from '../../components/Button/Button';
import EndTextComponent from '../../components/EndText/EndText';
const SignUpScreen: FC = () => {
  const [month, setMonth] = useState(0);

  const dates = useMemo(() => {
    return generateDateDropdownValues(month);
  }, [month]);

  return (
    <SafeAreaView style={styles.allSignup}>
      <View>
        <TextComponent text="Hesab yaradın" />
        <Input
          onChange={() => {
            console.log('alert');
          }}
          value=""
          placeholder="Ad və soyadınızı daxil edin"
          label="Ad və Soyad"
        />
        <Input
          onChange={() => {
            console.log('alert');
          }}
          value=""
          placeholder="+994"
          label="Mobil nömrə"
        />
        <View style={styles.dropdown}>
          <Dropdown onPress={() => {}} title="Day" values={dates.days} />
          <Dropdown
            type="month"
            onPress={(index) => {
              setMonth(index);
            }}
            title="Month"
            values={dates.months}
          />
          <Dropdown onPress={() => {}} title="Year" values={dates.years} />
        </View>

        <Input
          onChange={() => {
            console.log('first');
          }}
          value="test"
          placeholder="Şifrə daxil edin"
          label="Şifrə"
          iconShow
        />
      
        <EndTextComponent text={"By singing up I accept the "} diffText='terms of use and the data privacy policy'/>
       
        <CustomButton
          onPress={() => {
            console.log('salam');
          }}
          text="Davam et"
        />
      </View>
  
        <EndTextComponent text={"Hesabınız var?"} diffText='Daxil olun'/>
    
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  allSignup: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 40,
  },
  dropdown: {
    gap: 10,
    flexDirection: 'row',
  }
  
});
export default SignUpScreen;
