import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons"
import React from "react"
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import colors from "../../styles/colors"
import { styles } from "./styles"
import ModalityCard, { ModalityCardProps } from "./components/ModalityCard";
import { useNavigation, useNavigationState } from "@react-navigation/core";

const Modalities: React.FC = () =>{
  const modalities: ModalityCardProps[] = [
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      title: 'Wizard',
      iconTeam1: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      iconTeam2: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png'
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716944875139163/8c314c4047c7cbf57506c9ef892b8892.png',
      title: 'Icone',
      iconTeam1: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      iconTeam2: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png'
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716985656344627/2dd63f14db99d6df1526b63936126239.png',
      title: 'Skt Mafia',
      iconTeam1: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      iconTeam2: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png'
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902717008708263957/1a2fd0768e74dcb907f04676f1324f54.png',
      title: 'Universidade Paralela',
      iconTeam1: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      iconTeam2: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png'
    },
]
  return <View
    style={styles.container}
  >
    <View style={styles.headerContainer}>
      <View style={styles.searchBar}>
        <FontAwesome5
        style={styles.iconStyleSearchBar}
        name="search"
        color="#483BC4"
        size={25}
        />
        <TextInput style={styles.inputText} placeholder="Pesquise uma modalidade" />
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
      data={modalities}
      renderItem={({item: partner})=>{
        
        const {
          icon, 
          title
        } = partner
        
        return <ModalityCard 
          icon={icon}
          iconTeam1={icon}
          iconTeam2={icon}
          title={title}
          />
      }}
    />
  </View>
}

export default Modalities