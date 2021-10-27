import React from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import colors from '../../styles/colors';
import AthleticSelectButton, { IAthletic } from '../AthleticSelectButton';


interface AthleticListProps {
    pageTitle: string
    selectedAthleticId?: string
    onSelectItem?: (athletic: IAthletic) => void
}

const AthleticList: React.FC<AthleticListProps> = ({pageTitle, onSelectItem, selectedAthleticId}) => {
    
    const AthleticList: IAthletic[] = [
        {
            id: '1',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '2',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '3',
            image: 'http://178.238.233.159:5555/public/images/atleticas/967cd513-0d95-486a-814b-cfc33c9272ae.jpg',
            name: 'Raposas',
        },{
            id: '4',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '5',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '6',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '7',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '8',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '9',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '10',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '11',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '12',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '13',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '14',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '15',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '16',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '17',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '18',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '19',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '20',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '21',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '22',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '23',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '24',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '25',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '26',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '27',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '28',
            image: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            name: 'Lobos',
        },{
            id: '29',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '30',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '31',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '32',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '33',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '34',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },{
            id: '35',
            image: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            name: 'Tubarões',
        },
    ]

  return (
    <View style={styles.container}>
        
        <Text style={styles.textAthleticChange}>{pageTitle}</Text>
        <View style={styles.viewListAthletics}>
        <FlatList
        data={AthleticList}
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
