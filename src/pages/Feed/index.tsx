import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons';
import NewsCard from '../../components/NewsCard';

const Feed: React.FC = () => {

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

  return(
    <View style={styles.container}>
        <View style={styles.contentFeed}>
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
            <View style={styles.feedArea}>
                <FlatList
                    data={feedNoticias}
                    renderItem={ ({item}) => <NewsCard data={item}/> }
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    </View>
  )
};

export default Feed;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  contentFeed:{
    marginTop: 10,
  },
  searchBar:{
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    marginBottom: 10
  },
  inputText:{
    height: 40,
    width: '80%',
    paddingLeft: 10
    
  },
  iconStyleSearchBar:{
      marginLeft: 5,
      marginRight: 5
  },
  feedArea:{
      flex: 1
  }
})
