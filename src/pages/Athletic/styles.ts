import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: `${colors.offwhiteblue}`,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%',
    
    },

    teste:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },

    header: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    body: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        flexWrap:'wrap',
    },

    title: {
        color: `${colors.purple}`,
        fontFamily: 'FredokaOne_400Regular',
        fontSize: 64
    },

    

    text: {
        color: `${colors.purple}`,
        fontFamily: 'FredokaOne_400Regular',
        alignSelf: 'center',
        fontSize: 25,
    },

    label: {
        color: `${colors.purple}`,
        fontFamily: 'Nunito_400Regular',
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 4
    },

    inputContainer: {
        alignSelf: 'stretch'
    },

    

    buttonContainer: {
        padding: 20
    },

    button: {
        backgroundColor: `${colors.purple}`,
        height: 45,
        width: 193,
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 32,

    },

    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
    },
});
