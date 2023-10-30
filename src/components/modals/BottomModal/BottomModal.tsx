import React, { useEffect, useState } from 'react';
import {
  Button,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { globalStyles } from '../../../constants/globalStyles';
import CardDetailButton from '../../cardDetailButton/CardDetailButton';
import { cardData } from '../../../data/cardData';
import CustomButton from '../../Button/Button';
import Input from '../../Input/Input';

interface Props {
  text?: string;
}
interface IData {
  image?: ImageSourcePropType;
  text?: string;
  endText?: string;
  bonus?: boolean;
}

function BottomModal({
  setModalVisible,
  isModalVisible,
  toggleModal,
  showPaymentDetails,
  bonus,
}: any) {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState();
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    cardData.filter((datas: any, index) => {
      if (index === detail) {
        setData(datas);
      }
    });
  }, [detail]);

  const [selectedRadioButton, setSelectedRadioButton] = useState<number>(-1);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  const handlePress = (index: number) => {
    setSelectedButtonIndex(index);
  };
  const handleRadioButtonPress = (buttonIndex: number) => {
    setSelectedRadioButton(buttonIndex);
  };
  const bonusData = ['AZN', '%'];
  return (
    <View style={[styles.flexView]}>
      <StatusBar />

      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}
      >
        <View style={[styles.modalContent, bonus && styles.heightDec]}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            {/* <Text style={styles.infoText}>{!open ? 'Kartı seçin' : 'Ödəniş məlumatları'}</Text> */}
            <Text style={styles.infoText}>
              {bonus ? 'Bonus miqdarını təyin et' : !open ? 'Kartı seçin' : 'Ödəniş məlumatları'}
            </Text>

            <View style={{ width: '100%' }}>
              {bonus ? (
                <TextInput
                  placeholder="Miqdar"
                  placeholderTextColor="#B4B6B8"
                  style={styles.bonusIn}
                  // value={''}
                  keyboardType='phone-pad'
                  onChangeText={() => {}}
                />
              ) : !open ? (
                <>
                  {cardData.map((el, index) => {
                    return (
                      <View style={styles.cardButtons}>
                        <CardDetailButton
                          disabled={false}
                          imgIcon={el.image}
                          text={el.text}
                          endText={el.endText}
                          showCheckBox={true}
                          showIcon={true}
                          index={index}
                          showDropDown={false}
                          setDetail={setDetail}
                          selectedRadioButton={selectedRadioButton}
                          onPress={handleRadioButtonPress}
                        />
                      </View>
                    );
                  })}
                  <View style={styles.addCard}>
                    <CardDetailButton
                      text={!open ? 'Kart əlavə et' : 'Odenis ele'}
                      showCheckBox={false}
                      showDropDown={true}
                      showIcon={false}
                      disabled={true}
                      imgIcon={require('../../../assets/images/plusIcon.png')}
                    />
                  </View>
                </>
              ) : (
                <View>
                  <View>
                    <Text style={styles.cardLabel}>Kartı seç</Text>
                    <CardDetailButton
                      disabled={false}
                      imgIcon={data?.image}
                      text={data?.text}
                      endText={data?.endText}
                      showCheckBox={false}
                      showIcon={true}
                      showDropDown={false}
                      setDetail={setDetail}
                    />
                  </View>
                  <View style={styles.paymentView}>
                    <Input
                      onChangeText={() => {}}
                      onBlur={() => {}}
                      value={''}
                      placeholder="8.00"
                      label="Məbləğ"
                      type="text"
                      disabled={true}
                    />
                  </View>
                </View>
              )}
              {bonus && (
                <View style={styles.buttonsView}>
                  {bonusData.map((e, index) => {
                    return (
                      <TouchableOpacity key={index} onPress={() => handlePress(index)}>
                        <View
                          style={[
                            styles.percentButton,
                            {
                              borderColor:
                                selectedButtonIndex === index
                                  ? globalStyles.colors.green
                                  : 'transparent',
                              borderWidth: selectedButtonIndex === index ? 1 : 0,
                            },
                          ]}
                        >
                          <Text style={styles.percentText}>{e}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              )}
              <CustomButton
                onPress={() => {
                  data && setOpen(true);
                }}
                text={!open ? 'Davam et' : 'Ödəniş et'}
                title="Submit"
                type="submit"
                disabled={true}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default BottomModal;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: 'white',
  },
  infoText: {
    margin: 20,
    fontSize: globalStyles.fontStyle.dropDownFontSize,
    fontFamily: globalStyles.fontStyle.primary,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bonusIn: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 24,
  },
  addCard: {
    marginBottom: 10,
  },
  cardButtons: {
    marginBottom: 10,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 450,
    paddingBottom: 20,
  },
  paymentView: {
    marginBottom: 20,
  },
  buttonsView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:24
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
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLabel: {
    fontSize: globalStyles.fontStyle.smallTextFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    color: globalStyles.colors.gray,
    marginBottom: 5,
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: '#bbb',
    borderRadius: 3,
  },
  text: {
    color: '#bbb',
    fontSize: 24,
    marginTop: 100,
  },
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 500,
  },
  heightDec:{
    minHeight: 250,
  }
});
