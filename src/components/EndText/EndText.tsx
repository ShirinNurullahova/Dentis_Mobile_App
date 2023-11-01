import React, { Dispatch, SetStateAction, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import BottomModal from '../modals/BottomModal/BottomModal';

interface Props {
  text: string;
  diffText: string;
  size: boolean;
  setDataPrivacyState:Dispatch<SetStateAction<boolean>>
}

const EndTextComponent = ({ text, diffText, size, setDataPrivacyState }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const handlePress = () => {
      setModalVisible(!isModalVisible);  
  };

  
  return (
    <View>
      <Text style={[styles.all, size && styles.size]}>
        {text}
        <TouchableOpacity onPress={handlePress}>
          <Text style={[styles.difText]}>{diffText}</Text>
        </TouchableOpacity>
      </Text>
      <BottomModal  setDataPrivacyState={setDataPrivacyState}   bonus={false} termOfUse={true} toggleModal={handlePress} setModalVisible={setModalVisible} isModalVisible={isModalVisible}/>

    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    textAlign: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    fontSize: globalStyles.fontStyle.endTextFontSize,
    fontWeight: globalStyles.fontStyle.textFontWeight,
    fontFamily: globalStyles.fontStyle.primary,
  },
  size: {
    fontSize: globalStyles.fontStyle.smallTextFontSize,
  },
  difText: {
    color: globalStyles.colors.green,
  },
});

export default EndTextComponent;
