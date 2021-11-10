
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { StyleSheet } from "react-native";
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 10,
    overflow: 'visible'
  },
  title:{
    fontFamily: 'Nunito_400Regular',
    fontSize: 18,
    fontWeight: "bold", 
    color: colors.black,
    marginTop: 12
  },
  gameList:{
    marginTop: 10,
    marginBottom: 20,
    overflow: 'visible',
    paddingRight: -11
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

  }
})