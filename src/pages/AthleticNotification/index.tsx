import React from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import colors from '../../styles/colors';
import AthleticList from '../../components/ListAthletic';

const AthleticNotification: React.FC = () => {

  return (
        <View style={styles.container}>
            <AthleticList data={{
                pageTitle: 'Altere sua atlética'
            }}/>
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
