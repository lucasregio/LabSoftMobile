import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Text, View, Keyboard } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/auth.routes";
import { forgotPassword } from "../../services/forgotPassword";

type ForgotPasswordScreenProp = StackNavigationProp<AuthStackParamList, 'ForgotPassword'>;

const ForgotPassword: React.FC = () => {
    
    let [email, setEmail] = React.useState('');
    let [errorMessage, setErrorMessage] = React.useState('');
    let [forgotPasswordError, setForgotPasswordError] = React.useState(false);

    const navigation = useNavigation<ForgotPasswordScreenProp>();

    async function handleForgotPassword() {
        setForgotPasswordError(false)
        Keyboard.dismiss();

        if(email === '') {
            setErrorMessage('* Campo obrigatório');
            setForgotPasswordError(true);
            return;
        }
        
        try {

            await forgotPassword(email);
            console.log('Email de recuperação enviado.');
            navigation.navigate('ResetPassword');

            // handleGoBack();
        } catch(e) {
            setErrorMessage('Usuário não foi encontrado');
            setForgotPasswordError(true)
        }
    }

    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Informe seu e-mail para enviarmos as instruções para recuperação de senha</Text>
            </View>
            
            <View style={styles.body}>
                <View style={styles.inputContainer}>
                    <Text style={[styles.label, forgotPasswordError ? styles.labelError : {}]}>E-mail</Text>
                    <TextInput style ={[styles.input, forgotPasswordError ? styles.inputError : {}]}
                    placeholder="aluno@uvvnet.com.br"
                    onChange={e => setEmail(e.nativeEvent.text)}/>

                    {forgotPasswordError && <Text style={styles.labelInputError}>{errorMessage}</Text>}
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={handleForgotPassword}>Recuperar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ForgotPassword;
