import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%'
    },

    text: {
        color: colors.primary,
        fontFamily: 'FredokaOne_400Regular'
    },

    title: {
        color: colors.primary,
        fontFamily: 'FredokaOne_400Regular',
        fontSize: 64
    },

    label: {
        color: colors.primary,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        paddingBottom: 4
    },

    inputHolder: {
        paddingBottom: 10,
        alignSelf: 'stretch'
    },

    input: {
        color: colors.primary,
        borderColor: colors.primary,
        borderRadius: 10,
        fontFamily: 'Nunito_400Regular',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 15
    },

    buttonContainer: {
        padding: 20
    },

    inputContainer: {
        //color: colors.primary,
        borderColor: colors.primary,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },

    inputAthletic: {
        color: colors.primary,
        fontFamily: 'Nunito_400Regular',
        padding: 10,
        fontSize: 15,
        flex: 1
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
    },

    inputError: {
        borderColor: colors.pink
    },

    labelError: {
        color: colors.pink,
    },

    labelBottom: {
        paddingTop: 5
    },
    
    selectAthleticContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },

    selectAthleticPlaceholder:{
        color: '#cccccc',
        fontFamily: 'Nunito_400Regular',
        fontSize: 15
        
    },
   
    selectAthleticButtonText: {
        color: colors.pink,
        fontWeight: 'bold',
        fontFamily: 'Nunito_400Regular',
        fontSize: 15,
        paddingRight: 10
    },

    pickerText: {
        fontFamily: 'Nunito_400Regular',
        color: colors.primary,
        flex: 1
    }
});
