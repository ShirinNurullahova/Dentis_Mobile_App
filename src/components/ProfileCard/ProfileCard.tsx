import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';


interface Props {
  title: string;
  amount: number;
  commonAmount: number;
}

const ProfileCard = ({title, amount, commonAmount}: Props) => {
  return (
    <View style={styles.profileCard}>
        <Text style={styles.upText}>{title}</Text>
        <Text style={styles.amount}>{amount} Azn</Text>
        <Text style={styles.commonAmount}>Cari vaxta qədər qazanılmış: {commonAmount}</Text>
    </View>
  );
};
const styles= StyleSheet.create({
    profileCard:{
        marginTop:40,
        marginBottom: 40,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width: 343,
        height: 132,
        borderRadius: globalStyles.borderRadius,
        backgroundColor:'#FFFFFF'
    },
    upText:{
        fontFamily: globalStyles.fontStyle.primary,
        fontWeight: globalStyles.fontStyle.primaryWeight,
        fontSize: globalStyles.fontStyle.endTextFontSize,
        color: globalStyles.colors.black
    },
    amount:{
        fontFamily: globalStyles.fontStyle.primary, 
        color: globalStyles.colors.green,
        fontWeight: globalStyles.fontStyle.fontWeightBold,
        fontSize: globalStyles.fontStyle.amountFontSize,

    },
    commonAmount:{
        fontFamily: globalStyles.fontStyle.primary,
        fontWeight: globalStyles.fontStyle.primaryWeight,
        fontSize: globalStyles.fontStyle.endTextFontSize,
        color: globalStyles.colors.inputEndTextColor
    }
})


export default ProfileCard;
