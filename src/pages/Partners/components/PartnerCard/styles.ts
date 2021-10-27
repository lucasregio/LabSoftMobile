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
    alignItems: 'center',
    flexDirection:'row'
  },
  icon:{
    width: 50,
    height: 50
  },
  title:{
    paddingLeft: 16,
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 20,
    marginHorizontal: '15%',
    width: '70%',
    fontFamily: 'Nunito_400Regular',
    fontWeight: '100',
    fontSize: 14
  },
  discountLabel: {
    position: 'absolute',
    right:0,
    top:0,
    width: 156,
    height: 0,
    borderBottomWidth: 41,
    borderBottomColor: colors.primary,
    borderLeftWidth: 45,
    borderLeftColor: "transparent",
    borderRightWidth: 45,
    borderRightColor: "transparent",
    borderStyle: "solid",
    transform:[{
      rotate: '45deg'
    }]
  }
})