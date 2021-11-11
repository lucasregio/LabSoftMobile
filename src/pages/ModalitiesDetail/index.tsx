
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { View, Text, Image, FlatList } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { useHeader } from "../../contexts/header"
import { ModalityStackParamList } from "../../routes/modality.routes"
import colors from "../../styles/colors"
import { ChampionshipDetails } from "./components/ChampionshipDetails"
import { GameDetails } from "./components/GameDetails"
import { ModalityDetailHeader } from "./components/ModalityDetailHeader"
import { styles } from "./styles"

type ModalityDetailNavigation = StackNavigationProp<ModalityStackParamList, 'ModalityDetail'>;

export interface ModalityDetailProps {
  
}

export const ModalityDetail: React.FC<ModalityDetailProps> = ({}) => {
  const { setShowHeader } = useHeader()

  const [isRightSelected, setIsRightSelected] = useState(true)

  const modalityImage = 'https://cdn-icons-png.flaticon.com/512/53/53283.png'
  const modalityName = 'Futebol Masculino'

  useFocusEffect(() => {
    setShowHeader(false)
  })

  const navigation = useNavigation<ModalityDetailNavigation>()

  const onClickArrow = () => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor='#fff'
      />
      <ModalityDetailHeader
        imageUrl={modalityImage}
        modalityName={modalityName}
        onClickArrow={onClickArrow}
        onClickBell={()=>{}}
        selected={isRightSelected? 'right' : 'left'}
        onClickSwap={(val) => setIsRightSelected(val)}
      />
      {
        isRightSelected ?
        <ChampionshipDetails/>
        :
        <GameDetails/>
      }
      
    </SafeAreaView>
  )
}

// const GamesList = () => {

//   const games = [
//     {
//       team1: {
//         name: 'Tubaroes',
//         image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg', 
//       },
//       team2: {
//         name: 'Piratas',
//         image: 'https://cdn.discordapp.com/attachments/618634415064481802/907777569418539018/14657301_385144591875435_1423023521807662739_n.png', 
//       },
//       date: 'Quinta feira - 17:30',
//       local: 'Ginasio UVV'
//     },
//     {
//       team1: {
//         name: 'Tubaroes',
//         image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg', 
//       },
//       team2: {
//         name: 'Piratas',
//         image: 'https://cdn.discordapp.com/attachments/618634415064481802/907777569418539018/14657301_385144591875435_1423023521807662739_n.png', 
//       },
//       date: 'Quinta feira - 17:30',
//       local: 'Ginasio UVV'
//     },
//     {
//       team1: {
//         name: 'Tubaroes',
//         image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg', 
//       },
//       team2: {
//         name: 'Piratas',
//         image: 'https://cdn.discordapp.com/attachments/618634415064481802/907777569418539018/14657301_385144591875435_1423023521807662739_n.png', 
//       },
//       date: 'Quinta feira - 17:30',
//       local: 'Ginasio UVV'
//     },
//   ]
  
//   return (
//     <View>
//       <FlatList
//         data={games}
//         renderItem={()=>(
//           <View

//           >

//           </View>
//         )}
//       />
//     </View>
//   )
// }