import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const HeaderRight: React.FC = () => {
  return (
    <TouchableOpacity>
        <MaterialCommunityIcons
            style={styles.iconStyleHeader}
            name="bell"
            color="#FFF"
            size={25}
        />
    </TouchableOpacity>
  );
}

export default HeaderRight;

const styles = StyleSheet.create({
  iconStyleHeader: {
      paddingRight: 10
  }
})
