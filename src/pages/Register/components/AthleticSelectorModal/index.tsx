import React, { useState } from "react"

import { Modal, View, Text } from "react-native"
import { IAthletic } from "../../../../components/AthleticSelectButton"
import AthleticList from "../../../../components/ListAthletic"
import { styles } from "./styles"

export interface AthleticSelectorModalProps {
  isVisible: boolean,
  onSelect: (athletic: IAthletic) => void
  onClose: () => void
}

export const AthleticSelectorModal: React.FC<AthleticSelectorModalProps> = ({isVisible, onClose, onSelect}) => {
  const [selected, setSelected] = useState<string>()

  return <Modal visible={isVisible} style={styles.container} >
      <AthleticList 
        pageTitle='Selecione uma Atlética' 
        selectedAthleticId={selected}
        onSelectItem={(athletic) => {
          setSelected(athletic.id)
          onSelect(athletic)
          onClose()
        }}
      />
  </Modal>
}