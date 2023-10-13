import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import { launchImageLibrary } from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';

const About = () => {
  const [file, setFile] = useState('');
  const onChooseImg = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      presentationStyle: 'fullScreen',
    });

    result?.assets && result?.assets[0]?.uri && setFile(result?.assets[0]?.uri);
  };
  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={onChooseImg} style={styles.imageContent}>
        <View style={styles.centerContent}>
          {file?.length ? (
            <ImageBackground source={{ uri: file }} style={styles.selectedImageContent} />
          ) : (
            <>
              <Image source={require('../../assest/images/plusIcon.png')} />
              <Text style={styles.centerText}>Şəkil əlavə edin</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
      {file?.length > 0 && (
        <View style={styles.rowButton}>
          <TouchableOpacity>
            <View style={styles.buttonNew}>
              <Text style={styles.textNewButton}>Şəkil əlavə et</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onChooseImg}>
            <View style={styles.buttonNew}>
              <Text style={styles.textNewButton}>Şəkli dəyişdir</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.inputs}>
        <Input
          onChange={() => {
            console.log('alert');
          }}
          value=""
          placeholder="Basliq daxil edin"
          label="Basliq"
        />
      </View>
      <View>
        <Text style={styles.titleTextArea}>Melumat</Text>
        <TextInput
          multiline={true}
          numberOfLines={10}
          style={styles.textArea}
          placeholder="Məlumat daxil edin"
        />
      </View>
      <CustomButton
        backgroundColor="rgba(18, 204, 137, 1)"
        onPress={() => {
          console.log('salam');
        }}
        text="Yadda saxla"
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 38,
    paddingHorizontal: 16,
  },
  selectedImageContent: {
    overflow: 'hidden',
    width: 343,
    height: 200,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContent: {
    width: 343,
    height: 200,
    backgroundColor: '#F8F9F9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    alignItems: 'center',
    gap: 12,
  },
  centerText: {
    fontSize: 16,
    color: '#7E7F83',
    fontWeight: '500',
    lineHeight: 24,
    fontStyle: 'normal',
  },
  inputs: {
    marginTop: 24,
  },
  titleTextArea: {
    color: '#7E7F83',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 24,
  },
  textArea: {
    height: 200,
    textAlignVertical: 'top',
    backgroundColor: '#F8F9F9',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 14,
    color: '#7E7F83',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    marginTop: 4,
    width: 343,
  },
  buttonNew: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 12,
    borderColor: '#12CC89',
    width: 167,
    borderWidth: 1,
    alignItems: 'center',
  },
  textNewButton: {
    fontStyle: 'normal',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
    color: '#12CC89',
  },
  rowButton: {
    flexDirection: 'row',
    gap: 9,
    marginTop: 20,
  },
});