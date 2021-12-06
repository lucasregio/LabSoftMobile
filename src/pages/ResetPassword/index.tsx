import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/core';
import { Text, View, Keyboard, Alert } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/auth.routes";
import { resetPassword } from "../../services/resetPassword";
import * as yup from 'yup';
import { useFormik } from 'formik';
import PasswordToggleInput from "../../components/PasswordToggleInput";
import Input from "../../components/Input";

type ResetPasswordScreenProp = StackNavigationProp<AuthStackParamList, 'ResetPassword'>;

const ResetPassword: React.FC = () => {
    
const resetPasswordSchema = yup.object({
    codigo: yup.string().required('* Campo obrigatório'),
    password: yup.string().min(6, 'Senha precisa ter pelo menos 6 caracteres').required('* Campo obrigatório'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Senhas devem ser as mesmas')
        .required('* Campo obrigatório'),
})
    const navigation = useNavigation<ResetPasswordScreenProp>();
    function handleGoBack() {
        navigation.navigate('Login')
    }
    const formikProps = useFormik({
        initialValues: {codigo: '',  password: '', confirmPassword: ''},
        validationSchema: resetPasswordSchema,
        onSubmit: values => handleSubmit(values)
    })

    async function handleSubmit(values: {
        codigo: string,
        password: string,
        confirmPassword: string,
    }) {
        console.log("Erro: ");

        Keyboard.dismiss();

        console.log({values})

        let {
            codigo,
            password,
            confirmPassword,
        } = values;
        
        try {
            let result = await resetPassword(codigo,password);
            console.log("Dados: ",codigo, password,confirmPassword);
            Alert.alert(
                "Sucesso",
                "Senha alterada com sucesso!",
                [
                  { text: "OK", onPress: handleGoBack }
                ]
            );

            // navigation.navigate('Login');

        } catch ({message, status}) {
            console.log("Erro: "+message+" "+status);

            if(status == 401)
            message = "Código inválido"
            Alert.alert(
                "Erro durante o envio dos dados",
                ''+message,
                [
                    { text: "OK", onPress: handleGoBack }
                ]
            );
        }
    }

    return (
        <View style = {styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Alteração de Senha</Text>
            </View>
            
            <View style={styles.body}>
            <View style={styles.inputHolder}>
                <Input 
                    label={"Código"}
                    placeholder="Digite seu nome..."
                    onChangeText={formikProps.handleChange('codigo')}
                    value={formikProps.values.codigo}
                    inputError={formikProps.errors.codigo != undefined && formikProps.touched.codigo}
                    errorMessage={formikProps.errors.codigo}
                />
            </View>
            <View style={styles.inputHolder}>
                <PasswordToggleInput 
                    label='Nova Senha'
                    onChangeText={formikProps.handleChange('password')}
                    value={formikProps.values.password}
                    inputError={formikProps.errors.password != undefined && formikProps.touched.password}
                    errorMessage={formikProps.errors.password}
                />
            </View>
    
            <View style={styles.inputHolder}>
                <PasswordToggleInput 
                    label='Confirmação Nova Senha'
                    onChangeText={formikProps.handleChange('confirmPassword')}
                    value={formikProps.values.confirmPassword}
                    inputError={formikProps.errors.confirmPassword != undefined && formikProps.touched.confirmPassword}
                    errorMessage={formikProps.errors.confirmPassword}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={formikProps.handleSubmit as any}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}

export default ResetPassword;
