import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:colors.white
    },
    button: {
        backgroundColor: colors.primary,
        height: 45,
        width: 156,
        flexDirection: 'row',
        overflow: 'hidden',
        borderRadius: 31,
    },
    headerContainer:{
        height: 130,
        backgroundColor: colors.white,
    },
    header:{
        paddingTop: 12,
        paddingLeft: 15,
        flexDirection: 'row',
    },
    headerText:{
        marginLeft: 34,
        color: colors.primary,
        fontFamily: 'Nunito_400Regular',
        fontWeight: 'bold',
        fontSize: 16,
    },row:{
        flex: 1,
        justifyContent: "space-around"
    },
    searchBar:{
        marginTop: 32,
        marginBottom: 17,
        marginHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 20,
        borderColor: '#c4c4c4',
        borderWidth: 1,
    },
    inputText:{
        height: 40,
        width: '80%',
        paddingLeft: 10
        
    },
    iconStyleSearchBar:{
          marginLeft: 5,
          marginRight: 5
    },
})