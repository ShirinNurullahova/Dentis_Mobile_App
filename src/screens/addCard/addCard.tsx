import React, { FC, useEffect } from 'react';
import Screen from '../../components/Screen/Screen';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { VStack } from '../../components/features/VStack/VStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextComponent from '../../components/Text/Text';
import EndTextComponent from '../../components/EndText/EndText';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { globalStyles } from '../../constants/globalStyles';
import CardDetailButton from '../../components/cardDetailButton/CardDetailButton';
import InfoView from '../../components/InfoView/InfoView';
import { cardAddValidationSchema } from '../../utils/validation';


const AddCard: FC = () => {
  return (
    <SafeAreaView style={styles.all}>
      <Formik
        initialValues={{ kartNomresi: '', tarix: '', cvv: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={cardAddValidationSchema}
      >
        {({ handleChange, handleSubmit, values, errors, isValid }) => (
          <View>
            <TextComponent text="Kartınızı əlavə edin" fontSize={false} />
            <View style={styles.bottomPart}>
              <CardDetailButton
                text="Kartın nömrəsi"
                value={values.kartNomresi}
                onChangeText={handleChange('kartNomresi')}
                showIcon={false}
                disabled={true}
                imgIcon={require('../../assets/images/cardDetail.png')}
                type="phone-pad"
              />
              {values.kartNomresi && errors.kartNomresi && (
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.kartNomresi}</Text>
              )}
              <View style={styles.bottomPartEl}>
                <CardDetailButton
                  text="MM/YY"
                  onChangeText={handleChange('tarix')}
                  value={values.tarix}
                  showIcon={false}
                  disabled={true}
                  imgIcon={require('../../assets/images/calendar.png')}
                  width={true}
                  type="phone-pad"
                />

                <CardDetailButton
                  text="CVV"
                  onChangeText={handleChange('cvv')}
                  value={values.cvv}
                  showIcon={false}
                  disabled={true}
                  imgIcon={require('../../assets/images/lock.png')}
                  width={true}
                  type="phone-pad"
                />
              </View>
            </View>
            {values.tarix && errors.tarix && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.tarix}</Text>
            )}
            {values.cvv && errors.cvv && (
              <Text style={{ fontSize: 10, color: 'red' }}>{errors.cvv}</Text>
            )}
           
            <InfoView background={true} />
            <CustomButton
              onPress={handleSubmit}
              text="Davam et"
              title="Submit"
              type="submit"
              disabled={!values.kartNomresi && !values.tarix && !values.cvv ? !isValid : isValid}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 40,
  },
  bottomPart: {
    marginTop: 60,
   
  },
  bottomPartEl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
     marginTop:20,
     marginBottom:20
  },
  endTextDiv: {
    margin: 20,
    alignItems: 'flex-end',
  },
  endText: {
    color: globalStyles.colors.inputEndTextColor,
    fontStyle: globalStyles.fontStyle.primaryStyle,
    lineHeight: globalStyles.fontStyle.endTextLineHeight /* 142.857% */,
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    fontFamily: globalStyles.fontStyle.primary,
  },
});

export default AddCard;
