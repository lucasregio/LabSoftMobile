
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { StyleSheet } from "react-native";
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container:{
    flexDirection:'row'
  },
  leftContainer:{
    borderTopLeftRadius:15, 
    borderBottomLeftRadius:15, 
  },
  space:{
    width: 1
  },
  rightContainer:{
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
    borderWidth: 1,
    borderColor: colors.primary,
    color: '#fff'
  },
  unselected:{
    borderWidth: 1
  },

})