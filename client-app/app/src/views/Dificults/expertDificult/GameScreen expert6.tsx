import React, { useState } from 'react'
import { Text, View, Image, TextInput, ToastAndroid, TouchableOpacity, ScrollView } from "react-native";
import GameStyle from '../../../../styles/GameStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ModalGameOver } from '../../../components/gameOverModal';
import { ModalWin } from '../../../components/ModalWin';

//Translation
// import { useTranslation } from 'react-i18next'

export const GameScreenExpert6 = () => {

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
              <Text style={{ color: 'white', textAlign: 'center', padding: 3 }}>14x²y² - 28x³+ 56x⁴</Text>
            </View>
            <View style={GameStyle.rectangulo} ></View>

          </View>
        </View>


        <View  style={GameStyle.container_3}>
          <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
            <View >
              <Text style={GameStyle.answer_text}>4x(y² -2x + 4x)</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={GameStyle.container_3}>
          <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible2(true)}>
            <View >
              <Text style={GameStyle.answer_text}>14x²(y² -2x + 4x²)</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View  style={GameStyle.container_3}>
          <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
            <View >
              <Text style={GameStyle.answer_text}>16x²(y + 2x + 4x)</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View  style={GameStyle.container_3}>
          <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
            <View >
              <Text style={GameStyle.answer_text}>8x(y² -2x + 4x²)</Text>
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