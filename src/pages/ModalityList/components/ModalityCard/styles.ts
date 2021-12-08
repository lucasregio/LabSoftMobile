import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 20,
    borderRadius: 15,
    minHeight: 150
  },
  titleContainer: {
    flexDirection:'row',
    alignItems: 'center',
    flex: 2,
    marginLeft:15,
    marginRight:15
  },
  icon:{
    width: 50,
    height: 50,
    borderRadius:15
  },
  title:{
    paddingLeft: 16,
    fontSize: 24,
    fontFamily: 'Nunito_400Regular',
    fontWeight: 'bold',
  },
  arrow: {
    margin: 15
  },
  iconTeam: {
    width: 25,
    height: 25,
    borderRadius: 70/2,
    marginLeft:10,
    marginRight:10
  },
  line: {
    backgroundColor: '#D3D3D3',
    height: 2,
    marginBottom: 10,
    borderRadius: 70/2
  },
  nextGame: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 16
  },
  nextDate:{
    marginLeft:'20%',
    fontFamily: 'Nunito_400Regular',
    fontWeight: 'bold',
    backgroundColor: '888888'
  }
})