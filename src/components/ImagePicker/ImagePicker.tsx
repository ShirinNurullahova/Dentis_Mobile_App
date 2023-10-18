import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import Edit from '../../assets/icons/Edit';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

interface Props {}

const ImagePicker = ({}: Props) => {
  const [file, setFile] = useState('');
  console.log(file);
  const onChooseImg = async () => {
    const result = await launchImageLibrary({
      mediaType:'photo',
      presentationStyle: 'fullScreen',
    });

    result?.assets && result?.assets[0]?.uri && setFile(result?.assets[0]?.uri);
  };
  return (
    <TouchableOpacity style={styles.profile} onPress={onChooseImg}>
      {file?.length ? (
        <Image source={{ uri: file }} style={styles.img} />
      ) : (
        <Image source={require('../../assets/images/profile.png')} style={styles.img} />
      )}
      <Edit style={{ position: 'absolute', bottom: 0, right: 0 }} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    borderRadius:80
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  profileName: {
    fontSize: globalStyles.fontStyle.buttonFontSize,
    fontFamily: globalStyles.fontStyle.primary,
    fontWeight: globalStyles.fontStyle.fontWeight,
    color: globalStyles.colors.black,
  },
});

export default ImagePicker;
