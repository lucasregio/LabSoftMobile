import React from "react";
import { FlatList, Image, Text, View, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../../../styles/colors";
import { GameCard, GameCardProps } from "../GameCard";
import { styles } from "./styles";
import { FontAwesome5 } from '@expo/vector-icons';

export interface HistoryDetailsProps {

}

export const HistoryDetails: React.FC<HistoryDetailsProps> = ({}) => {

  const gameResults: GameCardProps[] = new Array<GameCardProps>(10).fill({
    gameOnBottom:{
      teamLeft:{
        image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV.jpg',
        name: 'Tubaroes',
        score: 3
      },
      teamRight:{
        image: 'https://cdn.discordapp.com/attachments/618634415064481802/907777569418539018/14657301_385144591875435_1423023521807662739_n.png',
        name: 'Raposas',
        score: 0
      }
    },
    gameOnTop:{
      teamLeft:{
        image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV.jpg',
        name: 'Tubaroes',
        score: 3
      },
      teamRight:{
        image: 'https://cdn.discordapp.com/attachments/618634415064481802/907777569418539018/14657301_385144591875435_1423023521807662739_n.png',
        name: 'Raposas',
        score: 0
      }
    }
  })  

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
        data={gameResults}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({item}) => <View style={{marginTop: 6}}>
              <GameCard
                gameOnBottom={item.gameOnBottom}
                gameOnTop={item.gameOnTop}
              />  
              </View>
        }
        keyExtractor={(item, index) => `${index}`}
      />
      </View>
  </ScrollView>
} 
