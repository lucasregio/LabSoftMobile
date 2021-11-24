import React from "react";
import { FlatList, Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../../../styles/colors";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';
import {Card, CardProps} from "./Card";

export interface GameDetailsProps {

}

export const GameDetails: React.FC<GameDetailsProps> = ({}) => {

  const jogos: CardProps[] = 
    new Array<CardProps>(10).fill({
      leftTeam: {
        icone: "http://178.238.233.159:5555/public/images/atleticas/82672f77-a713-46fa-8a55-640f8ff08522.jpg",
        nome: "Tubarões"
      },
      rightTeam: {
        icone: "http://178.238.233.159:5555/public/images/atleticas/b0c6e430-3a7f-4ff6-a4dd-28094e166895.jpg",
        nome: "Piratas"
      },
      data: "Quinta feira - 17:30"
    })
  ;
  
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

        <FlatList
        style={styles.gameList} 
        data={jogos}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({item}) => <View style={{marginTop: 6}}>
              <Card
                  data={item.data}
                  leftTeam={item.leftTeam}
                  rightTeam={item.rightTeam}
              />  
              </View>
        }
        keyExtractor={(item, index) => `${index}`}
      />

      </View>
    </ScrollView>
  )
} 
