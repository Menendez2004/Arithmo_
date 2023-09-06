import React from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import LevelStyle from '../../../styles/LevelStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RoundedBtm } from '../../../styles/components/RoundedBtm';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';

//Translation
// import { useTranslation } from 'react-i18next'

interface Props extends StackScreenProps<RootStackParamList, 'SelecDificultScreen'> { };


export const MediumScreen = ({navigation}: Props) => {

    // const { t } = useTranslation();

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={LevelStyle.container}>

                <View style={LevelStyle.container_2}>

                    <Image style={LevelStyle.image_1} source={require('../../../imgs/multiplicar.png')}  />

                    <View style={LevelStyle.container_text}>
                        <Text style={LevelStyle.text}>Dificultad Media</Text>
                    </View>

                    <Text style={LevelStyle.level_text2}>Niveles</Text>
                    <View style={LevelStyle.container_3}>

                        <View >
                            <TouchableOpacity style={LevelStyle.container_4}  onPress={() => navigation.navigate('GameScreenMedium1')}>
                            <View style={LevelStyle.level} >
                                    <Text style={LevelStyle.level_text}>1</Text>
                                </View>
                                <Text style={LevelStyle.text_2}>Pendiente</Text>
                            </TouchableOpacity>

                            <TouchableOpacity  style={LevelStyle.container_4} onPress={() => navigation.navigate('GameScreenMedium3')}>
                            <View style={LevelStyle.level}>
                                    <Text style={LevelStyle.level_text}>3</Text>
                                </View>
                                <Text style={LevelStyle.text_2}>Pendiente</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={LevelStyle.container_4} onPress={() => navigation.navigate('GameScreenMedium5')}>
                            <View style={LevelStyle.level}>
                                    <Text style={LevelStyle.level_text}>5</Text>
                                </View>
                                <Text style={LevelStyle.text_2}>Pendiente</Text>
                            </TouchableOpacity>

                        </View>


                        <View>
                            <TouchableOpacity style={LevelStyle.container_4} onPress={() => navigation.navigate('GameScreenMedium2')}>
                            <View style={LevelStyle.level}>
                                    <Text style={LevelStyle.level_text}>2</Text>
                                </View>
                                <Text style={LevelStyle.text_2}>Pendiente</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={LevelStyle.container_4} onPress={() => navigation.navigate('GameScreenMedium4')}>
                            <View style={LevelStyle.level}>
                                    <Text style={LevelStyle.level_text}>4</Text>
                                </View>
                                <Text style={LevelStyle.text_2}>Pendiente</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={LevelStyle.container_4} onPress={() => navigation.navigate('GameScreenMedium6')}> 
                            <View style={LevelStyle.level}>
                                    <Text style={LevelStyle.level_text}>6</Text>
                                </View>
                                <Text style={LevelStyle.text_2}>Pendiente</Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                </View>

                <Image style={LevelStyle.image_2} source={require('../../../imgs/signo.png')} />
                
                <TouchableOpacity onPress={()=> navigation.goBack()} style={{backgroundColor: '#088395', marginTop:25, height:35}} >
                    <Text style={{textAlign:'center', color:'white',marginTop:5}}>Volver</Text>
                </TouchableOpacity>
                    
                
            </View>
        </SafeAreaView>
    )
}
