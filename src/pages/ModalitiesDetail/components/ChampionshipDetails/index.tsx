import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getAllJogos } from "../../../../services/modalityDetails";
import colors from "../../../../styles/colors";
import { GameResultCard, GameResultCardProps } from "../GameResultCard";
import Jogo from "../../../../services/interfaces/Jogo";
import { styles } from "./styles";

export interface ChampionshipDetailsProps {
  idCampeonato:string;
}

export const ChampionshipDetails: React.FC<ChampionshipDetailsProps> = ({idCampeonato}) => {
  const [gameResult, setGameResult] = useState<GameResultCardProps[]>();
  const [quartas, setQuartas] = useState<Jogo[]>([]);
  const [semiFinal, setSemiFinal] = useState<Jogo[]>([]);
  const [final, setFinal] = useState<Jogo[]>([]);

/*   useEffect(()=>{
    console.log("Quartas: ",quartas );
    console.log("Semi Final: ",semiFinal );
    console.log("Final: ",final );
  },[quartas, semiFinal, final, ]); */

  const fetchData = async() => {  
    let data = await getAllJogos(idCampeonato);
    setQuartas(data.filter(x=>x.id_fase == '2'));
    setSemiFinal(data.filter(x=>x.id_fase == '3'));
    setFinal(data.filter(x=>x.id_fase == '4'));

    
    //😨
    if(data.length%2 == 1){
      data.push(data[data.length-1]);
    }
    const parsedGames: GameResultCardProps[] = data.map((game, index) => {
      if(index%2 != 0) return null
      else {
        const game2 = data[index+1]
        return { 
          gameOnTop: {
            teamLeft:{
              name: game.time1.nome,
              image: game.time1.logo,
              score: game.placar1
            },
            teamRight:{
              name: game.time2.nome,
              image: game.time2.logo,
              score: game.placar2
            },
          },
          gameOnBottom: {
            teamLeft:{
              name: game2.time1.nome,
              image: game2.time1.logo,
              score: game2.placar1
            },
            teamRight:{
              name: game2.time2.nome,
              image: game2.time2.logo,
              score: game2.placar2
            }
          }
        } as GameResultCardProps
    }}).filter(x => x != null) as GameResultCardProps[]
    setGameResult(parsedGames);
  }

  useEffect(() => {
    fetchData();
  },[]);

  /*
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

  */
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
        data={gameResult}
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
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderLabel}>Final</Text>
          </View>
        </View>

        <View style={styles.tableContent}>
          
          <View style={styles.column}>
            {
              quartas.map((x,index) => 
                <GameCard 
                  key={''+index}
                  time1={{
                    logo: x.time1.logo,
                    nome: x.time1.nome,
                    score: x.placar1
                  }}
                  time2={{
                    logo: x.time2.logo,
                    nome: x.time2.nome,
                    score: x.placar2
                  }}
                />
              )
            }
          </View>
          <View style={styles.column}>
            {
              semiFinal.map((x,index) => 
                <GameCard
                  key={''+index}
                  time1={{
                    logo: x.time1.logo,
                    nome: x.time1.nome,
                    score: x.placar1
                  }}
                  time2={{
                    logo: x.time2.logo,
                    nome: x.time2.nome,
                    score: x.placar2
                  }}
                />
              )
            }
          </View>
          <View style={styles.column}>
            {
              final.map((x,index) => 
                <GameCard
                  key={''+index}
                  time1={{
                    logo: x.time1.logo,
                    nome: x.time1.nome,
                    score: x.placar1
                  }}
                  time2={{
                    logo: x.time2.logo,
                    nome: x.time2.nome,
                    score: x.placar2
                  }}
                />
              )
            }
          </View>

        </View>

        
        </View>
      </ScrollView>
      {/* <Text>meu piru</Text> */}
      </View>
  </ScrollView>
} 


const GameCard: React.FC<{
  time1: {
    nome: string,
    logo: string,
    score: number
  },
  time2: {
    nome: string,
    logo: string,
    score: number
  }
}> = ({
  time1,
  time2
}) => {
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
        <Image source={{uri: time1.logo, width: 25, height: 25 }} />
        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 10,
            fontWeight: 'bold',
            marginLeft: 5
          }}
          >
          {time1.nome}
        </Text>
      </View>

      <Text
        style={{
          fontFamily: 'Nunito_400Regular',
          fontSize: 12,
          fontWeight: 'bold',
        }}
        >
        {time1.score}
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
        <Image source={{uri: time2.logo, width: 25, height: 25 }} />
        <Text
          style={{
            fontFamily: 'Nunito_400Regular',
            fontSize: 10,
            fontWeight: 'bold',
            marginLeft: 5
          }}
          >
          {time2.nome}
        </Text>
      </View>

      <Text
        style={{
          fontFamily: 'Nunito_400Regular',
          fontSize: 12,
          fontWeight: 'bold',
        }}
        >
        {time2.score}
      </Text>
    </View>
    </View>
  )
}