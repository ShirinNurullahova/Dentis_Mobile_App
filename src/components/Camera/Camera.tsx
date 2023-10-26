import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import CameraIcon from '../../assets/icons/CameraIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import FlipCamera from '../../assets/icons/FlipCamera';

const CameraNew = ({ setShowCamera }) => {
  const device = useCameraDevice('back');

  return (
    <View style={{ flex: 1 }}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <TouchableOpacity style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}>
        <View style={styles.bgImage}>
          <CameraIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ position: 'absolute', top: 50, right: 50 }}
        onPress={() => {
          setShowCamera(false);
        }}
      >
        <View>
          <CloseIcon />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ position: 'absolute', bottom: 50, left: 50 }}>
        <View>
          <FlipCamera />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CameraNew;

const styles = StyleSheet.create({
  bgImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(158, 160, 163, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
