import React, { useEffect, useState } from "react";
import { Text, View, Keyboard, Alert } from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from "@react-native-picker/picker";

import { styles } from './styles';
import Input from "../../components/Input";
import PasswordToggleInput from "../../components/PasswordToggleInput";


const ChangeUser: React.FC = () => {

  return (
    <View style={styles.container}>
      <View style={styles.inputHolder}>
          <Input 
              label={"Nome completo"}
              editable={false}
          />
      </View>

      <View style={styles.inputHolder}>
          <Input 
              label={"E-mail"}
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
                  placeholderTextColor={'#CCCCCC'}
                  placeholder='Selecionar atlética'
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
  );
}

export default ChangeUser;
