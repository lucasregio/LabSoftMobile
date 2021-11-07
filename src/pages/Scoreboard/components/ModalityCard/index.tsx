import React from "react"
import { View, Text, Image } from "react-native"
import colors from "../../../../styles/colors"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons'; 

export interface ModalityCardProps {
  icon: string,
  iconTeam1: string,
  iconTeam2: string,
  title: string,
}

const ModalityCard: React.FC<ModalityCardProps> = ({
  icon,
  iconTeam1,
  iconTeam2,
  title
}) => {
  return <View>
    <View style={styles.card}>
      <View style={styles.titleContainer} >
        <Image style={styles.icon} resizeMode='contain' source={{uri: icon}}  />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.arrow}>
        <AntDesign name="right" size={24} color="gray" />
        </View>
      </View>
      <View style={styles.nextGame}>
      <Image style={styles.iconTeam} resizeMode='contain' source={{uri: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg'}}  />
      <Text>VS</Text>
      <Image style={styles.iconTeam} resizeMode='contain' source={{uri: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg'}}  />

      </View>
    </View>
  </View>
}

export default ModalityCard
