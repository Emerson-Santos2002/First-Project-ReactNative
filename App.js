import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ContainerComponent from './ui/ContainerComponent.js';

export default function App() {
  return (
    <SafeAreaProvider>
      <ContainerComponent />
    </SafeAreaProvider>
  );
}