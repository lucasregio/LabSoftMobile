
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import { StyleSheet } from "react-native";
import colors from '../../../../styles/colors';

export const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 18,
    paddingBottom: 8,
    backgroundColor: '#fff'
  },
  headerContent:{
    alignItems: 'center'
  },
  headerImage: {
    marginTop: 21,
  },
  headerTitle: {
    fontFamily: 'Nunito_400Regular',
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.primary,
    marginTop: 12,
    marginBottom: 8,
  },
  headerSwapButton: {

  }

})