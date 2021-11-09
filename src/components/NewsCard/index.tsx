import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, TouchableOpacity, Image, } from 'react-native'
import { useHeader } from '../../contexts/header';
import { FeedStackParamList } from '../../routes/feed.routes';
import { styles } from './styles';


interface INewsCardProps {
    data: INewsCard
}

export interface INewsCard {
    id: number,
    image: string,
    atleticaImage: string,
    atleticaName: string,
    titlePost: string
}

type FeedScreenProp = StackNavigationProp<FeedStackParamList, 'Feed'>;

const NewsCard: React.FC<INewsCardProps> = (props) =>{

    const navigation = useNavigation<FeedScreenProp>();
    
    const {setShowHeader} = useHeader();

    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.viewImageFeed}>
                    <Image style={styles.imagesStyleFeed} source={{ uri: props.data.image }} />
                </View>
                <View style={styles.viewInfo}>
                    <TouchableOpacity onPress={ () => { setShowHeader(false); navigation.navigate('AthleticProfile'); } } style={styles.viewAtleticaInfo}>
                        <View style={styles.viewAtleticaInfo}>
                            <Image style={styles.imageAtleticaFeed} source={{ uri: props.data.atleticaImage }} />
                            <Text style={styles.textAtletica}>{props.data.atleticaName}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.viewTituloInfo}>
                        <Text style={styles.viewTextTituloInfo}>{props.data.titlePost}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default NewsCard;
