import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import { FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Feed from '../pages/Feed';
import Favorites from '../pages/Favorites';
import Calendar from '../pages/Calendar';
import AthleticNotification from '../pages/AthleticNotification';
import colors from '../styles/colors';
import FeedRoutes from './feed.routes';
import ModalityRoutes from './modality.routes';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator  screenOptions={{tabBarHideOnKeyboard: true}}>
            <Tab.Screen options={{
                tabBarIcon: ({color}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome5
                            name="home"
                            size={25}
                            color= {color}
                        />
                    </View>
                ),
                title: 'Home', 
                tabBarActiveTintColor: colors.pink,
                tabBarInactiveTintColor: colors.dark,
                headerShown: false,
                tabBarLabelStyle: { fontFamily: 'Nunito_400Regular' },
            }}
            name="FeedRoutes" component={FeedRoutes} />

            <Tab.Screen options={{
                tabBarIcon: ({color}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome
                            name="star"
                            size={25}
                            color= {color}
                        />
                    </View>
                ),
                title: 'Favoritos', 
                tabBarActiveTintColor: colors.pink,
                tabBarInactiveTintColor: colors.dark,
                headerShown: false,
                tabBarLabelStyle: { fontFamily: 'Nunito_400Regular' },
            }}
            name="Favorites" component={Favorites} />

            <Tab.Screen options={{
                tabBarIcon: ({color}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome5
                            name="calendar-alt"
                            size={25}
                            color= {color}
                        />
                    </View>
                ),
                title: 'Calendário', 
                tabBarActiveTintColor: colors.pink,
                tabBarInactiveTintColor: colors.dark,
                headerShown: false,
                tabBarLabelStyle: { fontFamily: 'Nunito_400Regular' },
            }}
            name="Calendar" component={Calendar} />

            <Tab.Screen options={{
                tabBarIcon: ({color}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons
                            name="scoreboard"
                            size={25}
                            color= {color}
                        />
                    </View>
                    ),
                    title: 'Eventos', 
                    tabBarActiveTintColor: colors.pink,
                    tabBarInactiveTintColor: colors.dark,
                    headerShown: false,
                    tabBarLabelStyle: { fontFamily: 'Nunito_400Regular' },
                }}
                name="ModalityRoutes" 
                component={ModalityRoutes} 
            />

            <Tab.Screen options={{
                tabBarIcon: ({focused, color}) => (
                    
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <FontAwesome
                            name="circle"
                            size={25}
                            color= {color}
                        />
                    </View>
                ),
                title: 'Atlética', 
                tabBarActiveTintColor: colors.pink,
                tabBarInactiveTintColor: colors.dark,
                headerShown: false,
                tabBarLabelStyle: { fontFamily: 'Nunito_400Regular' },
            }}
            name="Athletic" component={AthleticNotification} />
        </Tab.Navigator>
    );
}

export default TabNavigator;
