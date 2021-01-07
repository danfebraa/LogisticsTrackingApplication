import {StyleSheet} from 'react-native'

export const globals = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#eee'
    },

    center: {
        flex: 1,
        justifyContent: 'center',
    },

    row: {
        flexDirection: 'row'
    },

    inputWrap: {
        flex: 1,
        marginHorizontal:2,
        marginVertical: 3,
    },

    input: {
        fontSize: 14,
        borderRadius: 3,
        paddingHorizontal:10,
        paddingVertical: 3,
    }
})