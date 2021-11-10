import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FeedStackParamList } from '../../routes/feed.routes';
import * as posts from '../../services/post'
import { validateImageLink } from '../../validations'

const PostDetails: React.FC = () => {

    const route = useRoute<RouteProp<FeedStackParamList, 'PostDetails'>>();
    const [post, setPost] = useState<posts.Postagem | null>(null)

    useEffect(() => {
        posts.get(route.params.id).then((response) => {
            const date = new Date(response.created_at);
            response.created_at = date.toDateString()
            console.log("response");
            
            setPost(response);
        }).catch((error) => {console.log(error);})
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.imagePost} source={validateImageLink(post?.imagem)} />
            <ScrollView>
                <View style={styles.viewNot}>
                    <Image style={styles.iconAthletic} source={validateImageLink(post?.imagem_autor)} />
                    <View style={styles.textIconAthletic}>
                        <Text>{post?.nome_autor}</Text>
                        <Text>{post?.created_at}</Text>
                    </View>
                </View>
                <View style={styles.contentPost}>
                    <Text style={styles.tittlePost}>{post?.titulo}</Text>
                    <Text style={styles.contentDetailsPost}>{post?.descricao}</Text>
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
