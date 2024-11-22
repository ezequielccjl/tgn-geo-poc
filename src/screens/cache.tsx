import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import Geolocation, {
  GeolocationResponse,
} from '@react-native-community/geolocation';
import {useFocusEffect} from '@react-navigation/native';

const Cache = () => {
  const [location, setLocation] = useState<GeolocationResponse>();
  const date = new Date(location?.timestamp ?? 0);
  const formattedDate = date.toLocaleString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.log({position});
        setLocation(position);
      },
      () => {
        console.log('Error al obtener ubicacion');
      },
      {enableHighAccuracy: true},
    );
  };

  useFocusEffect(
    useCallback(() => {
      getLocation();
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text>HORA: {formattedDate}</Text>
      <Text>Latitud: {location?.coords.latitude}</Text>
      <Text>Longitud: {location?.coords.longitude}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});

export default Cache;
