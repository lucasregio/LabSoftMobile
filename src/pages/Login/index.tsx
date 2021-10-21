import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Text, View, Keyboard } from "react-native";
import {Picker} from '@react-native-community/picker';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/auth.routes";
import { RegisterSystem } from "../../services/Register";

type RegisterScreenProp = StackNavigationProp<AuthStackParamList, 'Register'>;

const Register: React.FC = () => {
    
    let [registerErrorEmail, setRegisterErrorEmail] = React.useState(false);
    let [registerErrorName, setRegisterErrorName] = React.useState(false);
    let [registerErrorPassword, setRegisterErrorPassword] = React.useState(false);
    let [registerErrorConfirmPassword, setRegisterErrorConfirmPassword] = React.useState(false);
    let [registerErrorAthletic, setRegisterErrorAthletic] = React.useState(false);
    let [registerErrorCourse, setRegisterErrorCourse] = React.useState(false);
    let [registerError, setRegisterError] = React.useState(false);

    let [errorMessage, setErrorMessage] = React.useState('');
    let [email, setEmail] = React.useState('');
    let [name, setName] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [confirmPasswor, setConfirmPassword] = React.useState('');
    let [athletic, setAthletic] = React.useState('');
    let [course, setCourse] = React.useState('');

    const navigation = useNavigation<RegisterScreenProp>();

    function handleGoBack() {
        navigation.goBack();
    }

    async function handleRegister() {
        setRegisterErrorEmail(false)
        setRegisterErrorName(false)
        setRegisterErrorPassword(false)
        setRegisterErrorConfirmPassword(false)
        setRegisterErrorAthletic(false)
        setRegisterErrorCourse(false)

        Keyboard.dismiss();

        if(name === '') {
            setErrorMessage('* Campo obrigatório');
            setRegisterErrorName(true); 
            return;
        }


        if(email === '') {
            setErrorMessage('* Campo obrigatório');
            setRegisterErrorEmail(true); 
            return;
        }

        if(password === '') {
            setErrorMessage('* Campo obrigatório');
            setRegisterErrorPassword(true); 
            return;
        }

        if(confirmPasswor === '') {
            setErrorMessage('* Campo obrigatório');
            setRegisterErrorConfirmPassword(true); 
            return;
        }

        if(athletic === '') {
            setErrorMessage('* Campo obrigatório');
            setRegisterErrorAthletic(true); 
            return;
        }

        if(course === '') {
            setErrorMessage('* Campo obrigatório');
            setRegisterErrorCourse(true); 
            return;
        }
        
        try {
            await RegisterSystem(email, name, password, confirmPasswor, athletic, course);
            console.log('Conta registrada com sucesso');
            handleGoBack();
        } catch(e) {
            setErrorMessage('Erro ao realizar cadastro');
            setRegisterError(false)
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Cadastro</Text>
        <Text style={styles.title}>DCE</Text> 

        <View style={styles.inputContainer}>
            <Text style={[styles.label, registerErrorName ? styles.labelError : {}]}>Nome completo</Text>
            <TextInput style={[styles.input, registerErrorName ? styles.inputError : {}]}
                placeholderTextColor='#CCCCCC'
                placeholder="João Paulo"
            onChange={e => setName(e.nativeEvent.text)}/>
             {registerErrorName && <Text style={styles.labelEmailPasswordError}>{errorMessage}</Text>}
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label, registerErrorEmail ? styles.labelError : {}]}>E-mail</Text>
            <TextInput style={[styles.input, registerErrorEmail ? styles.inputError : {}]}
                placeholderTextColor='#CCCCCC'
                placeholder="exemplo@gmail.com"
            onChange={e => setEmail(e.nativeEvent.text)}/>
            {registerErrorEmail && <Text style={styles.labelEmailPasswordError}>{errorMessage}</Text>}
        </View>
 
        <View style={styles.inputContainer}>
            <Text style={[styles.label, registerErrorCourse ? styles.labelError : {}]}>Curso</Text>
            <Picker
                selectedValue={course}
                style={[styles.input, registerErrorCourse ? styles.inputError : {}]}
                onValueChange={(itemValue, itemIndex) => setCourse(itemValue.toString())}
            >
                <Picker.Item label="Ciência da computação" value="cc" />
                <Picker.Item label="Engenharia da computação" value="ec" />
            </Picker>
            {registerErrorCourse && <Text style={styles.labelEmailPasswordError}>{errorMessage}</Text>}
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label, registerErrorAthletic ? styles.labelError : {}]}>Atlética</Text>
            <Picker
                selectedValue={athletic}
                style={[styles.input, registerErrorAthletic ? styles.inputError : {}]}
                onValueChange={(itemValue, itemIndex) => setAthletic(itemValue.toString())}
            >
                <Picker.Item label="Tubarões" value="tu" />
                <Picker.Item label="Lobos" value="lb" />
            </Picker>
            {registerErrorAthletic && <Text style={styles.labelEmailPasswordError}>{errorMessage}</Text>}
        </View>

        
        <View style={styles.inputContainer}>
            <Text style={[styles.label, registerErrorPassword ? styles.labelError : {}]}>Senha</Text>
            <TextInput style={[styles.input, registerErrorPassword ? styles.inputError : {}]}
                secureTextEntry={true}
                placeholderTextColor='#CCCCCC'
                placeholder="*****************"
            onChange={e => setPassword(e.nativeEvent.text)}/>
             {registerErrorPassword && <Text style={styles.labelEmailPasswordError}>{errorMessage}</Text>}
        </View>

        <View style={styles.inputContainer}>
            <Text style={[styles.label, registerErrorConfirmPassword ? styles.labelError : {}]}>Confirmar sua senha</Text>
            <TextInput style={[styles.input, registerErrorConfirmPassword ? styles.inputError : {}]}
                secureTextEntry={true}
                placeholderTextColor='#CCCCCC'
                placeholder="*****************"
            onChange={e => setConfirmPassword(e.nativeEvent.text)}/>
             {registerErrorConfirmPassword && <Text style={styles.labelEmailPasswordError}>{errorMessage}</Text>}
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={handleRegister}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}

export default Register;
