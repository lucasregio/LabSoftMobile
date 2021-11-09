import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Athletic } from '../../components/AthleticSelectButton';
import colors from '../../styles/colors';
import AthleticList from '../../components/ListAthletic';
import { getAthletics } from '../../services/athletic';
import { useFocusEffect } from '@react-navigation/core';

const AthleticNotification: React.FC = () => {
    const [selected, setSelected] = useState<string>()
    const [listaAtletica, setListaAtletica] = useState<Athletic[]>([]);

    useFocusEffect(
        useCallback(
            () => {
            try{

                const response = getAthletics();
                response.then((res)=>{
                    setListaAtletica(res);
                })
            }catch{
                throw new Error("Não foi possível carregar as tléticas");
            }
      },[selected])
    );
    

    return (
        <View style={styles.container}>
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
