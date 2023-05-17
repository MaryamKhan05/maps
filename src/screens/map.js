
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Search from './seacrh';

const Maps = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {selectedLocation && (
          <Marker
            coordinate={{
              latitude: selectedLocation.latitude,
              longitude: selectedLocation.longitude,
            }}
            title="Selected Location"
          />
        )}
      </MapView>
      <Search onLocationSelect={handleLocationSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Maps;
