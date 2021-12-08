import React, {useEffect, useState} from "react"
import { View, Text, Image } from "react-native"
import colors from "../../../../styles/colors"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationProp, useNavigation } from "@react-navigation/core";
import { AuthStackParamList } from "../../../../routes/auth.routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { ModalityStackParamList } from "../../../../routes/modality.routes";

// nextGame = 0 não possui jogo - 1 possui próximo jogo - 2 não tem próximo jogo, pegar o último.
export interface ModalityCardProps {
  icon: string,
  iconTeam1: string,
  iconTeam2: string,
  title: string,
  nextDate: string,
  idCampeonato?: string,
  nextGame?: number, 
  onPress?: () => void
}

export const ModalityCard: React.FC<ModalityCardProps> = ({
  icon,
  iconTeam1,
  iconTeam2,
  title,
  nextDate,
  idCampeonato,
  nextGame,
  onPress
}) => {
  const [messagem, setMessagem] = useState<string>();

  function getMessage(nextGame: any,nextDate: any){
    let message = '';
    if(nextGame != 0){
      if(nextGame == 1){
        message = `Próximo jogo: ${nextDate}`;
      }
      if(nextGame == 2){
        message = `Último jogo: ${nextDate}`;
      }
    }
    return message
  };

  return <TouchableOpacity onPress={onPress} >
    <View style={styles.card}>
      <View style={styles.titleContainer} >
        <Image style={styles.icon} resizeMode='contain' source={{uri: icon}}  />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.arrow}>
          <AntDesign name="right" size={24} color="gray" />
        </View>
      </View>
      <View style={styles.line}/>
      <View style={styles.nextGame}>
        <Image style={styles.iconTeam} resizeMode='contain' source={{uri: iconTeam1}}  />
        <Text style={{fontWeight:"bold"}}>{nextGame == 0?'':'VS'}</Text>
        <Image style={styles.iconTeam} resizeMode='contain' source={{uri: iconTeam2}}  />
        <Text style={styles.nextDate}>
          {getMessage(nextGame,nextDate)}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
}

