import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: `${colors.background_white_blue}`,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%'
    },

    text: {
        color: `${colors.purple}`,
        fontFamily: 'FredokaOne_400Regular'
    },

    title: {
        color: `${colors.purple}`,
        fontFamily: 'FredokaOne_400Regular',
        fontSize: 64
    },

    label: {
        color: `${colors.purple}`,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        paddingBottom: 4
    },

    inputContainer: {
        paddingBottom: 10,
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

    forgotPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch'
    },

    linkText: {
        color: `${colors.purple}`,
        fontFamily: 'Nunito_400Regular',
        textDecorationLine: 'underline',
    }
});