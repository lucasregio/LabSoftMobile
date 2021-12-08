import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import colors from '../../styles/colors';

export interface AthleticSelectButtonProps {
    athletic: Athletic
    isSelected: boolean
    onSelect?: (athletic: Athletic) => void
}

export interface Athletic {
    id: string,
    image: string,
    name: string,
} 

const AthleticSelectButton: React.FC<AthleticSelectButtonProps> = ({athletic, isSelected, onSelect }) =>{
    
  return(
    <View style={styles.container}>
        <TouchableOpacity
            style={{justifyContent:'center', alignItems: 'center'}}
            onPress={() => {
                console.log('onSelect', athletic)
                onSelect && onSelect(athletic)
            }}
            >
            {isSelected && <View style={styles.selected}/>}
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
        paddingTop: 20
    },
    imageAthletic:{
        width: 50,
        height: 50,
        borderRadius: 70/2,
    },
    selected:{
        width: 58,
        height: 58,
        borderRadius: 70/2,
        borderWidth: 4,
        borderColor: colors.purple,
        position: 'absolute',
        alignSelf: 'center',
        zIndex: 5
    }
})

export default AthleticSelectButton;