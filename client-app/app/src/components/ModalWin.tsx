import React, { useState } from 'react'
import axios from 'axios';
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import { RegisterScoreAuthCase } from '../Domain/useCase/auth/registerScoreAuth';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { useLocalUser } from '../presentation/hooks/useLocalUser';



interface Props {
    modalUseState: boolean,
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;
}
  

export const ModalWin = ({ setModalUseState, modalUseState }: Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const {user} = useLocalUser();
    const [modalVisible2, setModalVisible2] = useState(false);
    const [values, setValues] = useState({
        score: 25,
        user_id: user
    })

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUseState}
                onRequestClose={() => {
                    setModalUseState(!modalUseState);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Image style={styles.modalImage} source={require('../../imgs/win.png')} alt="youWin_Modal" />


                        <View style={styles.container}>
                            <View>
                                <View style={styles.buttonContainer} >
                                    <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('MediumScreen')}>
                                        <Ionicons name='arrow-forward-outline' size={40} color={'#05BFDB'} />
                                    </TouchableOpacity>

                                </View>
                                <Text style={styles.buttonText}>Siguiente nivel</Text>
                            </View>

                            <View>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelecDificultScreen')}>
                                        <Ionicons name='home-sharp' size={40} color={'#05BFDB'} />
                                    </TouchableOpacity>

                                </View>
                                <Text style={styles.buttonText}>Inicio </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        height: '95%',
        width: '90%',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#0A4D68',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
    },

    modalImage: {
        width: '95%',
        height: '85%',
        marginTop: '-10%',
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
        marginTop: 20,
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    },

    button: {
        backgroundColor: '#0A4D68',
        padding: 20,
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#05BFDB',
        fontWeight: 'bold'
    },
});
