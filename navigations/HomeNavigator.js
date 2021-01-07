import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { View, Text, StyleSheet, PermissionsAndroid } from 'react-native';
import HomeScreen from '../screens/HomeScreen';


const Drawer = createDrawerNavigator();

export default function HomeNavigator(){

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
        </Drawer.Navigator>
    )
}