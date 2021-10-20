import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "../../routes/auth.routes";

export type AthleticScreenProp = StackNavigationProp<AuthStackParamList, 'Athletic'>; 

const Athletic: React.FC<any> = ({...props}) => {
        console.log('props', props)
        const { selectedAthletic, onSelectedAthleticChange } = props.route.params
        const navigation = useNavigation<AthleticScreenProp>();
        const Logo = require('../../assets/uvv-icon.png');
        const imagem = {borderRadius: 80, width:80, margin: 15, }; 
        const imagemLogo = {  width: 100 };

        const handleGoBack = () => {
              navigation.goBack();
          }

  return (
    <View style = {styles.container}>
          <View style={styles.teste}> <Text style={styles.text}>Selecione sua Atlética</Text> </View>

           
            <View style={styles.body}>
                <View style={imagemLogo}>
                  <TouchableOpacity
                    onPress={()=>{
                      onSelectedAthleticChange('Tubaroes')
                      handleGoBack()
                    }}
                  >
                    <img style={imagem} src={Logo} /> 
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=>{
                      onSelectedAthleticChange('Leões')
                      handleGoBack()
                    }}
                  >
                    <img style={imagem} src={Logo} /> 
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=>{
                      onSelectedAthleticChange('Gorilas')
                      handleGoBack()
                    }}
                  >
                    <img style={imagem} src={Logo} /> 
                  </TouchableOpacity>
                </View>
                <View style={imagemLogo}>
                  <TouchableOpacity
                    onPress={()=>{
                      onSelectedAthleticChange('Rinocerontes')
                      handleGoBack()
                    }}
                  >
                    <img style={imagem} src={Logo} /> 
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=>{
                      onSelectedAthleticChange('Lobos')
                      handleGoBack()
                    }}
                  >
                    <img style={imagem} src={Logo} /> 
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={()=>{
                      onSelectedAthleticChange('Monstros')
                      handleGoBack()
                    }}
                  >
                    <img style={imagem} src={Logo} /> 
                  </TouchableOpacity>
                </View>

              
            </View>

          


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} >Selecionar</Text>
                </TouchableOpacity>
            </View>

        </View>
  );
}


export default Athletic;
