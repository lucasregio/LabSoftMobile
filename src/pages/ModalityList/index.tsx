import React, {useEffect,useState} from "react"
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from "./styles"
import { useNavigation, useNavigationState } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { ModalityStackParamList } from "../../routes/modality.routes";
import { ModalityCard, ModalityCardProps } from "./components/ModalityCard";
import { useHeader } from "../../contexts/header";
import {getChampionsByEvent} from "../../services/championshipByEvent"
import { useFocusEffect } from "@react-navigation/native";

type ModalityListNavigation = StackNavigationProp<ModalityStackParamList, 'ModalitiesList'>;

export interface ModalitiesListProps{
  idEvento?: String
}

const ModalitiesList: React.FC<any> = ({...props}) =>{
  const [chanpions, setChanpions] = useState<ModalityCardProps[]>();
  const navigation = useNavigation<ModalityListNavigation>()
  const {params: {idEvento} } = props.route;
  const { setTitle ,setShowHeader } = useHeader();

  useEffect(() => {
    //getChampions();
    let isMounted = true;

    const fetchData = async() => {
      
      let data = await getChampionsByEvent(idEvento);
      //let dataJogos =  
      if (isMounted) setChanpions(data);
    }
    fetchData();
    return () => { isMounted = false };
  }, [])

  useFocusEffect(() => {
    setShowHeader(true),
    setTitle('Modalidades')
  })


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
      data = {chanpions}
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