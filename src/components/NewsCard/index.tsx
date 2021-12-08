import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, TouchableOpacity, Image, } from 'react-native'
import { useHeader } from '../../contexts/header';
import { FeedStackParamList } from '../../routes/feed.routes';
import { validateImageLink } from '../../validations';
import { styles } from './styles';
import * as post from '../../services/post'

interface INewsCardProps {
    //data: INewsCard
    postagem: post.Postagem
}

export interface INewsCard {
    id: string,
    image: string,
    atleticaImage: string,
    atleticaName: string,
    titlePost: string
}

type FeedScreenProp = StackNavigationProp<FeedStackParamList, 'Feed'>;

const NewsCard: React.FC<INewsCardProps> = (props) =>{

    const navigation = useNavigation<FeedScreenProp>();
    
    const {setShowHeader} = useHeader();

    function navigateToPost() {
        setShowHeader(false);
        navigation.navigate('PostDetails', {id: props.postagem.id})
    }

    function navigateToProfile() {
        if (props.postagem.usuario.permissao === 'atletica') {
            setShowHeader(false);
            navigation.navigate('AthleticProfile', {id: props.postagem.usuario.id_atletica});
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToPost}>
                <View style={styles.viewImageFeed}>
                    <Image style={styles.imagesStyleFeed} source={validateImageLink(props.postagem?.imagem)} />
                </View>
                <View style={styles.viewInfo}>
                    <TouchableOpacity onPress={navigateToProfile} style={styles.viewAtleticaInfo}>
                        <View style={styles.viewAtleticaInfo}>
                            <Image style={styles.imageAtleticaFeed} source={validateImageLink(props.postagem?.imagem_autor)} />
                            <Text style={styles.textAtletica}>{props.postagem?.nome_autor}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.viewTituloInfo}>
                        <Text style={styles.viewTextTituloInfo}>{props.postagem?.titulo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default NewsCard;
