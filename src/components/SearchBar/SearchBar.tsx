import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import Edit from '../../assets/icons/Edit';
import { Image, StyleSheet, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../constants/globalStyles';
import { Text } from 'react-native';

const SearchBarComponent = () => {
  const [searchQuery, setSearchQUery] = useState();
  const handleSearch = (query: any) => {
    setSearchQUery(query);
  };
  const [filterModal, setFilterModal] = useState(false);
  const toggleFilterModal = () => {
    setFilterModal(!filterModal);
  };
  return (
    <View style={styles.searchContainer}>
      <View style={styles.flex}>
        <View style={styles.iconCenter}>
          <Image source={require('../../assets/images/searchIcon.png')} style={styles.image} />
        </View>
        <TextInput
          placeholder="Axtar"
          placeholderTextColor="#B4B6B8"
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={(query) => handleSearch(query)}
        />
      </View>
      <View style={styles.filterView}>
        <TouchableOpacity onPress={toggleFilterModal}>
          <Image
            source={require('../../assets/images/filterIcon.png')}
            style={styles.imageFilter}
          />
        </TouchableOpacity>
        {filterModal && (
          <View style={styles.filterModal}>
            <View style={styles.filterModalEl}>
              <TouchableOpacity>
                <Text style={[styles.filterText, styles.addColor]}>A-dan Z-yə</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterText}>Ən sondan ən əvvələ</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterText}>Ən əvvəldən ən sona</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterText}>Çox aktivdən az aktivə</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterText}>Az aktivdən çox aktivə</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 30,
  },
  searchInput: {
    // paddingHorizontal: 20,
    // marginHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: globalStyles.colors.inputBckgColor,
    borderRadius: 12,
    width: '80%',
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
    marginRight: 10,
  },
  imageFilter: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  filterView: {
    position: 'relative',
  },
  filterModal: {
    position: 'absolute',
    right: 0,
    top: 50,
    zIndex: 9999999,
    borderRadius: 16,
    backgroundColor: globalStyles.colors.inputBckgColor,
    width: 280,
    height: 312,
  },
  
  filterText: {
    paddingHorizontal:20,
    paddingVertical:18,
    borderBottomColor: globalStyles.colors.borderBottomColor,
    borderBottomWidth: 1,
    fontFamily: globalStyles.fontStyle.primary,
    fontSize: globalStyles.fontStyle.userHomePageFont,
    color:'#31353D'
  },
  addColor: {
    color: globalStyles.colors.green,
  },
});
export default SearchBarComponent;
