import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import { AuthStackParamList } from '../../routes/auth.routes';
import {testeAxios} from '../../services/teste';


import { styles } from './styles';

type LoginScreenProp = StackNavigationProp<AuthStackParamList, 'Login'>;

const Login: React.FC = () => {
    let [email, setEmail] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [signInError, setSignInError] = React.useState(false);
    let [errorMessage, setErrorMessage] = React.useState('');
    const { signIn } = useAuth();

    const navigation = useNavigation<LoginScreenProp>();

    function tested(){
        testeAxios(email,password);
    }

    function handleNavigateToForgotPassowrd() {
        setSignInError(false);
        navigation.navigate('ForgotPassword');
    }

    function handleNavigateToRegister() {
        setSignInError(false);
        navigation.navigate('Register');
    }

    async function handleSignIn() {
        setSignInError(false);
        Keyboard.dismiss();

        if (email === '' || password === '') {
            setSignInError(true);
            setErrorMessage('* Campo(s) obrigatório(s)');
            return;
        }

        try {
            await signIn(email, password);
        }
        catch (e) {
            setSignInError(true);
            setErrorMessage('E-mail e/ou senha inválidos');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
            <Text style={styles.title}>DCE</Text>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, signInError ? styles.labelError : {}]}>Login</Text>
                <TextInput style={[styles.input, signInError ? styles.inputError : {}]}
                    placeholder="aluno@uvvnet.com.br"
                    value={email}
                    onChange={e => setEmail(e.nativeEvent.text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, signInError ? styles.labelError : {}]}>Senha</Text>
                <TextInput style={[styles.input, signInError ? styles.inputError : {}]}
                    secureTextEntry={true}
                    placeholderTextColor='#CCCCCC'
                    placeholder="••••••••••••••••••"
                    value={password}
                    onChange={e => setPassword(e.nativeEvent.text)}
                />
                {signInError && <Text style={styles.labelEmailPasswordError}>{errorMessage}</Text>}
            </View>

            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={handleNavigateToForgotPassowrd}>
                    <Text style={styles.linkText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleSignIn}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleNavigateToRegister}>
                <Text style={styles.linkText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
