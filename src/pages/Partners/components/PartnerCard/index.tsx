import React from "react"
import { View, Text, Image } from "react-native"
import { styles } from "./styles"

export interface PartnerCardProps {
  icon: string,
  title: string,
  description: string,
  discountPercent?: number
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  description, 
  discountPercent,
  icon,
  title
}) => {
  return <View style={styles.card}>
    <View style={styles.titleContainer}>
      <Image style={styles.icon} source={{uri: icon}}  />
      <Text style={styles.title}>{title}</Text>
    </View>
    
    <Text style={styles.description}>
      {description}
    </Text>
  </View>
}

export default PartnerCard
