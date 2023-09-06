import React, { useState } from 'react'
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity, ScrollView } from "react-native";
import GameStyle from '../../../../styles/GameStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalGameOver } from '../../../components/gameOverModal';
import { ModalWin } from '../../../components/ModalWin';

//Translation
// import { useTranslation } from 'react-i18next'

export const GameScreenHard6 = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  // const { t } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={GameStyle.container}>

        <View style={{ marginBottom: '10%' }}>
          <View style={GameStyle.row}>
            <Image style={GameStyle.image1} source={require('../../../../imgs/libro-2.png')} />

            <Image style={GameStyle.image2} source={require('../../../../imgs/libro-1.png')} />
          </View>

          <View style={{ alignItems: 'center' }}>
            <View style={GameStyle.container_2}>
              <Text style={{ color: 'white', textAlign: 'center', padding: 3 }}>(x⁴ + 2x² +2 ) por (x² - 2x + 3)</Text>
            </View>
            <View style={GameStyle.rectangulo} ></View>

          </View>
        </View>

        <View style={GameStyle.container_3}>
          <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
            <View >
              <Text style={GameStyle.answer_text}>x⁶ - 3x⁵ + x⁴ + 7x³ - 3x² + 5x + 8</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={GameStyle.container_3}>
          <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
            <View >
              <Text style={GameStyle.answer_text}>9x⁸ - 2x⁴ + x² + 5x³ + 4x² - 3x - 6</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={GameStyle.container_3}>
          <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible2(true)}>
            <View >
              <Text style={GameStyle.answer_text}>x⁶ - 2x⁵ + x⁴ - 2x³ + 8x² - 2x + 6</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={GameStyle.container_3}>
          <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
            <View >
              <Text style={GameStyle.answer_text}>6x⁶ - 2x⁵ + x⁴ + 4x³ + 16x - 10x - 6</Text>
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