import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "./Card";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import Jogo from "../../../../services/interfaces/Jogo";
import * as modality from '../../../../services/modalityDetails';

export interface HistoryDetailsProps {

}

export const HistoryDetails: React.FC<HistoryDetailsProps> = ({}) => {

  const [jogos, setJogos] = useState<Jogo[]>();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      // TODO: Remover o ID statico do campeonato e colocar o ID do campeonato dado pela rota.
      let data = await modality.getAllJogosFinalizados('fc5533ee-a86d-466a-b593-79dc9e3f6e8c');

      if (isMounted) setJogos(data);
    }

    fetchData();

    return () => { isMounted = false };
  }, [])

  return <ScrollView
  >
    <View
      style={styles.container}
    >
      <View style={styles.searchBar}>
        <FontAwesome5
        style={styles.iconStyleSearchBar}
        name="search"
        color="#483BC4"
        size={25}
        />
        <TextInput style={styles.inputText} placeholder="Buscar notícias, eventos, atléticas..." />
        <TouchableOpacity>
            <FontAwesome5
            style={styles.iconStyleSearchBar}
            name="sliders-h"
            size={25}
            
            />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Histórico de Jogos</Text>
      <FlatList
        style={styles.gameList} 
        data={jogos}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({item}) => <View style={{marginTop: 6}}>
              <Card
                jogo={item}
              />  
              </View>
        }
        keyExtractor={(item, index) => `${index}`}
      />
      </View>
  </ScrollView>
} 
