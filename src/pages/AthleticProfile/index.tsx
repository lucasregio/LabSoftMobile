import React, { useEffect, useRef, useState } from 'react';
import { View, Image, StyleSheet, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';
import NewsCard from '../../components/NewsCard';
import { FeedStackParamList } from '../../routes/feed.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import * as post from '../../services/post';
import * as athletic from '../../services/athletic';
import Atletica from '../../services/interfaces/Atletica';
import { validateImageLink } from '../../validations';

const AthleticPerfil: React.FC = () => {

  const route = useRoute<RouteProp<FeedStackParamList, 'AthleticProfile'>>();

  const [postagens, setPostagens] = useState<post.Postagem[]>();
  const [atletica, setAtletica] = useState<Atletica>();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {

      let dataPost = await post.getAllPostagensAtletica(route.params.id);
      let dataAtletica = await athletic.get(route.params.id);
      console.log(dataAtletica);
      
      if (isMounted) {
        setPostagens(dataPost);
        setAtletica(dataAtletica);
      }
    }

    fetchData();

    return () => { isMounted = false };
  }, [])

  return (
        <View style={styles.container}>
          <View style={styles.viewHeader}>
            <Image style={styles.imageAtletica} source={validateImageLink(atletica?.logo)} />
            <View style={styles.textHeaderView}>
              <Text style={styles.textAtleticName}>{atletica?.nome}</Text>
              <View style={styles.viewContato}>
                <Image style={styles.logoInstaContato} source={{ uri: 'https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente13.png?fit=696%2C696&ssl=1' }} />
                <Text style={styles.textAtleticContact}>{''}</Text>
              </View>
            </View>
          </View>
          <View style={styles.listFeedAtletic}>
            <FlatList
              data={postagens}
              renderItem={ ({item}) => <NewsCard postagem={item}/> }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  viewHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingTop: 30,
    paddingBottom: 20,
    
  },
  imageAtletica:{
    width: 150,
    height: 150,
    borderRadius: 150/2,
    borderWidth: 3,
    borderColor: colors.purple
  },
  textHeaderView:{
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAtleticName:{
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: 'Nunito_400Regular'
  },
  textAtleticContact:{
    fontSize: 12,
    color: '#8177DB',
    fontFamily: 'Nunito_400Regular'
  },
  listFeedAtletic:{
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  logoInstaContato:{
    width: 20,
    height: 20,
    marginRight: 5
  },
  viewContato:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AthleticPerfil;
