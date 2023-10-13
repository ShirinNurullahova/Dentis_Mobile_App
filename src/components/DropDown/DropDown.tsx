import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
const { width } = Dimensions.get('window');
import SelectDropdown from 'react-native-select-dropdown';
import { globalStyles } from '../../constants/globalStyles';

interface Props {
  title: string;
  onPress: (value:any) => void;
  values: Array<string>;
  type?: "month",
  setMonth?:any
}
const Dropdown = ({ onPress,values, type, setMonth }: Props) => {
    const onSelect = (selectedItem: any, index: number) => {
        if(type == 'month') {
            setMonth(index)

        } 
        onPress(selectedItem)
    }  
    console.log(values);
    
    return (
    <View>

      <SelectDropdown
        data={values}
        onSelect={onSelect}
        defaultButtonText={values[0]}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <Image
              source={require('../../assets/images/dropdown.png')}
              width={20}
              height={20}
              style={styles.image}
            />
          );
        }}
        dropdownIconPosition={'right'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  saveAreaViewContainer: { backgroundColor: globalStyles.colors.white },
  viewContainer: { width, backgroundColor: globalStyles.colors.white },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },
  dropdown1BtnStyle: {
    alignItems: 'center',
    width: 108,
    backgroundColor: globalStyles.colors.inputBckgColor,
    borderRadius: 12,
    paddingHorizontal: 14
  },
  dropdown1BtnTxtStyle: {
    color: globalStyles.colors.disableColor,
    alignSelf: 'center',
    position: 'absolute',
    paddingLeft: 5,
    right: 0,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontFamily:globalStyles.fontStyle.primary,
    fontStyle:  globalStyles.fontStyle.primaryStyle,
    fontWeight: globalStyles.fontStyle.fontWeight,
    lineHeight: globalStyles.fontStyle.buttonLineHeight
  },
  image: {
    width: 20,
    height: 20,
  },
 
});
export default Dropdown;
