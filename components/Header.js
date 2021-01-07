import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { DrawerActions } from '@react-navigation/native';



export default function Header({navigation}) {
    const  menuHandler = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    };

    return (
        <View style={styles.header}>
            <Icon name="bars" size={28} onPress={menuHandler} color="#900"/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        height: '100%',
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
    },

    icon: {
        position: 'relative',
        flexDirection:'column',
        flex:0.5
    }
})