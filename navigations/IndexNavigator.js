import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import screens
import LoginScreen from '../screens/LoginScreen';
import HomeNavigator from './HomeNavigator';
import Header from '../components/Header';

// Create an instance of te stack navigations

const Stack = createStackNavigator();


export default function IndexNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'screen'}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeNavigator}
                        options={ ({navigation}) => {
                            return {
                                headerTitle: () => (<Header navigation={navigation} />),
                            }
                        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
