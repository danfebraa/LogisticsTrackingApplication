import React, { Component } from 'react';
import {Text, TextInput, View} from 'react-native'

import { globals } from '../assets/styles'

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blurFocus: {
                color: 'black',
                backgroundColor: 'white',
            }
        }
    }

    /**
     * @description Event handlers for the TextInput
     *
     * @onFocusHandler Sets the styles, to active colors.
     * @returns {*}
     */

    onFocusHandler = () => {
        const state = {...this.state};
        state.blurFocus = {
            color: 'white',
            backgroundColor: '#333',
        };
        this.setState(state);
    }

    onBlurHandler = () => {
        const state = {...this.state};
        state.blurFocus = {
            color: 'black',
            backgroundColor: 'white',
        };
        this.setState(state);
    }

    onChangeHandler = () => {

    }


    render = function() {
        return (
            <View style={{...globals.inputWrap}}>
                <TextInput
                    secureTextEntry={this.props.secureTextEntry}
                    value = { this.props.value }
                    /* Given a reference of a function */
                    onChange = {this.props.onChange}
                    placeholder = { this.props.placeholder }
                    style={{  ...this.props.style, ...globals.input, ...this.state.blurFocus }}
                    onFocus = {this.onFocusHandler}
                    onBlur = {this.onBlurHandler}
                />
            </View>
        );
    }
}
export default InputText;

