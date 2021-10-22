import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';
import AthleticList from '../../components/ListAthletic';

const AthleticNotification: React.FC = () => {
    const [selected, setSelected] = useState<string>()

    return (
        <View style={styles.container}>
            <AthleticList 
                pageTitle={'Altere sua atlética'}
                selectedAthleticId={selected} 
                onSelectItem={({id})=> setSelected(id)} 
                />
            <View style={styles.viewStyleButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Selecionar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    button: {
        backgroundColor: colors.primary,
        height: 45,
        width: 156,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 31,
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    viewStyleButton:{
        alignItems: 'center',
        marginBottom: 20
    }
})

export default AthleticNotification;
