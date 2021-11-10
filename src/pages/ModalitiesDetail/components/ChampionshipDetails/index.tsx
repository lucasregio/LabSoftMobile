import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../../../styles/colors";
import { GameResultCard, GameResultCardProps } from "../GameResultCard";
import { styles } from "./styles";

export interface ChampionshipDetailsProps {

}

export const ChampionshipDetails: React.FC<ChampionshipDetailsProps> = ({}) => {

  const gameResults: GameResultCardProps[] = new Array<GameResultCardProps>(10).fill({
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
  const keysTable = new Array(7)  
  return <ScrollView
  >
    <View
      style={styles.container}
    >
      <Text style={styles.title}>   
        Resultados
      </Text> 
      <FlatList
        style={styles.gameList} 
        data={gameResults}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={
          ({item}) => <GameResultCard
            gameOnBottom={item.gameOnBottom}
            gameOnTop={item.gameOnTop}
          />
        }
        keyExtractor={(item, index) => `${index}`}
      />

      <Text style={styles.title}>
        Tabela
      </Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.tableContainer}
        >
        <View>
        <View style={styles.tableHeaderContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderLabel}>Quartas</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderLabel}>Semifinal</Text>
          </View>
          <View style={[styles.tableHeader, {backgroundColor: colors.primary}]}>
            <Text style={[styles.tableHeaderLabel, {color: '#fff'}]}>Final</Text>
          </View>
        </View>

        <View style={styles.tableContent}>
          
          <View style={styles.column}>
            <GameCard/>
            <GameCard/>
            <GameCard/>
          </View>
          <View style={styles.column}>
            <GameCard/>
            <GameCard/>
          </View>
          <View style={styles.column}>
            <GameCard/>
          </View>

        </View>

        
        </View>
      </ScrollView>
      {/* <Text>meu piru</Text> */}
      </View>
  </ScrollView>
} 

const GameCard = () => {
  return (
    <View
      style={{
        borderColor: '#888',
        backgroundColor: '#fff',
        width: 135,
        padding: 10,
        borderWidth: 1,
      }}
      >
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#888',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
        >
        <Image source={{uri: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV.jpg', width: 25, height: 25 }} />
        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 10,
            fontWeight: 'bold',
            marginLeft: 5
          }}
          >
          Tubaroes
        </Text>
      </View>

      <Text
        style={{
          fontFamily: 'Nunito_400Regular',
          fontSize: 12,
          fontWeight: 'bold',
        }}
        >
        3
      </Text>
    </View>
    
    <View
      style={{
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#888',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
        >
        <Image source={{uri: 'https://cdn.discordapp.com/attachments/618634415064481802/907777569418539018/14657301_385144591875435_1423023521807662739_n.png', width: 25, height: 25 }} />
        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 10,
            fontWeight: 'bold',
            marginLeft: 5
          }}
          >
          Raposas
        </Text>
      </View>

      <Text
        style={{
          fontFamily: 'Nunito_400Regular',
          fontSize: 12,
          fontWeight: 'bold',
        }}
        >
        0
      </Text>
    </View>
    

    </View>
  )
}