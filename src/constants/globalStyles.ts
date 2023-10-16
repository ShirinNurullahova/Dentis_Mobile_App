import {TextStyle } from 'react-native';
export const globalStyles = {
  colors:{
    black: '#31353D',
    gray: '#9EA0A3',
    green: '#12CC89',
    disableColor: '#B4B6B8',
    red: '#F83252',
    white:'#FFFFFF',
    inputBckgColor:'#F8F9F9',
    inputEndTextColor:'#5E6067'
  },
  fontStyle:{
    primary:'Poppins-Regular',
    primaryWeight: ('500')  as TextStyle["fontWeight"],
    primaryStyle:'normal' as TextStyle["fontStyle"],
    buttonFontSize:17,
    largeFontSize: 34,
    mediumFontSize: 22,
    dropDownFontSize:15,
    smallTextFontSize:13,
    endTextFontSize:16,
    fontWeight: ("500") as TextStyle["fontWeight"],
    textFontWeight: ("400") as TextStyle["fontWeight"],
    buttonLineHeight:22,
    inputLineHeight:18,
    largeTextLineHeight:40,
    endTextLineHeight:20
  },
  borderRadius:12
};
