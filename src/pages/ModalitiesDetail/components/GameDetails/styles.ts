import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { StyleSheet } from "react-native";
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10,
    overflow: 'visible',
    paddingBottom: 180
  },
  title:{
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    fontWeight: "bold", 
    color: colors.black,
    marginTop: 12
  },
  gameList:{
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 10,
  },
  tableContainer:{
    marginTop: 8,
    marginBottom: 200,
    overflow: 'visible',
  },
  tableHeaderContainer :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 70
  },
  tableHeader:{
    paddingHorizontal: 19,
    paddingVertical: 8, 
    backgroundColor: '#fff',
    borderRadius: 15
  },
  tableHeaderLabel:{
    fontFamily: 'Nunito_400Regular',
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.black
  },
  tableContent:{
    backgroundColor: '#fff',
    marginTop: 8,
    borderRadius: 20,
    width: 600,
    height: 330,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50
  },
  column: {
    justifyContent: 'space-evenly'
  },
  space: {

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
})