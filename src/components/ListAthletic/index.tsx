import React from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../../styles/colors';
import AthleticSelectButton, { Athletic } from '../AthleticSelectButton';


interface AthleticListProps {
    pageTitle: string
    selectedAthleticId?: string
    onSelectItem?: (athletic: Athletic) => void
    list: Athletic[]
}

const AthleticList: React.FC<AthleticListProps> = ({pageTitle, onSelectItem, selectedAthleticId, list}) => {
  
    return (
    <View style={styles.container}>
        
        <Text style={styles.textAthleticChange}>{pageTitle}</Text>
        <View style={styles.viewListAthletics}>
        <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        numColumns={4}
        renderItem={ ({item: athletic}) => 
            <AthleticSelectButton 
                isSelected={selectedAthleticId === athletic.id}
                athletic={athletic}
                onSelect={onSelectItem}
            /> 
        }
        key={'id'}
        />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewAthleticChange:{
        alignItems: 'center',
    },
    textAthleticChange:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: colors.purple
    },
    viewListAthletics:{
        width: '80%',
        flex: 1,
        paddingTop: 20,
        paddingBottom: 20
    },
})

export default AthleticList;
