import React, { useRef } from 'react';
import { View, Image, StyleSheet, Text, FlatList } from 'react-native';

import colors from '../../styles/colors';
import NewsCard from '../../components/NewsCard';

const AthleticPerfil: React.FC = () => {

  const feedNoticias = [
    {
        id: 1,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 2,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 3,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 4,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 5,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 6,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 7,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 8,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 9,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },{
        id: 10,
        image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
        atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
        atleticaName: 'Tubarões',
        titlePost: 'Amigos se encontram no bar, que dia louco',
    },
]

  return (
        <View style={styles.container}>
          <View style={styles.viewHeader}>
            <Image style={styles.imageAtletica} source={{ uri: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV.jpg' }} />
            <View style={styles.textHeaderView}>
              <Text style={styles.textAtleticName}>Tubarões</Text>
              <View style={styles.viewContato}>
                <Image style={styles.logoInstaContato} source={{ uri: 'https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-instagram-png-fundo-transparente13.png?fit=696%2C696&ssl=1' }} />
                <Text style={styles.textAtleticContact}>@tubaroesuvv</Text>
              </View>
            </View>
          </View>
          <View style={styles.listFeedAtletic}>
            <FlatList
              data={feedNoticias}
              renderItem={ ({item}) => <NewsCard data={item}/> }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
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
