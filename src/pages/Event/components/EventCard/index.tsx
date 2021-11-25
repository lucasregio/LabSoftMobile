import React from "react"
import { View, Text, Image, TouchableOpacity} from "react-native"
import colors from "../../../../styles/colors"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons'; 

export interface EventCardProps {
  icon: string,
  title: string,
  startDate: string
}

const EventCard: React.FC<EventCardProps> = ({
  icon,
  title,
  startDate
}) => {
  return <View>
    <TouchableOpacity>
    <View style={styles.card}>
      <View style={styles.titleContainer} >
        <View style={styles.gameTitle}>
          <Image style={styles.icon} resizeMode='contain' source={{uri: icon}}  />
        </View>
        <View style={styles.description}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.line}>
          </View>
          <View style={styles.eventStart}>
            <Text>
              Começa {startDate}
            </Text>
          </View>
        </View>
        <AntDesign name="right" size={24} color="gray" style={styles.arrow}/>
      </View>
  </View>
  </TouchableOpacity>
  </View>
}

export default EventCard
