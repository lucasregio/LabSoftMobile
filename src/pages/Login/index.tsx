
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../routes';

import { styles } from './styles';

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {

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
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input}
                    secureTextEntry={true}
                    placeholderTextColor='#CCCCCC'
                    placeholder="••••••••••••••••••"
                />
            </View>

            <View style={styles.forgotPasswordContainer}>
                <TouchableOpacity onPress={handleNavigateToForgotPassowrd}>
                    <Text style={styles.linkText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={()=>{console.log('Login')}}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.linkText}>Criar conta</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;
