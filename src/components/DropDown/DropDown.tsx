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

interface Props {
  title: string;
  onPress: (value:any) => void;
  values: Array<string>;
  type?: "month"
}
const Dropdown = ({ onPress, title, values, type }: Props) => {
    const onSelect = (selectedItem: any, index: number) => {
        if(type == 'month') {
            onPress(index)
        } else {
            onPress(selectedItem)
        }
    }  
    return (
    <View style={styles.dropDownComponent}>
      <Text style={styles.text}>{title}</Text>
      <SelectDropdown
        data={values}
        onSelect={onSelect}
        defaultButtonText={values[0]}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <Image
              source={require('../../assest/images/dropdown.png')}
              width={20}
              height={20}
              style={styles.image}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  dropDownComponent:{
    marginTop:20,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  saveAreaViewContainer: { backgroundColor: '#FFF' },
  viewContainer: { width, backgroundColor: '#FFF' },
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
    backgroundColor: '#F8F9F9',
    borderRadius: 12,
    paddingHorizontal: 14,
  },
  dropdown1BtnTxtStyle: {
    color: '#B4B6B8',
    alignSelf: 'center',
    position: 'absolute',
    paddingLeft: 5,
    right: 0,
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20 /* 133.333% */,
  },
  dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdown1RowTxtStyle: { color: '#444' },
  image: {
    width: 20,
    height: 20,
  },
  text: {
    color: '#9EA0A3',
    fontSize: 13,
    marginBottom:10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18 /* 138.462% */,
  },
});
export default Dropdown;
