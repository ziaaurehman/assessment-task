import * as React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeStackNavigator from '@navigation/HomeStack/HomeStackNavigator';
import { RootStackParamList } from '@navigation/HomeStack/HomeParamList';

const Stack = createStackNavigator<RootStackParamList>();

export function AppStackNavigator() {
  const customScreenOptions: StackNavigationOptions = {
    gestureEnabled: false,
    headerShown: false,
  };
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={customScreenOptions}
    >
      <Stack.Screen name={'Home'} component={HomeStackNavigator} />
    </Stack.Navigator>
  );
}
