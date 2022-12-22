/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {StyleSheet} from 'react-native';
import SignUp from './src/screens/Auth/SignUp';
import SignIn from './src/screens/Auth/SignIn';
import AccountDetails from './src/screens/Auth/AccountDetails';
import {ScrollView} from 'native-base';
import ChangePassword from './src/screens/Auth/ChangePassword';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootStackParamList = {
  AccountDetails: undefined;
  ChangePassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <AccountDetails /> */}
      {/* <ChangePassword /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="AccountDetails"
          component={AccountDetails}
          options={{title: 'Account Details'}}
        />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
