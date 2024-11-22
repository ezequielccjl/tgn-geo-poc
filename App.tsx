import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';

import POCStack from './src/navigation/stack';
import Geolocation from '@react-native-community/geolocation';

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'whenInUse',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <POCStack />
    </NavigationContainer>
  );
}

export default App;
