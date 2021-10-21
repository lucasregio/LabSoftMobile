import React from 'react';
import { View, Image, StyleSheet, Text, FlatList } from 'react-native';

import colors from '../../styles/colors';
import AthleticSelector from '../../components/AthleticSelector';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface AthleticListProps {
    data: AthleticList
}

export interface AthleticList {
    pageTitle: string
}

const AthleticList: React.FC<AthleticListProps> = (props) => {
    
    const AthleticList = [
        {
            id: 1,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 2,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 3,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 4,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 5,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 6,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 7,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 8,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 9,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 10,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 11,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 12,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 13,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 14,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 15,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 16,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 17,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 18,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 19,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 20,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 21,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 22,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 23,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 24,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 25,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 26,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 27,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 28,
            atleticaImage: 'http://178.238.233.159:5555/public/images/atleticas/02b25a7c-c9ed-463c-b15d-bae63c5d6a3c.jpg',
            atleticaName: 'Lobos',
        },{
            id: 29,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 30,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 31,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 32,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 33,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 34,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },{
            id: 35,
            atleticaImage: 'https://pbs.twimg.com/profile_images/867023581418573824/sRkrAKHV_400x400.jpg',
            atleticaName: 'Tubarões',
        },
    ]

  return (
        <View style={styles.container}>
            
          <Text style={styles.textAthleticChange}>{props.data.pageTitle}</Text>
          <View style={styles.viewListAthletics}>
            <FlatList
            data={AthleticList}
            showsVerticalScrollIndicator={false}
            numColumns={4}
            renderItem={ ({item}) => <AthleticSelector data={item}/> }
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
