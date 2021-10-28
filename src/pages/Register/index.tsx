import React, { useEffect } from "react";
import { useNavigation, useRoute } from '@react-navigation/core';
import { Text, View, Keyboard, Alert } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from "@react-native-picker/picker";

import { styles } from './styles';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/auth.routes";
import { register } from "../../services/Register";
import Input from "../../components/Input";
import PasswordToggleInput from "../../components/PasswordToggleInput";
import { RouteProp } from "@react-navigation/native";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { emailRegex } from "../../validations";

type RegisterScreenProp = StackNavigationProp<AuthStackParamList, 'Register'>;

const registerSchema = yup.object({
    email: yup.string().matches(emailRegex, 'E-mail inválido. Certifique-se de que o e-mail usa um domínio UVV').required('* Campo obrigatório'),
    name: yup.string().required('* Campo obrigatório'),
    password: yup.string().min(6, 'Senha precisa ter pelo menos 6 caracteres').required('* Campo obrigatório'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Senhas devem ser as mesmas')
        .required('* Campo obrigatório'),
    athletic: yup.string().required('* Campo obrigatório'),
    course: yup.string().required('* Campo obrigatório'),
})

const Register: React.FC<RegisterScreenProp> = () => {
    
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

    async function handleSubmit(values: {
        email: string,
        name: string,
        password: string,
        confirmPassword: string,
        athletic: string,
        course: string
    }) {
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
            await register(email, name, password, athletic, course);
            Alert.alert(
                "Cadastro efetuado",
                "Cadastro efetuado om sucesso!",
                [
                  { text: "OK", onPress: handleGoBack }
                ]
            );

        } catch (e) {
            console.log(e);
        }
    }

    return (     
        
        <View style={styles.container}>
            <Text style={styles.text}>Cadastro</Text>
            <Text style={styles.title}>DCE</Text> 
            
            <View style={styles.inputHolder}>
                <Input 
                    label={"Nome completo"}
                    placeholder="Digite seu nome..."
                    onChangeText={formikProps.handleChange('name')}
                    value={formikProps.values.name}
                    inputError={formikProps.errors.name != undefined && formikProps.touched.name}
                    errorMessage={formikProps.errors.name}
                />
            </View>
    
            <View style={styles.inputHolder}>
                <Input 
                    label={"E-mail"}
                    placeholder="Ex: aluno@uvvnet.com.br"
                    onChangeText={formikProps.handleChange('email')}
                    value={formikProps.values.email}
                    inputError={formikProps.errors.email != undefined && formikProps.touched.email}
                    errorMessage={formikProps.errors.email}
                />
            </View>
            
            <View style={styles.inputHolder}>
                <Text style={[
                    styles.label,
                    formikProps.errors.course && formikProps.touched.course ? styles.labelError : {}
                ]}>
                    Curso
                </Text>
                <View style={[
                    styles.inputContainer,
                    formikProps.errors.course && formikProps.touched.course ? styles.inputError : {},
                    {height: 50}
                ]}>
                    <Picker
                        style={styles.pickerText}
                        onValueChange={(itemValue, itemIndex) => formikProps.setFieldValue('course', itemValue)}
                        selectedValue={formikProps.values.course}
                    >
                        <Picker.Item label="Selecione seu curso" value=""/>
                        <Picker.Item label="Ciência da computação" value="cc" />
                        <Picker.Item label="Engenharia da computação" value="ec" />
                    </Picker>
                </View>
                { formikProps.errors.course && formikProps.touched.course && 
                    <Text style={[styles.label, styles.labelError, styles.labelBottom]}>
                        {formikProps.errors.course}
                    </Text>
                }
            </View>
    
            <View style={styles.inputHolder}> 
                <Text style={[
                    styles.label, 
                    formikProps.errors.athletic && formikProps.touched.athletic ? styles.labelError : {}
                ]}>
                    Atlética
                </Text>
                <View  style={[
                    styles.inputContainer,
                    formikProps.errors.athletic && formikProps.touched.athletic  ? styles.inputError : {}
                ]}>
                    <TextInput 
                        placeholderTextColor={'#CCCCCC'}
                        placeholder='Selecionar atlética'
                        value={formikProps.values.athletic}
                        editable={false}
                        style={styles.inputAthletic}
                    />
                    
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('RegisterSelectAthletic')}}
                    >
                        <Text style={styles.selectAthleticButtonText}>
                            { route.params?.athleticId !== undefined ? 'Trocar' : 'Selecionar' }
                        </Text>
                    </TouchableOpacity>
                </View>
                {formikProps.errors.athletic && formikProps.touched.athletic &&
                    <Text style={[styles.label, styles.labelError, styles.labelBottom]}>
                        {formikProps.errors.athletic}
                    </Text>
                }
            </View>
    
            <View style={styles.inputHolder}>
                <PasswordToggleInput 
                    label='Senha'
                    onChangeText={formikProps.handleChange('password')}
                    value={formikProps.values.password}
                    inputError={formikProps.errors.password != undefined && formikProps.touched.password}
                    errorMessage={formikProps.errors.password}
                />
            </View>
    
            <View style={styles.inputHolder}>
                <PasswordToggleInput 
                    label='Confirme sua senha'
                    onChangeText={formikProps.handleChange('confirmPassword')}
                    value={formikProps.values.confirmPassword}
                    inputError={formikProps.errors.confirmPassword != undefined && formikProps.touched.confirmPassword}
                    errorMessage={formikProps.errors.confirmPassword}
                />
            </View>
    
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={formikProps.handleSubmit as any}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Register;
