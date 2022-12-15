/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import {NativeBaseProvider} from 'native-base';

const Main = () => {
  return (
    <NativeBaseProvider>
      <TailwindProvider utilities={utilities}>
        <App />
      </TailwindProvider>
    </NativeBaseProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
