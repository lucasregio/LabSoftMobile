import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { View, Text, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { useHeader } from "../../contexts/header"
import { ModalityStackParamList } from "../../routes/modality.routes"
import colors from "../../styles/colors"
import { ChampionshipDetails } from "./components/ChampionshipDetails"
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
        <View style={{paddingTop: 200, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Jogos</Text>
        </View>
      }
      
    </SafeAreaView>
  )
}