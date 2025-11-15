import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ScanECUScreen from './screens/ScanECUScreen';
import TuneECUScreen from './screens/TuneECUScreen';
import LiveDataScreen from './screens/LiveDataScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ScanECU" component={ScanECUScreen} />
        <Stack.Screen name="TuneECU" component={TuneECUScreen} />
        <Stack.Screen name="LiveData" component={LiveDataScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
