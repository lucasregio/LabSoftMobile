import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { StyleSheet } from "react-native";
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container:{
    flexDirection:'row'
  },
  rightContainer:{
    borderTopLeftRadius:15, 
    borderBottomLeftRadius:15, 
  },
  space:{
    width: 1
  },
  
  leftContainer:{
    borderTopRightRadius:15, 
    borderBottomRightRadius:15, 
  },
  labelContainer:{
    paddingVertical: 3,
    width: 95,
    alignItems: 'center'
  },
  label:{
    fontFamily: 'Nunito_400Regular',
    fontSize: 12,
  },
  selected:{
    backgroundColor: colors.primary,
    color: '#fff'
  },
  unselected:{
    borderWidth: 1
  },

})