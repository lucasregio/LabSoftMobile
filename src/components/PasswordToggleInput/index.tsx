import React from "react";
import { View, Text, TouchableOpacity, TextInput, TextInputProps, } from 'react-native'
import colors from "../../styles/colors";
import { StyleSheet } from 'react-native';
import { InputProps } from "../Input";
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

const PasswordToggleInput: React.FC<InputProps> = (props) => {

    const textInputProps = props as TextInputProps;

    let [secureText, setSecureText] = React.useState(true);

    function onIconPress() {
        setSecureText(!secureText);
    }

    return (
        <View>
            <Text style={[styles.label, props.inputError ? styles.labelError : {}]}>
                {props.label}
            </Text>
            <View style={[styles.inputContainer, props.inputError ? styles.inputError : {}]}>
                <TextInput 
                    placeholder='••••••••••••••••••'
                    {...textInputProps}
                    style={[styles.input, {flex: 1}]}
                    placeholderTextColor={'#CCCCCC'}
                    secureTextEntry={secureText}
                />
                <TouchableOpacity onPress={onIconPress}>
                    <Icon 
                        name={secureText ? 'eye-off' : 'eye'} 
                        size={20} style={{paddingRight: 10}} 
                        color={colors.dark}
                    />
                </TouchableOpacity>
            </View>
            
            {props.inputError && <Text style={styles.bottomLabelError}>{props.errorMessage}</Text>}
        </View>
    );
}

export default PasswordToggleInput;

export const styles = StyleSheet.create({

    label: {
        color: colors.primary,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        paddingBottom: 4
    },

    inputContainer: {
        //color: colors.primary,
        borderColor: colors.primary,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },

    input: {
        color: colors.primary,
        //borderColor: colors.primary,
        //borderRadius: 10,
        fontFamily: 'Nunito_400Regular',
        //borderWidth: 1,
        padding: 10,
        //backgroundColor: '#fff',
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
