import React, { useState, useEffect }from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios';


import {globals} from '../assets/styles';

import InputText from '../components/InputText';

import routes from '../routes/api';
import Echo from 'laravel-echo';
import PusherNative from 'pusher-js/react-native';

import EchoHelper from '../helpers/echo-helper'

export default function LoginScreen({navigation}) {

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const emailChangeHandler = ({nativeEvent}) => {
        setCredentials({...credentials, email: nativeEvent.text});
    }

    const passwordChangeHandler = ({nativeEvent}) => {
        setCredentials({...credentials, password: nativeEvent.text});
    }

    const buttonHandler = () => {

        axios.post(routes.endpoints.login, credentials, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function ({data,status}) {
                if(status === 200) {
                    navigation.replace('HomeScreen')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        EchoHelper.channel('home').listen('NewMessage', ({message}) => {console.log(message)})
    }, [])


    return (
        <>
            <View style={globals.container}>
                <View style={globals.row}>
                    <InputText
                        value={credentials.email}
                        secureTextEntry={false}
                        placeholder="Email"
                        /* Pass by reference the function */
                        onChange={emailChangeHandler}
                    />
                </View>
                <View style={globals.row}>
                    <InputText
                        value={credentials.password}
                        secureTextEntry={true}
                        placeholder="Password"
                        /* Pass by reference the function */
                        onChange={passwordChangeHandler}
                    />
                </View>
                <View style={globals.row}>
                    <View style={globals.inputWrap}>
                        <Button title={'Login'} onPress={buttonHandler} />
                    </View>
                </View>
            </View>

        </>
    );
}