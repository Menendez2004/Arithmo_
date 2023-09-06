import React, {useState} from "react";
import { Modal, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

//Translation
// import { useTranslation } from 'react-i18next'

interface Props {
    modalUseState: boolean, 
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalGameOver = ({setModalUseState, modalUseState}: Props) =>{

    // const { t } = useTranslation();

    return(

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


                        <Image style={styles.modalImage} source={require('../../imgs/game_over.png')} alt="gameOver_modal" />

                        <TouchableOpacity >
                            <View style={styles.button}>
                                <Text style={styles.textStyle}>Regresar</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        height: '75%',
        width: '90%',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#0A4D68',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8,
    },
    button: {
        marginTop: 50,
        borderRadius: 15,
        padding: 20,
        backgroundColor: '#0A4D68',

    },
    textStyle: {
        color: '#05BFDB',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    modalImage: {
        marginTop: '-12%',
        width: '95%',
        height: '80%'
    },

    // modalImage_2:{
    //     alignSelf: 'flex-end',
    //     width: '20%',
    //     height: '10%',
    //     marginTop: 50,
    //     marginLeft: 100
    // }
});


