import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: -31,
    top: 14,
    zIndex: 5,
    transform:[{rotate:'39.05deg'}]
  },
  textContainer:{
    position: 'absolute', 
    alignSelf: 'center', 
    zIndex: 7, 
    height:41.41, 
    justifyContent: 'center', 
    alignContent: 'center'
  },
  text:{
    fontFamily: 'Nunito_400Regular',
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.white
  },
  backGroundImage: {
    height: 41.41, 
    width: 156.58,
  }
})