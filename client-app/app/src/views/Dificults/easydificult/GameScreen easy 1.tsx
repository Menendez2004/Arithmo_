import React, { useState} from 'react'
import { Text, View, Image,TouchableOpacity } from "react-native";
import GameStyle from '../../../../styles/GameStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../../App';
import { ModalGameOver } from '../../../components/gameOverModal';
import { ModalWin } from '../../../components/ModalWin';


//Translation
// import { useTranslation } from 'react-i18next'

export const GameScreenEasy = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  // const { t } = useTranslation();


  interface Props extends StackScreenProps<RootStackParamList, 'SelecDificultScreen'> { };


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ marginBottom: '10%' }}>

        <View style={GameStyle.row}>
          <Image style={GameStyle.image1} source={require('../../../../imgs/libro-2.png')} />

          <Image style={GameStyle.image2} source={require('../../../../imgs/libro-1.png')} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={GameStyle.container_2}>
            <Text style={{ color: 'white', textAlign: 'justify', padding: 3 }}>Lucky tiene una bolsa de monedas de oro. Esconde 21 monedas de oro en el patio trasero y  14 en la cocina. Lucky todavía tiene 13 monedas para esconder. ¿Cuántas monedas de oro había en la bolsa de Lucky al principio?</Text>
          </View>
          <View style={GameStyle.rectangulo}></View>
        </View>

      </View>

      <View style={GameStyle.container_3} >
        <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible2(true)}>
          <View >
            <Text style={GameStyle.answer_text}>48 Monedas</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={GameStyle.container_3}>
        <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
          <View >
            <Text style={GameStyle.answer_text}>45 Monedas</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={GameStyle.container_3}>
        <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
          <View >
            <Text style={GameStyle.answer_text}>38 Monedas</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={GameStyle.container_3}>
        <TouchableOpacity style={GameStyle.answer} onPress={() => setModalVisible(true)}>
          <View >
            <Text style={GameStyle.answer_text}>47 Monedas</Text>
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

    </SafeAreaView>
  )
}