import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { StyleSheet } from "react-native";
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10,
    overflow: 'visible',
    paddingBottom: 180
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
  iconStyleSearchBar:{
    marginLeft: 5,
    marginRight: 5
  },
  inputText:{
    height: 40,
    width: '80%',
    paddingLeft: 10
  },
  gameList:{
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 10,
  },
  
})