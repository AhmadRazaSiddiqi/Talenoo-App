import { responsiveFontSize, responsiveHeight } from "@/utils/responsive"
import React, { useState } from "react"
import { Keyboard, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

type Props = {
  value?: number
  onChange?: (val: number) => void
  min?: number
  max?: number
  step?: number
}

const StyledNumericInput: React.FC<Props> = ({
  value = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(value)

  const updateValue = (newVal: number) => {
    if (newVal >= min && newVal <= max) {
      setCurrentValue(newVal)
      onChange?.(newVal)
    }
  }

  const handleTextChange = (text: string) => {
    const num = parseInt(text.replace(/[^0-9]/g, "")) || 0
    updateValue(num)
  }

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(currentValue)}
        onChangeText={handleTextChange}
      />

      <View style={styles.controls}>
        <TouchableOpacity onPress={() => {updateValue(currentValue + step),Keyboard.dismiss()}}>
          <Icon name="chevron-up-outline" size={responsiveFontSize(16)} color="#5c6b82" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {updateValue(currentValue - step),Keyboard.dismiss()}}>
          <Icon name="chevron-down-outline" size={responsiveFontSize(16)} color="#5c6b82" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#f5f7fa",
    borderRadius: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
    height: responsiveHeight(50),
    width: '100%',
  },
  input: {
    fontSize: 24,
    color: "purple",
    flex: 1,
  },
  controls: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
})

export default StyledNumericInput
