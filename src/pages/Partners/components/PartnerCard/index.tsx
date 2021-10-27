import React from "react"
import { View, Text, Image } from "react-native"
import colors from "../../../../styles/colors"
import DiscountLabel from "../DiscountLabel"
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
  return <View>
    {
      discountPercent && <DiscountLabel discountPercent={discountPercent} />
    }
    <View style={styles.card}>
      <View style={styles.titleContainer} >
        <Image style={styles.icon} resizeMode='contain' source={{uri: icon}}  />
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  </View>
}

export default PartnerCard
