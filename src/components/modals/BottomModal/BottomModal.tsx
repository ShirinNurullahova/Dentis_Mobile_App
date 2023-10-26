import React, { useEffect, useState } from 'react';
import { Button, ImageSourcePropType, StatusBar, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { globalStyles } from '../../../constants/globalStyles';
import CardDetail from '../../../screens/cardDetail/cardDetail';
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
}

function BottomModal({ setModalVisible, isModalVisible, toggleModal, showPaymentDetails }: any) {
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
  return (
    <View style={styles.flexView}>
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
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            <Text style={styles.infoText}>{!open ? 'Kartı seçin' : 'Ödəniş məlumatları'}</Text>

            <View style={{ width: '100%' }}>
              {!open ? (
                <>
                  {cardData.map((el, index) => {
                    return (
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
                      />
                    );
                  })}

                  <CardDetailButton
                    text={!open ? 'Kart əlavə et' : 'Odenis ele'}
                    showCheckBox={false}
                    showDropDown={true}
                    showIcon={false}
                    disabled={true}
                  />
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
  paymentView:{
    marginBottom:20
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
});
