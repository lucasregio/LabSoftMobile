import { StyleSheet } from "react-native";
import colors from "../../../../styles/colors";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: 10,
    marginBottom: 20,
    borderRadius: 15,
    minHeight: 200
  },
  titleContainer: {
    flexDirection:'row',
    alignItems: 'center',
    flex: 2,
    marginLeft:15,
    marginRight:15
  },
  gameTitle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"space-between"
  },
  description:{
    flex:3
  },
  icon:{
    width: 70,
    height: 70,
    borderRadius:15,
    marginHorizontal: 15
  },
  title:{
    fontSize: 24,
    fontFamily: 'Nunito_400Regular',
    fontWeight: 'bold',
    alignSelf:'center'
  },
  line: {
    backgroundColor: '#D3D3D3',
    height: 2,
    borderRadius: 70/2,
    marginVertical:10
  },
  eventStart:{
    alignItems: 'center',
    justifyContent:"center"
  },
  arrow:{
    marginHorizontal:5,
    marginTop:10
  }
})