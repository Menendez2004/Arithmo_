import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import DificultStyle from '../../../styles/DIficultStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';

//Translation
// import { useTranslation } from 'react-i18next'

interface Props extends StackScreenProps<RootStackParamList, 'SelecDificultScreen'> { };


export const SelecDificultScreen = ({navigation}: Props) => {
    // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    // const { t } = useTranslation();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={DificultStyle.container} >

                <View style={DificultStyle.container_user}>


                    <Image style={DificultStyle.image2} source={require('../../../imgs/resta.png')} />
                </View>

                <View style={DificultStyle.container_2}>

                    <View style={DificultStyle.container_text}>
                        <Text style={DificultStyle.text}>Dificultades</Text>
                    </View>

                    <View style={DificultStyle.container_3}>

                        <TouchableOpacity style={DificultStyle.dificult} onPress={() => navigation.navigate('FacilScreen')}>
                            <Text style={DificultStyle.dificult_text}>Facil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={DificultStyle.dificult} onPress={() => navigation.navigate('MediumScreen')}>
                            <Text style={DificultStyle.dificult_text} >Media</Text>
                        </TouchableOpacity >
                            
                        <TouchableOpacity style={DificultStyle.dificult} onPress={() => navigation.navigate('DificilScreen')}>
                            <Text style={DificultStyle.dificult_text} >Dificil</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  style={DificultStyle.dificult} onPress={() => navigation.navigate('ExpertScreen')}>
                            <Text style={DificultStyle.dificult_text} >Experto</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={DificultStyle.container_4}>

                    <Image style={DificultStyle.image3} source={require('../../../imgs/suma.png')} />

                </View>


            </View>
        </SafeAreaView>
    )
}
