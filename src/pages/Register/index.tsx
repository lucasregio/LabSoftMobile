
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/core';
import { Text, View, Keyboard, Picker, Alert } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from "@react-native-picker/picker";

import { styles } from './styles';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/auth.routes";
import { RegisterSystem } from "../../services/Register";
import { SafeAreaView } from "react-native-safe-area-context";
import { AthleticSelectorModal } from "./components/AthleticSelectorModal";
import { IAthletic } from "../../components/AthleticSelectButton";

type RegisterScreenProp = StackNavigationProp<AuthStackParamList, 'Register'>;

const registerSchema = yup.object({
    email: yup.string().required('* Campo obrigatório'),
    name: yup.string().required('* Campo obrigatório'),
    password: yup.string().min(6, 'Senha precisa ter pelo menos 6 caracteres').required('* Campo obrigatório'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Senhas devem ser as mesmas')
        .required('* Campo obrigatório'),
    athletic: yup.string().required('* Campo obrigatório'),
    course: yup.string().required('* Campo obrigatório'),
})

const Register: React.FC<RegisterScreenProp> = () => {
  
    let [registerError, setRegisterError] = useState(false);
    let [isVisibleAthleticModal, setIsVisibleAthleticModal] = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPasswor, setConfirmPassword] = useState('');
    let [selectedAthletic, setSelectedAthletic] = useState<IAthletic>()
    // let [athletic, setAthletic] = useState('');
    let [course, setCourse] = useState('');

    const navigation = useNavigation<RegisterScreenProp>();
    const route = useRoute<RouteProp<AuthStackParamList, 'Register'>>();

    const formikProps = useFormik({
        initialValues: {email: '', name: '', password: '', confirmPassword: '', athletic: '', course: ''},
        validationSchema: registerSchema,
        onSubmit: values => handleSubmit(values)
    })

    useEffect(() => {
        if (route.params?.athleticName) {
            formikProps.setFieldValue('athletic', route.params?.athleticName);
        }
    }, [route.params?.athleticName])

    function handleGoBack() {
        navigation.goBack();
    }
    function handleSelectAthletic() {
        setIsVisibleAthleticModal(true)
    }
    async function handleRegister() {
        setRegisterError(false)

        Keyboard.dismiss();

        console.log({values})

        let {
            email,
            name,
            password,
            confirmPassword,
            athletic,
            course
        } = values;
        
        try {
            await RegisterSystem(email, name, password, confirmPasswor, selectedAthletic?.name || '', course);
            console.log('Conta registrada com sucesso');
            handleGoBack();
        } catch(e) {
            setErrorMessage('Erro ao realizar cadastro');
            setRegisterError(true)
        }
    }

    function onSelectAthletic (selected: string) {
        console.log(selected)
        setAthletic(selected)
    }

    function onClose () {
        setIsVisibleAthleticModal(false)
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <AthleticSelectorModal 
                onSelect={setSelectedAthletic} 
                onClose={onClose}  
                isVisible={isVisibleAthleticModal} 
                />
        
            <View style={styles.container}>
            <Text style={styles.text}>Cadastro</Text>
            <Text style={styles.title}>DCE</Text> 

            <View style={styles.inputContainer}>
                <Text style={[styles.label, registerError ? styles.labelError : {}]}>Nome completo</Text>
                <TextInput style={[styles.input, registerError ? styles.inputError : {}]}
                    placeholder="João Paulo"
                    onChange={e => setName(e.nativeEvent.text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, registerError ? styles.labelError : {}]}>E-mail</Text>
                <TextInput style={[styles.input, registerError ? styles.inputError : {}]}
                    placeholderTextColor='#CCCCCC'
                    placeholder="exemplo@gmail.com"
                    onChange={e => setEmail(e.nativeEvent.text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, registerError ? styles.labelError : {}]}>Curso</Text>
                <Picker
                    style={[styles.input, registerError ? styles.inputError : {}]}
                    onValueChange={(itemValue, itemIndex) => setCourse(itemValue)}
                    >
                    <Picker.Item label="Ciência da computação" value="cc" />
                    <Picker.Item label="Engenharia da computação" value="ec" />
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                    
                <Text style={[styles.label, registerError ? styles.labelError : {}]}>Atlética</Text>
                <View  style={[styles.input, styles.selectAthleticContainer ]}>
                    {!!selectedAthletic ?
                        <Text style={styles.label} >
                            {selectedAthletic.name}
                        </Text>
                    :
                    <Text style={styles.selectAthleticPlaceholder}>
                        Selecionar atlética
                    </Text>    
                    }
                    <TouchableOpacity
                        onPress={handleSelectAthletic}
                        >
                        <Text style={styles.selectAthleticButtonText}>
                            {
                                !!selectedAthletic?
                                'Trocar'
                                :
                                'Selecionar'
                                
                            }
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

            
            <View style={styles.inputContainer}>
                <Text style={[styles.label, registerError ? styles.labelError : {}]}>Senha</Text>
                <TextInput style={[styles.input, registerError ? styles.inputError : {}]}
                    secureTextEntry={true}
                    placeholderTextColor='#CCCCCC'
                    placeholder="*****************"
                    onChange={e => setPassword(e.nativeEvent.text)}/>
            </View>

            <View style={styles.inputContainer}>
                <Text style={[styles.label, registerError ? styles.labelError : {}]}>Confirmar sua senha</Text>
                <TextInput style={[styles.input, registerError ? styles.inputError : {}]}
                    secureTextEntry={true}
                    placeholderTextColor='#CCCCCC'
                    placeholder="*****************"
                    onChange={e => setConfirmPassword(e.nativeEvent.text)}/>
                {registerError && <Text style={styles.labelEmailPasswordError}>{errorMessage}</Text>}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={handleRegister}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    );
}

export default Register;
