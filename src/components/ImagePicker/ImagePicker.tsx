import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import Edit from '../../assets/icons/Edit';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import CameraNew from '../Camera/Camera';

interface Props {}

const ImagePicker = ({ setShowCamera }: Props) => {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState('');
  // console.log(file);
  const onChooseImg = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
    });

    result?.assets && result?.assets[0]?.uri && setFile(result?.assets[0]?.uri);
  };
  return (
    <TouchableOpacity
      style={styles.profile}
      onPress={() => {
        setModal(!modal);
      }}
    >
      {file?.length ? (
        <Image source={{ uri: file }} style={styles.img} />
      ) : (
        <Image source={require('../../assets/images/profile.png')} style={styles.img} />
      )}
      <Edit style={{ position: 'absolute', bottom: 0, right: 0 }} />

      {modal && (
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => {
              setShowCamera(true);
            }}
          >
            <View style={styles.lineModal}>
              <Image source={require('../../assets/images/camera.png')} />
              <Text>Şəkil çəkmək</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onChooseImg}>
            <View style={styles.lineModal}>
              <Image source={require('../../assets/images/pictureIcon.png')} />
              <Text>Qalereyadan yükləmək</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  profileName: {
    fontSize: globalStyles.fontStyle.buttonFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.fontWeight,
    color: globalStyles.colors.black,
  },
  modal: {
    paddingHorizontal: 20,
    paddingVertical: 24,
    position: 'absolute',
    top: 100,
    left: -90,
    width: 250,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#EFEFF1',
    borderRadius: 16,
    gap: 20,
    zIndex: +9,
  },
  lineModal: {
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9F9',
    paddingBottom: 10,
  },
});

export default ImagePicker;
