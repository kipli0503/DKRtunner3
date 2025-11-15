import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/DashboardScreen';
import TuneScreen from './screens/TuneScreen';
import ScanScreen from './screens/ScanScreen';
import LiveScreen from './screens/LiveScreen';
import SettingsScreen from './screens/SettingsScreen';
import { I18nProvider } from './src/i18n';

const Stack = createStackNavigator();

export default function App() {
  return (
    <I18nProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Tune" component={TuneScreen} />
          <Stack.Screen name="Scan" component={ScanScreen} />
          <Stack.Screen name="Live" component={LiveScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nProvider>
  );
}
