
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import colors from "../../../../styles/colors"
import { styles } from "./styles"

export interface SwapButtonProps {
  rightLabel: string,
  leftLabel: string,
  isRightSelected: boolean,
  onChangeSelected: (value: boolean) => void
}

export const SwapButton: React.FC<SwapButtonProps> = ({
  rightLabel,
  leftLabel,
  isRightSelected,
  onChangeSelected
}) => (
  <TouchableOpacity style={styles.container} onPress={() => onChangeSelected(!isRightSelected)}>
    <View style={[styles.rightContainer, styles.labelContainer, isRightSelected? styles.selected : styles.unselected]}>
      <Text style={[
        styles.label, 
        { color: isRightSelected ?  '#fff' : colors.dark}
        ]}>
        {rightLabel}
      </Text>
    </View>
    <View style={styles.space} />
    <View style={[styles.leftContainer, styles.labelContainer, !isRightSelected? styles.selected : styles.unselected]}>
      <Text style={[
        styles.label, 
        { color: !isRightSelected ?  '#fff' : colors.dark}
        ]}>
        {leftLabel}
      </Text>
    </View>
  </TouchableOpacity>
) 