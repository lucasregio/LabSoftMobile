import { StyleSheet } from "react-native";
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    paddingBottom: 10
  },
  scoreContainer: {
    flexDirection:'row',
    textAlign: 'right',
  },

  image:{
    borderRadius: 25
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
    paddingHorizontal: 10,
    marginTop: 10,
    width: 40
  },

  detailText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 10,
    fontWeight: "bold",
    color: colors.black,
    textAlign: 'right',
    marginTop: 5,
    marginLeft: 100
  },

  detailTextLocal: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 10,
    fontWeight: "bold",
    color: colors.black,
    marginLeft: 280,
    marginTop: -15,
    alignSelf: 'center'
  },

  divider:{
    height: 1,
    backgroundColor: '#888'
  }
})