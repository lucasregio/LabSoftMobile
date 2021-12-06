import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../../../styles/colors";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import {Card, CardProps} from "./Card";
import * as modality from '../../../../services/modalityDetails';
import Jogo from "../../../../services/interfaces/Jogo";

export interface GameDetailsProps {

}

export const GameDetails: React.FC<GameDetailsProps> = ({}) => {

  const [jogos, setJogos] = useState<Jogo[]>();

  useEffect(() => {
    const fetchData = async () => {
      // TODO: Remover o ID statico do campeonato e colocar o ID do campeonato dado pela rota.
      const data = await modality.getAllJogosEmAndamento('fc5533ee-a86d-466a-b593-79dc9e3f6e8c');
      
      setJogos(data);
    }

    fetchData();
  }, [])
  
  return (
    <ScrollView>
      <View style={styles.container}>
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
        <Text style={styles.label}>Próximos Jogos</Text>
        <FlatList
        style={styles.gameList} 
        data={jogos}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({item}) => <View style={{marginTop: 6}}>
              <Card
                  data={item.data_jogo}
                  leftTeam={item.time1}
                  rightTeam={item.time2}
                  local={item.local}
                  horario={item.hora_jogo}
              />  
              </View>
        }
        keyExtractor={(item, index) => `${index}`}
      />
      </View>
    </ScrollView>
  )
} 
