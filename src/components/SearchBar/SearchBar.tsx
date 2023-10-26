import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import Edit from '../../assets/icons/Edit';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';

const SearchBarComponent = () => {
  const [searchQuery, setSearchQUery] = useState();
  const handleSearch = (query: any) => {
    setSearchQUery(query);
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.flex}>
        <View style={styles.iconCenter}>
          <Image source={require('../../assets/images/searchIcon.png')} style={styles.image} />
        </View>
        <TextInput
          placeholder="Axtar"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
        />
      </View>
      <View>
        <Image source={require('../../assets/images/filterIcon.png')} style={styles.imageFilter} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    searchContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        paddingHorizontal: 20,
        width:'100%',
        marginBottom:30
    },
  searchInput: {
    // paddingHorizontal: 20,
    // marginHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: globalStyles.colors.inputBckgColor,
    borderRadius: 12,
     width:'80%'
  },
  flex: {
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#F8F9F9',
    // marginHorizontal: 20,
  },
  iconCenter: {
    // paddingTop: 10,
    paddingLeft: 14,
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
     marginRight:10
  },
  imageFilter:{
    width: 20,
    height: 20,
    marginLeft:10
  }
});
export default SearchBarComponent;
