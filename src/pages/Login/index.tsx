import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text,NativeSyntheticEvent,TextInputChangeEventData  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../routes';

import { styles } from './styles';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {
    let _emailController = '';
    let _passwordController = '';
    let [email, setEmail] = React.useState(_emailController);
    let [password, setPassword] = React.useState(_passwordController);
    let [emailError, setEmailError] = React.useState('');
    let [passwordError, setPasswordError] = React.useState('');
    
    const doLogin = () => {
        console.log('Doing Login...');
        let error: boolean = false;
        if(email != '123@uvvnet.com.br')
        {
            setEmailError('E-mail inválido');
            console.log('E-mail inválido');
            error = true;
        }
        if (password != '123')
        {
            setPasswordError('Senha inválida');
            console.log('Password inválido');
            error = true;
        }

        if(!error){
            setEmailError('');
            setPasswordError('');
        }
    }

    const navigation = useNavigation<loginScreenProp>();

    function handleNavigateToForgotPassowrd() {
        navigation.navigate('ForgotPassword');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard</Text>
            <Text style={styles.title}>DCE</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Login</Text>
                <TextInput style={styles.input}
                    placeholder="aluno@uvvnet.com.br"
                    value={email}
                    onChange={(e : NativeSyntheticEvent<TextInputChangeEventData>): void=>{ setEmail(e.nativeEvent.text)}}
                />
                <Text style={styles.labelError}>{emailError}</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input}
                    secureTextEntry={true}
                    placeholderTextColor='#CCCCCC'
                    placeholder="••••••••••••••••••"
                    value={password}
                    onChange={e => setPassword(e.nativeEvent.text)}
                />
                <Text style={styles.labelError}>{passwordError}</Text>

            </View>

            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={handleNavigateToForgotPassowrd}>
                    <Text style={styles.linkText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={()=>{doLogin()}}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.linkText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
