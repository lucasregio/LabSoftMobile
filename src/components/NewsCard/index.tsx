import React from 'react'
import { View, Text, TouchableOpacity, Image, } from 'react-native'
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

const NewsCard: React.FC<INewsCardProps> = (props) =>{
  return(
    <View style={styles.container}>
        <TouchableOpacity>
            <View style={styles.viewImageFeed}>
                <Image style={styles.imagesStyleFeed} source={{ uri: props.data.image }} />
            </View>
            <View style={styles.viewInfo}>
                <View style={styles.viewAtleticaInfo}>
                    <Image style={styles.imageAtleticaFeed} source={{ uri: props.data.atleticaImage }} />
                    <Text style={styles.textAtletica}>{props.data.atleticaName}</Text>
                </View>
                <View style={styles.viewTituloInfo}>
                    <Text style={styles.viewTextTituloInfo}>{props.data.titlePost}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
};

export default NewsCard;
