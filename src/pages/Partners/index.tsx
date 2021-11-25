import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons"
import React, { useState } from "react"
import { Text,  TextInput, TouchableOpacity, View, FlatList, Image, Dimensions, Modal, TouchableWithoutFeedback, Platform, NativeModules } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import colors from "../../styles/colors"
import { styles } from "./styles"
import PartnerCard, { PartnerCardProps } from "./components/PartnerCard";
import { useNavigation, useNavigationState } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'android' ? StatusBarManager.HEIGHT : 20 ;

const Partners: React.FC = () =>{
  const [isVisible, setIsVisible] = useState(false);
  const [partner, setPartner] = useState<PartnerCardProps>();
  const navigation = useNavigation()
  const partners: PartnerCardProps[] = [
    {
      icon: 'https://cdn.discordapp.com/attachments/488490557320986636/913212218173177896/unknown.png',
      title: 'Skt Mafia',
      description: 'Compre produtos de Skt.Mafia por internet. Temos feminino, camisetas e mais. Faça seu pedido, pague-o online e receba onde quiser.',
      discountPercent: 40
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      title: 'Wizard',
      description:'A Wizard tem o curso de inglês certo para você aprender o idioma e para todas as idades!',
      discountPercent: 43
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488490557320986636/913212965686239262/unknown.png',
      title: 'Icone',
      description:'A Icone Sports é uma empresa especializada na fabricação e comercialização de materiais esportivos personalizados.',
      discountPercent: 15
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902717008708263957/1a2fd0768e74dcb907f04676f1324f54.png',
      title: 'Universidade Paralela',
      description: 'A Universidade Paralela é uma empresa de confecção que produz diversos produtos personalizados para todos aqueles que tem interesse em tirar sua ideia do papel e produzir com qualidade.',
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488490557320986636/913212218173177896/unknown.png',
      title: 'Skt Mafia',
      description: 'Compre produtos de Skt.Mafia por internet. Temos feminino, camisetas e mais. Faça seu pedido, pague-o online e receba onde quiser.',
      discountPercent: 40
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      title: 'Wizard',
      description:'A Wizard tem o curso de inglês certo para você aprender o idioma e para todas as idades!',
      discountPercent: 43
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488490557320986636/913212965686239262/unknown.png',
      title: 'Icone',
      description:'A Icone Sports é uma empresa especializada na fabricação e comercialização de materiais esportivos personalizados.',
      discountPercent: 15
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902717008708263957/1a2fd0768e74dcb907f04676f1324f54.png',
      title: 'Universidade Paralela',
      description: 'A Universidade Paralela é uma empresa de confecção que produz diversos produtos personalizados para todos aqueles que tem interesse em tirar sua ideia do papel e produzir com qualidade.',
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488490557320986636/913212218173177896/unknown.png',
      title: 'Skt Mafia',
      description: 'Compre produtos de Skt.Mafia por internet. Temos feminino, camisetas e mais. Faça seu pedido, pague-o online e receba onde quiser.',
      discountPercent: 40
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      title: 'Wizard',
      description:'A Wizard tem o curso de inglês certo para você aprender o idioma e para todas as idades!',
      discountPercent: 43
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488490557320986636/913212965686239262/unknown.png',
      title: 'Icone',
      description:'A Icone Sports é uma empresa especializada na fabricação e comercialização de materiais esportivos personalizados.',
      discountPercent: 15
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902717008708263957/1a2fd0768e74dcb907f04676f1324f54.png',
      title: 'Universidade Paralela',
      description: 'A Universidade Paralela é uma empresa de confecção que produz diversos produtos personalizados para todos aqueles que tem interesse em tirar sua ideia do papel e produzir com qualidade.',
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488490557320986636/913212218173177896/unknown.png',
      title: 'Skt Mafia',
      description: 'Compre produtos de Skt.Mafia por internet. Temos feminino, camisetas e mais. Faça seu pedido, pague-o online e receba onde quiser.',
      discountPercent: 40
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902716682198454272/573260c3e8104dee2d2e2d7cce813dac.png',
      title: 'Wizard',
      description:'A Wizard tem o curso de inglês certo para você aprender o idioma e para todas as idades!',
      discountPercent: 43
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488490557320986636/913212965686239262/unknown.png',
      title: 'Icone',
      description:'A Icone Sports é uma empresa especializada na fabricação e comercialização de materiais esportivos personalizados.',
      discountPercent: 15
    },
    {
      icon: 'https://cdn.discordapp.com/attachments/488087473348542486/902717008708263957/1a2fd0768e74dcb907f04676f1324f54.png',
      title: 'Universidade Paralela',
      description: 'A Universidade Paralela é uma empresa de confecção que produz diversos produtos personalizados para todos aqueles que tem interesse em tirar sua ideia do papel e produzir com qualidade.',
    },
]

  const handleSelectPartner = (partner: PartnerCardProps) => { 
    setPartner(partner);
    setIsVisible(true);
  }
  return <View
    style={styles.container}
  >
    <View style={[styles.headerContainer, { paddingTop: Platform.OS !== 'ios'? STATUSBAR_HEIGHT : 0}]}>
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
    {
      !!partner &&
        <PartnerCardModal
          icon={partner.icon}
          title={partner.title}
          description={partner.description}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
    }
    <FlatList
      style={styles.cardsListContainer}
      data={partners}
      contentContainerStyle={{paddingBottom: 26}}
      columnWrapperStyle={{justifyContent: 'space-between', marginBottom: 20}}
      numColumns={2}
      renderItem={({item: partner})=>{
        
        const {
          icon, 
          title, 
          description,
          discountPercent, 
        } = partner
        
        const cardSize = (DEVICE_WIDTH - 26*2) / 2

        return <TouchableOpacity
          onPress={handleSelectPartner.bind(null, partner)}
          style={{
            backgroundColor: '#fff',
            width: cardSize,
            height: cardSize,
            borderRadius: 15,
            overflow: 'hidden',
          }}
        >
            <Image source={{uri: icon, width:cardSize, height:cardSize}} width={cardSize} height={cardSize} resizeMode='contain' />
          </TouchableOpacity>
      }}
    />
  </View>
}

