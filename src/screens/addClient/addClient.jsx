import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import TextComponent from '../../components/Text/Text';
import InvitedBy from '../../components/InvitedBy/InvitedBy';
import ClientDetail from '../../components/clientDetail/ClientDetail';
import { globalStyles } from '../../constants/globalStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import THEMES from '../../..';
import { G } from 'react-native-svg';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';

const AddClient = () => {
  const doctors = useMemo(() => {
    return [
      { label: 'As', value: 'as' },
      { label: 'Artur', value: 'artur' },
      { label: 'Nick', value: 'nick' },
      { label: 'Tural', value: 'tural' },
      { label: 'John', value: 'John' },
      { label: 'Tony', value: 'tony' },
      { label: 'James', value: 'james' },
      { label: 'John', value: 'John' },
      { label: 'John', value: 'John' },
      { label: 'John', value: 'John' },
    ];
  }, []);

  const process = useMemo(() => {
    return [
      { label: 'As', value: 'as' },
      { label: 'Artur', value: 'artur' },
      { label: 'Nick', value: 'nick' },
      { label: 'Tural', value: 'tural' },
      { label: 'John', value: 'John' },
      { label: 'Tony', value: 'tony' },
      { label: 'James', value: 'james' },
      { label: 'John', value: 'John' },
      { label: 'John', value: 'John' },
      { label: 'John', value: 'John' },
    ];
  }, []);
 
  const [collapse, setCollapse] = useState(false);
  const [currentValue, setCurrentValue] = useState(doctors[0]);

  const [processSelect, setprocessSelect] = useState(false);
  const [currentProcessValue, setCurrentProcessValue] = useState(process[0]);

  return (
    <ScrollView>
      <View style={styles.addClient}>
        <TextComponent text="Müştəri daxil et" />
        <InvitedBy text={'tərəfindən daxil olunub'} name="Sənan Rzayev" />
        <ClientDetail
          clientName={'Nermin Memmedov'}
          doctorName={'ilham Huseynov'}
          number={'+994707034368'}
          date={'12.06.1995'}
        />
        <View style={styles.dropDownContainer}>
          <Text style={styles.dlabel}>Həkim</Text>
          <DropDownPicker
            style={styles.dropDownn}
            items={doctors}
            open={collapse}
            setOpen={(isOpen) => setCollapse(isOpen)}
            value={currentValue?.value}
            onSelectItem={(val) => {
              setCurrentValue(val);
            }}
            placeholder="Ilham Hüseynov"
            placeholderStyle={styles.placeholderStyle}
            showTickIcon={false}
            labelStyle={styles.labelStyles}
            closeAfterSelecting={true}
            dropDownContainerStyle={{ borderWidth: 0, zİndex: 999999 }}
            listParenxtContainerStyle={{
              backgroundColor: '#F8F9F9',
            }}
            listItemLabelStyle={{ color: '#B4B6B8' }}
          />
        </View>

        <View style={styles.dropDownContainer}>
          <Text style={styles.dlabel}>Prosesi seç</Text>
          <DropDownPicker
            style={[styles.dropDownn]}
            items={process}
            open={processSelect}
            setOpen={(isOpen) => setprocessSelect(isOpen)}
            value={currentProcessValue?.value}
            onSelectItem={(val) => {
              setCurrentProcessValue(val);
            }}
            placeholder="Ilham Hüseynov"
            placeholderStyle={styles.placeholderStyle}
            showTickIcon={false}
            labelStyle={styles.labelStyles}
            closeAfterSelecting={true}
            dropDownContainerStyle={{
              borderWidth: 0,
              zİndex: 999999,
            }}
            listParenxtContainerStyle={{
              backgroundColor: '#F8F9F9',
            }}
            listItemLabelStyle={{ color: '#B4B6B8' }}
          />
        </View>
        <Input
          onChangeText={() => {}}
          value={''}
          placeholder="Məbləği daxil edin"
          label="Məbləğ"
          type="numeric"
        />
        <View style={styles.bottomsView}>
          <Text style={styles.dlabel}>Bonus miqdarı</Text>
          <View style={styles.buttonsView}>
            <TouchableOpacity>
              <View style={styles.percentButton}>
                <Text style={styles.percentText}>5%</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.percentButton}>
                <Text style={styles.percentText}>5%</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.percentButton}>
                <Text style={styles.percentText}>5%</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.percentButton}>
                <Text style={styles.percentText}>Manual</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.totalamount}>
          <Text style={styles.totalamountLeft}>Ümumi ödəniləcək məbləğ</Text>
          <Text style={styles.totalamountRight}>8.00 AZN</Text>
        </View>
        <View style={styles.buttonView}>
          <CustomButton
            onPress={() => {}}
            text="Davam et"
            title="Submit"
            type="submit"
            disabled={true}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addClient: {
    // flex: 1,
    justifyContent: 'space-between',
    //  alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 100,
    paddingBottom: 40,
  },
  bottomsView: {
    marginTop: 20,
  },
  buttonsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  percentText: {
    color: globalStyles.colors.green,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
  },
  percentButton: {
    paddingHorizontal: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    paddingVertical: 14,
    borderRadius: globalStyles.borderRadius,
  },
  dlabel: {
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    marginBottom: 5,
    color: globalStyles.colors.gray,
    fontFamily: globalStyles.fontStyle.primary,
  },
  dropDownContainer: {
    marginTop: 20,
  },
  dropDownn: {
    color: globalStyles.colors.inputBckgColor,
    borderWidth: 0,
    zIndex: 0,
  },
  dropDownBottomBorder: {
    color: globalStyles.colors.inputBckgColor,
    borderColor: globalStyles.colors.green,
    borderWidth: 1,
  },
  labelStyles: {
    color: globalStyles.colors.disableColor,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: 20,
    zIndex: 1,
  },
  placeholderStyle: {
    color: globalStyles.colors.disableColor,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    lineHeight: 20,
  },
  totalamount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.colors.inputBckgColor,
    padding: 16,
    marginTop: 10,
  },
  totalamountLeft: {
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    color: globalStyles.colors.disableColor,
    fontFamily: globalStyles.fontStyle.primary,
  },
  totalamountRight: {
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    color: globalStyles.colors.green,
    fontWeight: globalStyles.fontStyle.primaryWeight,
  },
  buttonView: {
    marginTop: 20,
  },
});
export default AddClient;
