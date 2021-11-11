
import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

interface Team {
  image: string,
  name: string,
  score: number
}

interface Game {
  teamRight: Team,
  teamLeft: Team
}

export interface GameResultCardProps {
  gameOnTop: Game,
  gameOnBottom: Game,
}

export const GameResultCard: React.FC<GameResultCardProps> = ({gameOnTop, gameOnBottom}) => (
  <View style={styles.container} >
    <View style={styles.scoreContainer}>
      <View style={styles.teamContainer}>
        <Image style={styles.image} source={{uri: gameOnTop.teamLeft.image, width:25, height: 25 }} />
        <Text style={styles.teamLabel}>
          {gameOnTop.teamLeft.name}
        </Text>
      </View>
      <Text style={styles.scoreText}>
        {gameOnTop.teamLeft.score + ' : ' + gameOnTop.teamRight.score}
      </Text>
      <View style={styles.teamContainer}>
        <Image style={styles.image} source={{uri: gameOnTop.teamRight.image, width:25, height: 25 }} />
        <Text style={styles.teamLabel}>
        {gameOnTop.teamRight.name}
        </Text>
      </View>
    </View>
    <View style={styles.divider} />
    <View style={styles.scoreContainer}>
      <View style={styles.teamContainer}>
        <Image style={styles.image} source={{uri: gameOnBottom.teamLeft.image, width:25, height: 25 }} />
        <Text style={styles.teamLabel}>
          {gameOnBottom.teamLeft.name}
        </Text>
      </View>
      <Text style={styles.scoreText}>
        {gameOnBottom.teamLeft.score + ' : ' + gameOnBottom.teamRight.score}
      </Text>
      <View style={styles.teamContainer}>
        <Image style={styles.image} source={{uri: gameOnBottom.teamRight.image, width:25, height: 25 }} />
        <Text style={styles.teamLabel}>
        {gameOnBottom.teamRight.name}
        </Text>
      </View>
    </View>
  </View>
)