export default Partners

export const PartnerCardModal: React.FC<{
  icon: string,
  title: string,
  description: string,
  isVisible: boolean,
  setIsVisible: (isVisible: boolean) => void
}> = ({
  icon,
  title,
  description,
  isVisible,
  setIsVisible
}) =>{
  const cardSize = (DEVICE_WIDTH - 26*2) / 2
  return <Modal
    visible={isVisible}
    animationType="fade"
    transparent={true}
    >
    <TouchableWithoutFeedback
      onPress={()=>{
        setIsVisible(false)
      }}
      >
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <View style={{
            backgroundColor: '#fff',
            width: DEVICE_WIDTH * .8,
            alignItems: 'center',
            paddingHorizontal: 11,
            paddingBottom: 22,
            paddingTop: 60,
            borderRadius: 20,
        }}>
            <View style={{
              width: cardSize,
              height: cardSize,
              borderRadius: 15,
              overflow: 'hidden',
            }}>
              <Image source={{uri: icon, width:cardSize, height:cardSize}} width={cardSize} height={cardSize} resizeMode='contain' />
            </View>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
              {title}
            </Text>
            <Text style={{
              fontSize: 14,
              marginTop: 42,
              marginBottom: 55
            }}>{description}</Text>
            <TouchableOpacity
              onPress={()=>{
                setIsVisible(false)
              }}

              style={{
                backgroundColor: colors.primary,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 20,
                marginTop: 20,
              }}
            >
              <Text style={{color: '#fff', fontWeight: 'bold', padding: 43}}>
                Voltar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </TouchableWithoutFeedback>
  </Modal>
}