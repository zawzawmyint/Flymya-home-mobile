/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const Main = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <App />
    </TailwindProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
