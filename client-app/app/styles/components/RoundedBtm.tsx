import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import RoundeStyleBtm from '../RoundedBtm'

interface Props{
    text: string,
    onPress: () => void
}

export const RoundedBtm = ( { text, onPress }: Props ) => {
  return (
    <TouchableOpacity
    style={RoundeStyleBtm.RoundedButton}
    onPress={() => onPress()}
    >
        <Text style={RoundeStyleBtm.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

export const RoundedBtm2 = ({ text, onPress}: Props) =>{
  return (
    <TouchableOpacity
    style={RoundeStyleBtm.RoundedButton2}
    onPress={() => onPress()}
    >
        <Text style={RoundeStyleBtm.textButton2}>{text}</Text>
    </TouchableOpacity>
  )
}

export const RoundedBtm3 = ({ text, onPress}: Props) =>{
  return (
    <TouchableOpacity
    style={RoundeStyleBtm.RoundedButton3}
    onPress={() => onPress()}
    >
        <Text style={RoundeStyleBtm.textButton3}>{text}</Text>
    </TouchableOpacity>
  )
}

export const RoundedBtm4 = ({ text, onPress}: Props) =>{
  return (
    <TouchableOpacity
    style={RoundeStyleBtm.forgotPass}
    onPress={() => onPress()}
    >
        <Text style={RoundeStyleBtm.forgotText}>{text}</Text>
    </TouchableOpacity>
  )
}



