/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import IndexNavigator from './navigations/IndexNavigator';
import EchoHelper from './helpers/echo-helper';



export default function App() {

    return (
        <>
            <IndexNavigator />
        </>
    )
}
