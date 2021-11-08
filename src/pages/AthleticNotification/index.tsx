import React, { useState, useEffect } from 'react';
import axios from "axios";
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { Athletic } from '../../components/AthleticSelectButton';
import colors from '../../styles/colors';
import AthleticList from '../../components/ListAthletic';

const AthleticNotification: React.FC = () => {
    const [selected, setSelected] = useState<string>()
    const [listaAtletica, setListaAtletica] = useState<Athletic[]>([]);

    useEffect(() => {
        axios
          .get("http://178.238.233.159:5555/atleticas", {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFiNDU1NTQyLTM5ZmItNGNkNi1iYjk2LTM4ZWYwN2FlYzdkNiIsImlhdCI6MTYzNjMyNjg3NiwiZXhwIjoxNjM2MzM0MDc2fQ.BcqQFyV0ps8V6s4a7JR_LtawRgVlcuP2Uuwd25XaLuo' }} )
          .then((response) => {
              console.log("Retorno : ",response.data)
              let array: Athletic[] = [];
              response.data.forEach((element: any) => {
                  console.log("Elemento: ",element)
                  array.push({
                      id: element.id,
                      image: "http://"+element.logo,
                      name: element.nome,
                  }) 
              });
              setListaAtletica(array)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
    

    return (
        <View style={styles.container}>
            {console.log("o use state ficou: ",listaAtletica)}
            <AthleticList 
                pageTitle={'Altere sua atlética'}
                selectedAthleticId={selected} 
                onSelectItem={({id})=> setSelected(id)}
                list = {listaAtletica} 
                />
            <View style={styles.viewStyleButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    button: {
        backgroundColor: colors.primary,
        height: 45,
        width: 156,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 31,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    viewStyleButton:{
        alignItems: 'center',
        marginBottom: 20
    }
})

export default AthleticNotification;
