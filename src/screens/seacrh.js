import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Search = ({ onLocationSelect }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  const handleOnPress = (data, details) => {
    onLocationSelect({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });
  };

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={handleOnPress}
        query={{
          key: 'AIzaSyAYEkl4Du9zEcm1X2u1HEepM8DAuk9dYUk',
          language: 'en',
          types: '(cities)',
        }}
        textInputProps={{
          onFocus: () => setSearchFocused(true),
          onBlur: () => setSearchFocused(false),
          style: {
            width: '100%',
            height: 50,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: searchFocused ? '#007AFF' : '#ccc',
            paddingHorizontal: 10,
          },
        }}
        listViewDisplayed={searchFocused}
        fetchDetails
        enablePoweredByContainer={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    left: 10,
    right: 10,
    zIndex: 1,
  },
});

export default Search;
