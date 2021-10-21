import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

interface AthleticSelectorProps {
    data: AthleticSelector
}

export interface AthleticSelector {
    id: number,
    atleticaImage: string,
    atleticaName: string,
}

const AthleticSelector: React.FC<AthleticSelectorProps> = (props) =>{
    
  return(
    <View style={styles.container}>
        <TouchableOpacity onPress={() => { alert(props.data.atleticaName) }}>
            <Image style={styles.imageAthletic} source={{ uri: props.data.atleticaImage  }} />
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    imageAthletic:{
        width: 50,
        height: 50,
        borderRadius: 70/2
    }
})

export default AthleticSelector;