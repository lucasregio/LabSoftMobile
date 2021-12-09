import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import colors from '../../../styles/colors';
import { FeedStackParamList } from '../../../routes/feed.routes';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type FeedScreenProp = StackNavigationProp<FeedStackParamList, 'AthleticNotification'>;

export interface AthleticSelectButtonProps {
    athletic: Athletic
}

export interface Athletic {
    id: string,
    image: string,
    name: string,
} 

const AthleticButton: React.FC<AthleticSelectButtonProps> = ({athletic}) =>{
    const navigation = useNavigation<FeedScreenProp>();
  return(
    <View style={styles.container}>
        <TouchableOpacity

            onPress={() => {
                navigation.navigate('AthleticProfile', {id: athletic.id})
            }}
            >
            <Image 
                style={styles.imageAthletic} 
                source={{ uri: athletic.image }} 
            />
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 15
    },
    imageAthletic:{
        width: 50,
        height: 50,
        borderRadius: 70/2
    }
})

export default AthleticButton;