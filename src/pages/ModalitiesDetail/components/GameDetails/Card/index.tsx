import React from 'react';
import { Image, View, Text } from 'react-native';
import { StyleSheet } from "react-native";
import colors from '../../../../../styles/colors';
import { validateImageLink } from '../../../../../validations';

// import { Container } from './styles';

export interface CardProps {
    leftTeam: {
        icone: string
        nome: string
    },
        rightTeam: {
        icone: string
        nome: string
    },
    data: string
}

export const Card: React.FC<CardProps> = ({
    leftTeam,
    rightTeam,
    data
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.teamContainer}>
                <Image style={styles.image} source={{uri: leftTeam.icone}} />
                <Text style={styles.teamText}>{leftTeam.nome}</Text>
            </View>
            
            <View style={styles.middleContainer}>
                <Text style={styles.dataText}>{data}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', fontFamily: 'Nunito_400Regular'}}>VS</Text>
                <Text> </Text>
            </View>
            
            
            <View style={styles.teamContainer}>
                <Image style={styles.image} source={validateImageLink(rightTeam.icone)} />
                <Text style={styles.teamText}>{rightTeam.nome}</Text>
            </View>
        </View>
    );
}

export default Card;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 15,
        height: 130,
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 5
    },
    image:{
        borderRadius: 100,
        height: 60,
        width: 60,
        marginBottom: 10
    },
    teamContainer: {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
    },
    teamText: {
        fontFamily: 'Nunito_400Regular',
        fontSize: 10
    },
    dataText: {
        width: 130,

        textAlign: 'center',
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        fontSize: 10,
        alignSelf: 'center'
    },
    middleContainer: {
        alignItems: 'center',
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
})
