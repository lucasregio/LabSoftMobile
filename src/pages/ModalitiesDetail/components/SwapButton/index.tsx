
import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import colors from "../../../../styles/colors"
import { styles } from "./styles"

export interface SwapButtonProps {
  rightLabel: string,
  middleLabel: string,
  leftLabel: string,
  isRightSelected: boolean,
  onChangeSelected: (value: 'left' | 'middle' | 'right') => void
}

export const SwapButton: React.FC<SwapButtonProps> = ({
  rightLabel,
  middleLabel,
  leftLabel,
  isRightSelected,
  onChangeSelected
}) => {

  const [state, setState] = useState<'left' | 'middle' | 'right'>('left');

  function handleChangeSelected(value: 'left' | 'middle' | 'right') {
    setState(value);
    onChangeSelected(value)
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => handleChangeSelected('left')}>
        <View style={[styles.leftContainer, styles.labelContainer,  state === 'left' ? styles.selected : styles.unselected]}>
          <Text style={[
            styles.label, 
            { color: state === 'left' ?  '#fff' : colors.dark}
            ]}>
            {leftLabel}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.space} />

      <TouchableOpacity onPress={() => handleChangeSelected('middle')}>
        <View style={[styles.labelContainer, state === 'middle' ? styles.selected : styles.unselected]}>
          <Text style={[
            styles.label, 
            { color: state === 'middle' ?  '#fff' : colors.dark}
            ]}>
            {middleLabel}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.space} />

      <TouchableOpacity onPress={() => handleChangeSelected('right')}>
        <View style={[styles.rightContainer, styles.labelContainer, state === 'right' ? styles.selected : styles.unselected]}>
          <Text style={[
            styles.label, 
            { color: state === 'right' ?  '#fff' : colors.dark}
            ]}>
            {rightLabel}
          </Text>
        </View>
      </TouchableOpacity>

    </View>

  )
}