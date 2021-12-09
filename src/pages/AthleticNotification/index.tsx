import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity ,TextInput, FlatList} from 'react-native';
import AthleticButton,{Athletic} from './AthleticButton';
import { getAthletics } from '../../services/athletic';
import { useFocusEffect } from '@react-navigation/core';
import { useAuth } from '../../contexts/auth';
import { changeAthletic, getUser} from '../../services/auth';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles"
import { useHeader } from '../../contexts/header';


const AthleticNotification: React.FC = () => {
    const { setTitle, setShowHeader } = useHeader();
    const [selected, setSelected] = useState<string>()
    const [listaAtletica, setListaAtletica] = useState<Athletic[]>([]);
    const { user } = useAuth()


    useFocusEffect(()=>{
        setShowHeader(true); 
        setTitle('Atléticas')
    });
    
    useEffect(() => {
        getUser(user.id).then(res => {
            console.log('res', res)
            const {id_atletica: IdAthletic} = res.data as any
            console.log('id_atletica', IdAthletic)
            setSelected(IdAthletic)
        }) 
    }, [])
    
    useFocusEffect(
        useCallback(
            () => {
                try{
                getUser(user.id).then(res => {
                    const {id_atletica: IdAthletic} = res.data as any
                    setSelected(IdAthletic)
                }) 
            }catch{
                throw new Error("Não foi possível carregar as Atléticas");
            }
        },[])
    );
    

    useFocusEffect(
        useCallback(
            () => {
                try{
                
                // getUser(user.id).then(res => {
                //     console.log('res', res)
                //     const {id_atletica: IdAthletic} = res.data as any
                //     console.log('id_atletica', IdAthletic)
                //     setSelected(IdAthletic)
                // }) 

                const response = getAthletics();
                response.then((res)=>{
                    setListaAtletica(res);
                })
            }catch{
                throw new Error("Não foi possível carregar as atléticas");
            }
        },[selected])
    );
    

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.searchBar}>
                    <FontAwesome5
                    style={styles.iconStyleSearchBar}
                    name="search"
                    color="#483BC4"
                    size={25}
                    />
                    <TextInput style={styles.inputText} placeholder="Pesquise uma Atlética" />
                    <TouchableOpacity>
                    <FontAwesome5
                    style={styles.iconStyleSearchBar}
                    name="sliders-h"
                    size={25}
                    
                    />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={listaAtletica}
                showsVerticalScrollIndicator={false}
                numColumns={4}
                renderItem={ ({item: athletic}) => 
                    <AthleticButton 
                        // {...console.log("athletic : ", athletic.id)}
                        // {...console.log("athletic selecionada : ", selectedAthleticId)}
                        athletic={athletic}
                    /> 
                }
                key={'id'}
            />
        </View>
    );
}



export default AthleticNotification;
