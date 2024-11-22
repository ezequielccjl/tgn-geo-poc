import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../screens/main';
import Cache from '../screens/cache';
import NoCache from '../screens/nocache';

const Stack = createStackNavigator();

const POCStack: FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={Main}
      options={{
        title: 'Main',
      }}
    />
    <Stack.Screen
      name="Cache"
      component={Cache}
      options={{
        title: 'Cache',
      }}
    />
    <Stack.Screen
      name="No Cache"
      component={NoCache}
      options={{
        title: 'No Cache',
      }}
    />
  </Stack.Navigator>
);

export default POCStack;
