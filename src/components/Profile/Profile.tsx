import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';


interface Props {
  title: string;
}

const Profile = ({title}: Props) => {
  return (
    <View style={styles.profile}>
        <Image source={require('../../assets/images/profile.png')} style={styles.img}/>
        <Text style={styles.profileName}>{title}</Text>
    </View>
  );
};
const styles= StyleSheet.create({
    img:{
        marginRight:10
    },
      profile:{
        display: "flex",
        flexDirection:'row',
        alignItems:'center'
      },
      profileName:{
        fontSize: globalStyles.fontStyle.buttonFontSize,
        fontFamily: globalStyles.fontStyle.primary,
        fontWeight: globalStyles.fontStyle.fontWeight,
        color: globalStyles.colors.black
      }
})


export default Profile;
