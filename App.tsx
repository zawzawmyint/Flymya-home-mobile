/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Button} from 'react-native';
import {ScrollView} from 'react-native';
import Home from './src/screens/Home';
import Trip from './src/screens/Trip';
import {View} from 'native-base';
import ButtonPage from './src/screens/Button';

const App = () => {
  return (
    <ScrollView>
      <View height={'full'}>
        <Home />
        <Trip />
        <ButtonPage />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default App;
