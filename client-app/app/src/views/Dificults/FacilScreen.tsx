import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LevelStyle from '../../../styles/LevelStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';

//Translation
// import { useTranslation } from 'react-i18next'

interface Props extends StackScreenProps<RootStackParamList, 'SelecDificultScreen'> { };

export const FacilScreen = ({navigation}: Props) => {

    // const { t } = useTranslation();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={LevelStyle.container}>

                <View style={LevelStyle.container_2}>

                    <Image style={LevelStyle.image_1} source={require('../../../imgs/multiplicar.png')} />

                    <View style={LevelStyle.container_text}>
                        <Text style={LevelStyle.text}>Dificultad Facil</Text>
                    </View>

                    <Text style={LevelStyle.level_text2}>Niveles</Text>
                    <View style={LevelStyle.container_3}>

                        <View >
                            <View style={LevelStyle.container_4}>
                                <TouchableOpacity style={LevelStyle.level} onPress={() => navigation.navigate('GameScreenEasy')}>
                                    <Text style={LevelStyle.level_text}>1</Text>
                                </TouchableOpacity>
                                <Text style={LevelStyle.text_2}>pendiente</Text>
                            </View>

                            <View style={LevelStyle.container_4}>
                                <TouchableOpacity style={LevelStyle.level} onPress={() => navigation.navigate('GameScreenEasy3')}>
                                    <Text style={LevelStyle.level_text}>3</Text>
                                </TouchableOpacity>
                                
                                <Text style={LevelStyle.text_2}>pendiente</Text>
                            </View>

                            <View style={LevelStyle.container_4}>
                                <TouchableOpacity style={LevelStyle.level} onPress={() => navigation.navigate('GameScreenEasy5')}>
                                    <Text style={LevelStyle.level_text}>5</Text>
                                </TouchableOpacity>
                                
                                <Text style={LevelStyle.text_2}>pendiente</Text>
                            </View>

                        </View>


                        <View>
                            <View style={LevelStyle.container_4}>
                                <TouchableOpacity style={LevelStyle.level} onPress={() => navigation.navigate('GameScreenEasy2')}>
                                    <Text style={LevelStyle.level_text}>2</Text>
                                </TouchableOpacity>
                                <Text style={LevelStyle.text_2}>pendiente</Text>
                            </View>

                            <View style={LevelStyle.container_4}>
                                <TouchableOpacity style={LevelStyle.level} onPress={() => navigation.navigate('GameScreenEasy4')}>
                                    <Text style={LevelStyle.level_text}>4</Text>
                                </TouchableOpacity>

                                <Text style={LevelStyle.text_2}>pendiente</Text>
                            </View>

                            <View style={LevelStyle.container_4}>
                                <TouchableOpacity style={LevelStyle.level} onPress={() => navigation.navigate('GameScreenEasy6')}>
                                    <Text style={LevelStyle.level_text}>6</Text>
                                </TouchableOpacity>
                                <Text style={LevelStyle.text_2}>pendiente</Text>
                            </View>

                        </View>

                    </View>


                </View>

                <Image style={LevelStyle.image_2} source={require('../../../imgs/signo.png')} />

                <TouchableOpacity onPress={()=> navigation.goBack()} style={{backgroundColor: '#088395', marginTop:25, height:35}} >
                    <Text style={{textAlign:'center', color:'white',marginTop:5}}>volver</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}
