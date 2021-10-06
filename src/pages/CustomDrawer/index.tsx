import React from 'react';
import { View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';

import { useAuth } from '../../contexts/auth';

import { styles } from './styles';

// Referência: https://github.com/react-navigation/react-navigation/blob/main/packages/drawer/src/views/DrawerItemList.tsx
type Props = {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
};

const CustomDrawer: React.FC<Props> = ({...props}) => {
    const { signOut } = useAuth();

    const focusedRoute = props.state.routes[props.state.index];
    const focusedDescriptor = props.descriptors[focusedRoute.key];
    const focusedOptions = focusedDescriptor.options;

    const {
        drawerActiveTintColor,
        drawerInactiveTintColor,
        drawerActiveBackgroundColor,
        drawerInactiveBackgroundColor,
        drawerLabelStyle
    } = focusedOptions;

    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../../assets/uvv-icon.png')}/>
                </View>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            
            <View style={styles.bottomDrawer}>
                <DrawerItem label="Sair"
                onPress={signOut}
                labelStyle={drawerLabelStyle}
                activeTintColor={drawerActiveTintColor}
                inactiveTintColor={drawerInactiveTintColor}
                activeBackgroundColor={drawerActiveBackgroundColor}
                inactiveBackgroundColor={drawerInactiveBackgroundColor}
                icon={({color, size})=> <FontAwesome name="sign-out" size={size} color={color} />}/>
            </View>
        </View>
    );
}

export default CustomDrawer;

