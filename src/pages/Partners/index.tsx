import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons"
import React from "react"
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import colors from "../../styles/colors"
import { styles } from "./styles"
import PartnerCard, { PartnerCardProps } from "./components/PartnerCard";
import { useNavigation, useNavigationState } from "@react-navigation/core";

const Partners: React.FC = () =>{
  const navigation = useNavigation()
  const partners: PartnerCardProps[] = [
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      title: 'Wizard',
      description:'A Wizard tem o curso de inglês certo para você aprender o idioma e para todas as idades!',
      discountPercent: 43
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716944875139163/8c314c4047c7cbf57506c9ef892b8892.png',
      title: 'Icone',
      description:'A Icone Sports é uma empresa especializada na fabricação e comercialização de materiais esportivos personalizados.',
      discountPercent: 15
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716985656344627/2dd63f14db99d6df1526b63936126239.png',
      title: 'Skt Mafia',
      description: 'Compre produtos de Skt.Mafia por internet. Temos feminino, camisetas e mais. Faça seu pedido, pague-o online e receba onde quiser.',
      discountPercent: 40
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902717008708263957/1a2fd0768e74dcb907f04676f1324f54.png',
      title: 'Universidade Paralela',
      description: 'A Universidade Paralela é uma empresa de confecção que produz diversos produtos personalizados para todos aqueles que tem interesse em tirar sua ideia do papel e produzir com qualidade.',
    },
]
  return <View
    style={styles.container}
  >
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={()=>{
            navigation.goBack()
          }}
        >
          <MaterialCommunityIcons
              name="arrow-left-thick"
              color={colors.primary}
              size={21}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Parceiros
        </Text>
      </View>
      <View style={styles.searchBar}>
        <FontAwesome5
        style={styles.iconStyleSearchBar}
        name="search"
        color="#483BC4"
        size={25}
        />
        <TextInput style={styles.inputText} placeholder="Buscar notícias, eventos, atléticas..." />
        <TouchableOpacity>
          <FontAwesome5
          style={styles.iconStyleSearchBar}
          name="sliders-h"
          size={25}
          
          />
        </TouchableOpacity>
      </View>
    </View>
    <FlatList
      style={styles.cardsListContainer}
      data={partners}
      renderItem={({item: partner})=>{
        
        const {
          icon, 
          title, 
          description,
          discountPercent, 
        } = partner
        
        return <PartnerCard 
          icon={icon}
          title={title}
          description={description}
          discountPercent={discountPercent}
          />
      }}
    />
  </View>
}

export default Partners