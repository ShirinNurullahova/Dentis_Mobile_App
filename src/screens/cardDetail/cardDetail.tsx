import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation
import CardDetailButton from '../../components/cardDetailButton/CardDetailButton';
import CustomButton from '../../components/Button/Button';
import { cardData } from '../../data/cardData.js';
const CardDetail = () => {
  const [pressedIndex, setPressedIndex] = useState(-1);
  const [showIcon, setShowIcon] = useState(false);
  const handleSubmit = () => {};
  const navigation = useNavigation(); // Initialize navigation object using useNavigation hook
  function pressCard(index: any) {
    setPressedIndex(index); // Set the pressed index
    // Navigate to CardDetail screen if needed
    // navigation.navigate('CardDetail');
  }

  return (
    <View style={styles.cardDetailPage}>
      {cardData.map((el, index) => {
        return (
          <View style={styles.detailB}>
            <CardDetailButton
              disabled={false}
              imgIcon={el.image}
              text={el.text}
              endText={el.endText}
              showDropDown={true}
              showIcon={true}
              onPress={() => pressCard(index)} // Pass the index to the pressCard function
              isPressed={pressedIndex === index}
            />
          </View>
        );
      })}
      <View style={styles.btn}>
        <CustomButton
        onPress={handleSubmit}
        text="Yeni kart əlavə et"
        title="Submit"
        type="submit"
        disabled={true}
      />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  cardDetailPage: {
    flex: 1,
    display: 'flex',
    // alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  detailB:{
    marginBottom:12
  },
  btn:{
    marginTop:12
  }
});
export default CardDetail;
