import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import POCStack from './src/navigation/stack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <POCStack />
    </NavigationContainer>
  );
}

export default App;
