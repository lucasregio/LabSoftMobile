import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/auth.routes";

type ForgotPasswordScreenProp = StackNavigationProp<AuthStackParamList, 'ForgotPassword'>;

const ForgotPassword: React.FC = () => {
    
    const navigation = useNavigation<ForgotPasswordScreenProp>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Informe seu e-mail para enviarmos as instruções para recuperação de senha</Text>
            </View>
            
            <View style={styles.body}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput style ={styles.input}
                    placeholder="aluno@uvvnet.com.br"/>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={()=>{console.log('Recuperar')}}>Recuperar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ForgotPassword;
