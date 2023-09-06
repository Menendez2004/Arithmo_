import React, { useState } from 'react'
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity, ScrollView } from "react-native";
import GameStyle from '../../../../styles/GameStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalGameOver } from '../../../components/gameOverModal';
import { ModalWin } from '../../../components/ModalWin';

//Translation
// import { useTranslation } from 'react-i18next'

export const GameScreenMedium6 = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  // const { t } = useTranslation();

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={GameStyle.container}>

<View style={{ marginBottom: '10%' }}>
  <View style={GameStyle.row}>
    <Image style={GameStyle.image1} source={require('../../../../imgs/libro-2.png')} />

    <Image style={GameStyle.image2} source={require('../../../../imgs/libro-1.png')} />
  </View>

  <View style={{ alignItems: 'center' }}>
    <View style={GameStyle.container_2}>
      <Text style={{ color: 'white', textAlign: 'center', padding: 3 }}>2/3 / 4/3</Text>
    </View>
    <View style={GameStyle.rectangulo} ></View>

  </View>

</View>
<View style={GameStyle.container_3}>

  <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
    <View >
      <Text style={GameStyle.answer_text}>0.5</Text>
    </View>
  </TouchableOpacity>

</View>

<View style={GameStyle.container_3}>
  <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
    <View >
      <Text style={GameStyle.answer_text}>7/2</Text>
    </View>
  </TouchableOpacity>
</View>

<View style={GameStyle.container_3}>
  <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
    <View >
      <Text style={GameStyle.answer_text}>3</Text>
    </View>
  </TouchableOpacity>
</View>

<View style={GameStyle.container_3}>
  <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible2(true)}>
    <View >
      <Text style={GameStyle.answer_text}>1/2</Text>
    </View>
  </TouchableOpacity>
</View>

<ModalGameOver
  modalUseState={modalVisible}
  setModalUseState={setModalVisible}
/>

<ModalWin
  modalUseState={modalVisible2}
  setModalUseState={setModalVisible2}
/>

</View>
    </SafeAreaView>
  )
}