import React from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native';
import colors from '../../styles/colors';
import { StyleSheet } from 'react-native';

export interface InputProps extends TextInputProps {
    label?: string
    inputError?: boolean
    errorMessage?: string
}

const Input: React.FC<InputProps> = (props) => {

    const textInputProps = props as TextInputProps;

    return (
        <View>
            <Text style={[styles.label, props.inputError ? styles.labelError : {}]}>
                {props.label}
            </Text>
            <TextInput 
                placeholderTextColor={'#CCCCCC'}
                {...textInputProps}
                style={[styles.input, props.inputError ? styles.inputError : {}, props.style]}
            />
            {props.inputError && <Text style={styles.bottomLabelError}>{props.errorMessage}</Text>}
        </View>
    )
}

export default Input;

export const styles = StyleSheet.create({

    label: {
        color: colors.primary,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        paddingBottom: 4
    },

    input: {
        color: colors.primary,
        borderColor: colors.primary,
        borderRadius: 10,
        fontFamily: 'Nunito_400Regular',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 15
    },

    bottomLabelError: {
        color: colors.pink,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        paddingBottom: 4,
        paddingTop: 5
    },

    inputError: {
        borderColor: colors.pink
    },

    labelError: {
        color: colors.pink
    },
});
