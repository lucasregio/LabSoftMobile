import React from 'react';
import { View, Image, StyleSheet, Text, FlatList, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const PostDetails: React.FC = () => {

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
        <SafeAreaView style={styles.container}>
          <Image style={styles.imagePost} source={{ uri: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV.jpg' }} />
          <ScrollView>
          <View style={styles.viewNot}>
            <Image style={styles.iconAthletic} source={{ uri: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV.jpg' }} />
            <View style={styles.textIconAthletic}>
                <Text>Tubaroes</Text>
                <Text>01 set 2021</Text>
            </View>
          </View>
          <View style={styles.contentPost}>
            <Text style={styles.tittlePost}>Premio do time de League Of Legends da uvv - Tubarões, parabéns time!</Text>
            <Text style={styles.contentDetailsPost}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
          </ScrollView>
          
          
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FFFFFF'
  },
  imagePost:{
      height: '40%',
      width: '100%',
      resizeMode: 'cover',
      backgroundColor: 'blue'
  },
  iconAthletic:{
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 10
  },
  viewNot:{
      padding: 10,
      flexDirection: 'row',
  },
  textIconAthletic:{
      justifyContent: 'center'
  },
  tittlePost:{
      fontSize: 24,
      fontWeight: 'bold'
  },
  contentPost:{
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10
  },
  contentDetailsPost:{
      fontSize: 12,
      paddingTop: 30
  }
})

export default PostDetails;
