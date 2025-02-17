import * as React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import { AppParamList } from './AppParamList';
import { AppStackNavigator } from './Stacks/AppStack/AppStackNavigator';

const Stack = createStackNavigator<AppParamList>();

export function AppNavigator() {
  const customScreenOptions: StackNavigationOptions = {
    gestureEnabled: false,
    headerShown: false,
  };
  return (
    <Stack.Navigator
      initialRouteName='Main'
      screenOptions={customScreenOptions}
    >
      <Stack.Screen name='Main' component={AppStackNavigator} />
    </Stack.Navigator>
  );
}
