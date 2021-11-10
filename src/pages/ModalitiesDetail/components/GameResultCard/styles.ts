import { StyleSheet } from "react-native";
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    minWidth: 166,
    backgroundColor: '#fff',
    padding: 12,
    marginRight: 11
  },
  scoreContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12
  },
  teamContainer: {
    alignItems: 'center'
  },
  teamLabel : {
    fontFamily: 'Nunito_400Regular',
    fontSize: 8,
    marginTop: 5
  },
  scoreText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 10,
    fontWeight: "bold",
    color: colors.black,
    paddingHorizontal: 20
  },
  divider:{
    height: 1,
    backgroundColor: '#888'
  }
})