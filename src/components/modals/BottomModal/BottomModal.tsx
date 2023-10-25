import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { globalStyles } from '../../../constants/globalStyles';
import CardDetail from '../../../screens/cardDetail/cardDetail';
import CardDetailButton from '../../cardDetailButton/CardDetailButton';
import { cardData } from '../../../data/cardData';
import CustomButton from '../../Button/Button';

interface Props {
  text?: string;
}

function BottomModal({ text }: Props) {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.flexView}>
      <StatusBar />
      <View style={styles.btnContainer}>
        <Button title="Show Bottom Sheet" onPress={toggleModal} />
      </View>

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
            <Text style={styles.infoText}>Kartı seçin</Text>

            <View>
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
                  />
                );
              })}

              <CardDetailButton
                text="Kart əlavə et"
                showCheckBox={false}
                showDropDown={true}
                showIcon={false}
                disabled={true}
              />
              <CustomButton
                onPress={() => {}}
                text="Davam et"
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
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 450,
    paddingBottom: 20,
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
