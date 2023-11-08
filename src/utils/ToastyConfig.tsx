import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../constants/globalStyles';

export const toastConfig = {
  custom: ({ props }: { props: { messageType: 'success' | 'error'; message: string } }) => {
    return (
      <View style={styles.notiView}>
        <Image
          source={
            props.messageType === 'success'
              ? require('../assets/images/success.png')
              : require('../assets/images/err.png')
          }
        />
        <Text style={styles.mesg}>{props.message}</Text>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  notiView: {
    borderRadius: 24,
    backgroundColor: globalStyles.colors.inputBckgColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width:'80%',
    height:164
  },
  mesg:{
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    marginTop: 24,
    textAlign: "center"
  }
});
