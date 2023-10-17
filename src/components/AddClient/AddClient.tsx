import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { clientData } from '../../data/clientData';
import { globalStyles } from '../../constants/globalStyles';

// interface Props {
//   name: string;
//   number: number;
//   status: string;
// }

const AddClient = () => {
  return (
    <View>
      
      {clientData.map((client) => {
        return (
          <View style={styles.cardContainer}>
            <View style={styles.cardContainerItem}>
              <Text style={styles.clientName}>{client.name}</Text>
              <Text style={styles.clientNumber}>{client.number}</Text>
            </View>

            <View style={[styles[client.status], styles.additionalStyle]}>
              <Text style={styles[client.status]}>{`\u2022 ${client.title}`}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
    success:{
        backgroundColor:"#F2FBF3",
        color: "#12CC89",
        fontFamily: globalStyles.fontStyle.primary,
        fontSize: globalStyles.fontStyle.smallTextFontSize,
        lineHeight: globalStyles.fontStyle.endTextLineHeight
    },
    waiting:{
        backgroundColor:"#FDF3E2",
        color:"#FF831E",
        fontFamily: globalStyles.fontStyle.primary,
        fontSize: globalStyles.fontStyle.smallTextFontSize,
        lineHeight: globalStyles.fontStyle.endTextLineHeight
    },
    rejected:{
        backgroundColor:"#FFECEF",
        color:"#F83252",
        fontFamily: globalStyles.fontStyle.primary,
        fontSize: globalStyles.fontStyle.smallTextFontSize,
        lineHeight: globalStyles.fontStyle.endTextLineHeight
    },
    clientName:{
        color: globalStyles.colors.black,
        fontFamily: globalStyles.fontStyle.primary,
        fontSize: globalStyles.fontStyle.mediumTextFontSize,
        lineHeight: globalStyles.fontStyle.userHomePadeLineHeight 
    },
    clientNumber:{
        color: globalStyles.colors.lightGray,
        fontFamily: globalStyles.fontStyle.primary,
        fontSize: globalStyles.fontStyle.mediumTextFontSize,
        lineHeight: globalStyles.fontStyle.userHomePadeLineHeight 
    },
    cardContainer:{
        display:'flex',
        marginTop:10,
        marginBottom:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor: globalStyles.colors.borderBottomColor,
        borderBottomWidth: 2
    },
    cardContainerItem:{
        display:'flex'
    },
    additionalStyle:{
        paddingHorizontal:4,
        paddingVertical:8
    }
   
});
export default AddClient;
