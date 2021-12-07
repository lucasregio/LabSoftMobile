import React from "react";
import { Image, Text, View } from "react-native";
import Jogo from "../../../../../services/interfaces/Jogo";
import { styles } from "./styles";

export interface CardProps {
  jogo: Jogo,
}

export const Card: React.FC<CardProps> = ({jogo}) => (
  <View style={styles.container} >
    <View style={styles.scoreContainer}>
      <View style={styles.teamContainer}>
        <Image style={styles.image} source={{uri: jogo.time1.logo, width:25, height: 25 }} />
        <Text style={styles.teamLabel}>
          {jogo.time1.nome}
        </Text>
      </View>
      <Text style={styles.scoreText}>
        {jogo.placar1} : {jogo.placar2}
      </Text>
      <View style={styles.teamContainer}>
        <Image style={styles.image} source={{uri: jogo.time2.logo, width:25, height: 25 }} />
        <Text style={styles.teamLabel}>
        {jogo.time2.nome}
        </Text>
      </View>
      <View style={{flexDirection: 'column', flexGrow: 1}}>
        <Text style={styles.detailText}>
          {jogo.data_jogo} - {jogo.hora_jogo}
        </Text>
        <Text style={styles.detailTextLocal}>
          {jogo.local}
        </Text>
      </View>
    </View>
  </View>
)
