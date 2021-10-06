import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text,NativeSyntheticEvent,TextInputChangeEventData  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../contexts/auth';
import { AuthStackParamList } from '../../routes/auth.routes';

import { styles } from './styles';

type LoginScreenProp = StackNavigationProp<AuthStackParamList, 'Login'>;

const Login: React.FC = () => {
    let [email, setEmail] = React.useState('');
    let [password, setPassword] = React.useState('');
    let [signInError, setSignInError] = React.useState(false);
    const { signIn } = useAuth();

    const navigation = useNavigation<LoginScreenProp>();

    function handleNavigateToForgotPassowrd() {
        navigation.navigate('ForgotPassword');
    }

    async function handleSignIn() {
        try {
            setSignInError(false);
            await signIn(email, password);
        }
        catch (e) {
            setSignInError(true);
        } 
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
                {signInError && <Text style={styles.labelError}>E-mail e/ou senha inválidos</Text>}
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

            <TouchableOpacity>
                <Text style={styles.linkText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
