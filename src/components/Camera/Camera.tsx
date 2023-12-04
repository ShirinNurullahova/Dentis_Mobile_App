import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Linking, Text, Image } from 'react-native';
import { Camera, CameraPosition, useCameraDevice } from 'react-native-vision-camera';
import CameraIcon from '../../assets/icons/CameraIcon';
import CloseIcon from '../../assets/icons/CloseIcon';
import FlipCamera from '../../assets/icons/FlipCamera';
import Back from '../../assets/icons/Back';
import CustomButton from '../Button/Button';

const CameraNew = ({ setShowCamera, file, setFile }: any) => {
  const camera = useRef<Camera>(null);

  const [showCameraNew, setShowCameraNew] = useState(true);
  const [changeSide, setChangeSide] = useState<CameraPosition>('back');

  const device = useCameraDevice(changeSide);

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
   
      if (permission === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto();

      setFile('file://' + photo.path);
      setShowCameraNew(false);
    }
  };

  if (device == null) {
    return <Text>Camera not available</Text>;
  }
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {showCameraNew ? (
        <View style={{ flex: 1, position: 'relative', marginTop: 50 }}>
          <>
            <Camera
              photo={true}
              ref={camera}
              device={device}
              isActive={showCameraNew}
              style={{ height: 375, width: '100%' }}
            />
            <TouchableOpacity
              onPress={() => capturePhoto()}
              style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}
            >
              <View style={styles.bgImage}>
                <CameraIcon />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: 'absolute', top: -40, left: 16 }}
              onPress={() => {
                setShowCamera(false);
              }}
            >
              <View>
                <CloseIcon />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: 'absolute', bottom: 50, right: 83 }}
              onPress={() => {
                setChangeSide(changeSide === 'back' ? 'front' : 'back');
              }}
            >
              <View>
                <FlipCamera />
              </View>
            </TouchableOpacity>
          </>
        </View>
      ) : (
        <>
          {file !== '' ? (
            <>
              <TouchableOpacity
                style={{ position: 'absolute', top: -40, left: 16 }}
                onPress={() => {
                  setShowCamera(false);
                }}
              >
                <View>
                  <CloseIcon />
                </View>
              </TouchableOpacity>
              <Image style={{ width: '100%', height: 375 }} source={{ uri: `${file}` }} />
              <TouchableOpacity
                style={{ position: 'absolute', top: 40, left: 16 }}
                onPress={() => {
                  setChangeSide(changeSide === 'back' ? 'front' : 'back');
                  setFile('');
                  setShowCameraNew(true);
                }}
              >
                <View>
                  <Back />
                </View>
              </TouchableOpacity>
              <View style={styles.buttons}>
                <TouchableOpacity style={{ width: '50%' }}>
                  <View>
                    <CustomButton
                      onPress={() => {
                   
                        setFile('');
                        setShowCameraNew(true);
                      }}
                      text="Yenidən çək"
                      title="Submit"
                      type="submit"
                      disabled={false}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '50%' }}>
                  <View>
                    <CustomButton
                      onPress={() => {
                
                        setShowCamera(false);
                      }}
                      text="Davam et"
                      title="Submit"
                      type="submit"
                      disabled={true}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </>
          ) : null}
        </>
      )}
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
  buttons: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    flexDirection: 'row',
    gap: 9,
    paddingHorizontal: 16,
    width: '100%',
  },
});
