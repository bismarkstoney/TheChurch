import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import ButtomTabs from './src/navigation/bottomTabs';
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ButtomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
