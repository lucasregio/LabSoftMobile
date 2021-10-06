import React from "react";
import { useNavigation } from '@react-navigation/core';
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";

type AthleticScreenProp = StackNavigationProp<RootStackParamList, 'Athletic'>;

// import { Container } from './styles';



const Athletic: React.FC = () => {
        const navigation = useNavigation<AthleticScreenProp>();
        const Logo = require('../../assets/uvv-icon.png');
        const imagem = {borderRadius: 80, width:80, margin: 15, }; 
        const imagemLogo = {  width: 100 };

          function handleGoBack() {
              navigation.goBack();
          }

  return (
    <View style = {styles.container}>
          <View style={styles.teste}> <Text style={styles.text}>Selecione sua Atlética</Text> </View>

          
            <View style={styles.body}>
                <View style={imagemLogo}>
                  <img style={imagem} src={Logo} /> 
                  <img style={imagem} src={Logo} /> 
                  <img style={imagem} src={Logo} /> 
                </View>

                <View style={imagemLogo}>
                  <img style={imagem} src={Logo} /> 
                  <img style={imagem} src={Logo} /> 
                  <img style={imagem} src={Logo} /> 
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
