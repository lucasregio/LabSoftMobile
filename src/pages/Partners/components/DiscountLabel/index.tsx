import React from "react"
import { View, Text, Image } from "react-native"
import colors from "../../../../styles/colors"
import { styles } from "./styles"

export interface DiscountLabelProps {
  discountPercent: number
}

const DiscountLabel: React.FC<DiscountLabelProps> = ({ 
  discountPercent,
}) => {
  return <View 
    style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {`${discountPercent}% desconto`}
          </Text>
        </View>
    <Image 
      style={styles.backGroundImage} 
      resizeMode='contain' 
      source={{uri: 'https://cdn.discordapp.com/attachments/488087473348542486/902721659377696768/unknown.png'}} 
    />
  </View>
}


export default DiscountLabel