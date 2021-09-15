import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: `${colors.background_white_blue}`,
        flex: 1,
        paddingHorizontal: '10%',
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    body: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },

    text: {
        color: `${colors.purple}`,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
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

    input: {
        color: `${colors.purple}`,
        borderColor: `${colors.purple}`,
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
