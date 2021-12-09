import React, { useEffect, useState } from "react";
import { Text, View, Keyboard, Alert, Dimensions, Platform, NativeModules } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from "@react-native-picker/picker";

import { styles } from './styles';
import Input from "../../components/Input";
import PasswordToggleInput from "../../components/PasswordToggleInput";

import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import colors from "../../styles/colors";
import { useNavigation } from "@react-navigation/native";
import { Usuario } from "../../services/interfaces/Usuario";
import { getLoginUser } from "../../services/user";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? StatusBarManager.HEIGHT : 20 ; 

const ChangeUser: React.FC = () => {

    const navigation = useNavigation();

    const [usuario, setUsuario] = useState<Usuario>();

    useEffect(() => {
        getLoginUser()
    })

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            
            let data = await getLoginUser();
          
          console.log(data);
          
          if (isMounted) {
            setUsuario(data);
          }
        }
    
        fetchData();
    
        return () => { isMounted = false };
      }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={[styles.headerContainer, { paddingTop: Platform.OS !== 'ios'? STATUSBAR_HEIGHT : 0}]}>
                <View style={styles.header}>
                    <TouchableOpacity
                    onPress={()=>{navigation.goBack()}}
                    >
                        <MaterialCommunityIcons
                            name="arrow-left-thick"
                            color={colors.primary}
                            size={21}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>
                    Perfil
                    </Text>
                </View>
            </View>
        
            <View style={styles.container}>
                    
                <View style={styles.inputHolder}>
                    <Input 
                        label={"Nome completo"}
                        placeholder={usuario?.nome}
                        placeholderTextColor={'#20232E'}
                        editable={false}
                    />
                </View>

                <View style={styles.inputHolder}>
                    <Input 
                        label={"E-mail"}
                        placeholder={usuario?.email}
                        placeholderTextColor={'#20232E'}
                        editable={false}
                    />
                </View>
                
                <View style={styles.inputHolder}>
                    <Text style={[
                        styles.label
                    ]}>
                        Curso
                    </Text>
                    <View style={[
                        styles.inputContainer,
                        {height: 50}
                    ]}>
                        <Picker
                            style={styles.pickerText}
                        >
                            <Picker.Item label="Selecione seu curso" value=""/>
                            <Picker.Item label="Ciência da computação" value="cc" />
                            <Picker.Item label="Engenharia da computação" value="ec" />
                        </Picker>
                    </View>
                </View>

                <View style={styles.inputHolder}> 
                    <Text style={[
                        styles.label
                    ]}>
                        Atlética
                    </Text>
                    <View  style={[
                        styles.inputContainer
                    ]}>
                        <TextInput 
                            placeholderTextColor={usuario ? '#20232E' : '#CCCCCC'}
                            
                            placeholder={usuario ? usuario.atletica.nome :'Selecionar atlética'}
                            editable={false}
                            style={styles.inputAthletic}
                        />
                        
                    </View>
                </View>

                <View style={styles.inputHolder}>
                    <PasswordToggleInput 
                        label='Senha'
                    />
                </View>

                <View style={styles.inputHolder}>
                    <PasswordToggleInput 
                        label='Confirme sua senha'
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default ChangeUser;
