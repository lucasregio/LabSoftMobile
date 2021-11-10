import React, { useCallback, useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, Text } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons';
import NewsCard, { INewsCard } from '../../components/NewsCard';
import { useFocusEffect } from '@react-navigation/core';
import { useHeader } from '../../contexts/header';

import * as post from '../../services/post';

const Feed: React.FC = () => {

    const feedNoticias = [
        {
            id: '1',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id:'2',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id: '3',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id: '4',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id: '5',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id: '6',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id: '7',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id: '8',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id: '9',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },{
            id: '10',
            image: 'https://pbs.twimg.com/media/DHmlqG5XkAA3tYY.jpg',
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
            titlePost: 'Amigos se encontram no bar, que dia louco',
        },
    ]

    //const [posts, setPosts] = useState<INewsCard[]>();
    const [postagens, setPostagens] = useState<post.Postagem[]>();
    const [loadError, setLoadError] = useState<boolean>(false);

    const { setTitle, setShowHeader } = useHeader();

    useFocusEffect(()=>{
        setShowHeader(true); 
        setTitle('Home')
    });

    useEffect(() => {
        post.getAll().then(response => {
            setPostagens(response);
        }).catch(error => {
            setLoadError(true);
        })
    }, [])

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
                {!loadError ?
                    <FlatList
                        data={postagens}
                        renderItem={ ({item}) => <NewsCard id={item.id}/> }
                        keyExtractor={(item, index) => index.toString()}
                    /> :
                    <View style={{alignContent: 'center', alignItems: 'center'}}>
                        <Text>Não foi possivel carregar as notícias.</Text>
                    </View>
                }
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
