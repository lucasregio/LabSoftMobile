import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: `${colors.offwhiteblue}`,
        flex: 1,
        paddingHorizontal: '10%',
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign:'center'
    },

    inputHolder: {
        paddingBottom: 10,
        alignSelf: 'stretch'
    },
  

    body: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
    },

    text: {
        color: colors.primary,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Nunito_400Regular',
        fontSize: 16,
    },

    label: {
        color: colors.primary,
        fontFamily: 'Nunito_400Regular',
        fontSize: 14,
        fontWeight: 'bold',
        paddingBottom: 4
    },

    inputContainer: {
        alignSelf: 'stretch',
        marginTop:10
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
        padding: 20,
        marginTop:20
    },

    button: {
        backgroundColor: colors.primary,
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

    labelInputError: {
        color: colors.pink,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        paddingBottom: 4,
        paddingTop: 5
    },

    inputError: {
        borderColor: colors.pink
    },

    labelError: {
        color: colors.pink
    },
    labelEmailPasswordError: {
        color: colors.pink,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        paddingBottom: 4,
        paddingTop: 5
    },
});
