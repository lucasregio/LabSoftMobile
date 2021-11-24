
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../../../../styles/colors";
import { SwapButton } from "../SwapButton";
import { styles } from "./styles";

export interface ModalityDetailHeaderProps {
  onClickArrow: () => void,
  onClickBell: () => void,
  selected: 'right' | 'middle' | 'left',
  onClickSwap: (state: 'right' | 'middle' | 'left') => void,
  imageUrl: string,
  modalityName: string
}

export const ModalityDetailHeader: React.FC<ModalityDetailHeaderProps> = ({
  imageUrl,
  modalityName,
  onClickArrow,
  onClickBell,
  onClickSwap,
  selected
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onClickArrow}>
        <MaterialCommunityIcons
          name="arrow-left"
          color={colors.primary}
          size={25} />
      </TouchableOpacity>

      <View style={styles.headerContent}>
        <Image
          style={styles.headerImage}
          source={{
            uri: imageUrl,
            width: 50,
            height: 50,
          }} />
        <Text style={styles.headerTitle}>
          {modalityName}
        </Text>

        <SwapButton
          leftLabel='Resultados'
          middleLabel= 'Jogos'
          rightLabel='Histórico'
          isRightSelected={selected === 'right'}
          onChangeSelected={onClickSwap}
        />

      </View>
      <TouchableOpacity onPress={onClickBell}>
        <MaterialCommunityIcons
          name="bell"
          color={colors.primary}
          size={25} />
      </TouchableOpacity>
    </View>
  )  
}
