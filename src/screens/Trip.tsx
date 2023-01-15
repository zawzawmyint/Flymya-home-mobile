import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <View
      style={{
        marginHorizontal: 0,
        shadowColor: 'black',
        shadowOffset: {width: 30, height: 30},
      }}>
      <View style={styles.subHeader}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>From</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mandalay</Text>
        </View>
      </View>

      <View style={styles.subHeader}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>To</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Yangon</Text>
        </View>
      </View>

      <View style={styles.subHeader}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>Departure</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Wed, 17 Feb 2021
          </Text>
        </View>
      </View>

      <View style={styles.subHeader}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>Pax</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            1 Adult, 0 Child, 1 Room
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: 'white',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 1,
    paddingHorizontal: 20,
    marginBottom: 1,
  },
});

function SettingsScreen() {
  return (
    <View
      style={{
        marginHorizontal: 0,
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 10},
      }}>
      <View style={styles.subHeader}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>From</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Mandalay</Text>
        </View>
      </View>

      <View style={styles.subHeader}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>To</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Yangon</Text>
        </View>
      </View>

      <View style={styles.subHeader}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>Departure</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Wed, 17 Feb 2021
          </Text>
        </View>
      </View>

      <View style={styles.subHeader}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            padding: 10,
          }}>
          <Text style={{fontSize: 16}}>Pax</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            1 Adult, 0 Child, 1 Room
          </Text>
        </View>
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Trip() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {textTransform: 'none'},
          }}
          style={{
            marginHorizontal: 10,
            borderRadius: 15,
            shadowColor: '#30acd9',
            borderColor: '#30acd9',
            shadowRadius: 15,
            minHeight: 290,
          }}>
          <Tab.Screen name={'One Way'} component={HomeScreen} />
          <Tab.Screen name="Round Trip" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
