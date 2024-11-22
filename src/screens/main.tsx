import {View, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Cache" onPress={() => navigate('Cache')} />
      <Button title="NoCache" onPress={() => navigate('NoCache')} />
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

export default Main;
