//tools 
import React, { useState, useEffect } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { Text, View, Image, ToastAndroid } from 'react-native';

//components 
import styles from '../../../styles/Styles';
import serviceResetPass from './serviceResetPass';
import { RoundedBtm } from '../../../styles/components/RoundedBtm';
import { RoundedBtm2 } from '../../../styles/components/RoundedBtm';
import { RoundedBtm4 } from '../../../styles/components/RoundedBtm';
import { RestructuringImput } from '../../../styles/components/RestructuringImput';
import { RestructuringImput1 } from '../../../styles/components/RestructuringImput1';
import { RootStackParamList } from '../../../../App';

interface Props extends StackScreenProps<RootStackParamList, 'ResetPass'> { };

export const ResetPass = ({ navigation, route }: Props) => {
    const { email,  onChange, errorMessage, user } = serviceResetPass();


    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])


    useEffect(() => {

        if(user?.session_token != null && user?.session_token != undefined) {
            navigation.replace('HomepageScream');
        }
    }, [user])
    return (
        //Etiqueta view funciona como uina columna
        //vista main, contenedor de todo
        <View style={styles.container}>
            {/*vsita del logo */}



            {/*ivista del botón de la password*/}
            {/*Formulario flotante*/}
            <View style={styles.form}>
                <Text style={styles.formText}>Login</Text>

                <Image
                    style={styles.burbu}
                    source={require('../../../imgs/burbu.png')} />

                <View style={styles.logoContainer}>
                    <Image source={require('../../../imgs/icons.png')}
                        style={styles.logoImage} />
                </View>


                <RestructuringImput

                    image={require('../../../imgs/email.png')}
                    placeholder='correo electronico'
                    KeyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

{/* 
                <View >
                    <RoundedBtm text='ENTRAR' onPress={() => login()} />
                </View> */}
                

                <Image
                    style={styles.rightBurble}
                    source={require('../../../imgs/burbuf.png')} />
            </View>


        </View >  
    );
}
