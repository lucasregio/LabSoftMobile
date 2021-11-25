import React from "react"
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles"
import { useNavigation, useNavigationState } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ModalityStackParamList } from "../../routes/modality.routes";
import { ModalityCard, ModalityCardProps } from "./components/ModalityCard";
import { useHeader } from "../../contexts/header";
import { useFocusEffect } from "@react-navigation/native";

type ModalityListNavigation = StackNavigationProp<ModalityStackParamList, 'ModalitiesList'>;


const ModalitiesList: React.FC = () =>{
  const navigation = useNavigation<ModalityListNavigation>()
  
  const { setTitle ,setShowHeader } = useHeader()

  useFocusEffect(() => {
    setShowHeader(true),
    setTitle('Modalidades')
  })

  const modalities: ModalityCardProps[] = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/53/53283.png',
      title: 'Futebol Masculino',
      iconTeam1: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
      iconTeam2: 'http://178.238.233.159:5555/public/images/atleticas/967cd513-0d95-486a-814b-cfc33c9272ae.jpg',
      nextDate: '12 de Outubro'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/53/53283.png',
      title: 'Futebol Feminino',
      iconTeam1: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
      iconTeam2: 'http://178.238.233.159:5555/public/images/atleticas/967cd513-0d95-486a-814b-cfc33c9272ae.jpg',
      nextDate: '13 de Outubro'
    },
    {
      icon: 'https://img.ibxk.com.br/2019/07/26/26171514413327.jpg',
      title: 'League of Legends',
      iconTeam1: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
      iconTeam2: 'http://178.238.233.159:5555/public/images/atleticas/967cd513-0d95-486a-814b-cfc33c9272ae.jpg',
      nextDate: '17 de Outubro'
    },
    {
      icon: 'https://s2.glbimg.com/yCJBIZkVQF69YBZ3sceVu39GS9w=/463x0:1619x1141/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/s/x/qUnJOGTgADPKf1O01v7A/fifa-22-logomarca.png',
      title: 'FIFA 22',
      iconTeam1: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
      iconTeam2: 'http://178.238.233.159:5555/public/images/atleticas/967cd513-0d95-486a-814b-cfc33c9272ae.jpg',
      nextDate: '12 de Novembro'
    },
  ]

  const handleOnPress = () => {
    navigation.navigate('ModalityDetail', {})
  }

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
          title,
          iconTeam1,
          iconTeam2,
          nextDate
        } = partner
        
        return <ModalityCard 
          icon={icon}
          iconTeam1={iconTeam1}
          iconTeam2={iconTeam2}
          title={title}
          nextDate={nextDate}
          onPress={handleOnPress}
          />
      }}
    />
  </View>
}

export default ModalitiesList