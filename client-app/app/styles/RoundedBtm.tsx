import React from "react"
import { StyleSheet } from "react-native";
import { MyColors } from './theme/Theme'
import { RoundedBtm3 } from './components/RoundedBtm';

const RoundeStyleBtm = StyleSheet.create({
    RoundedButton:{
        width: '100%',
        height: 45,
        backgroundColor: MyColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 40,

    },
    textButton:{
        color: MyColors.Text,
        fontSize: 17,
        fontWeight: "bold"
    },
    RoundedButton2:{
        width: 110,
        height: 30,
        backgroundColor: MyColors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 45,
        borderRadius: 25,
        bottom: 3.5
        

    },
    textButton2:{
        color: MyColors.Text,
        fontWeight: "bold"
    },
    
    RoundedButton3:{
        width:150,
        height: 45,
        backgroundColor:'#0A4D68',
        marginRight: 8,
        borderRadius: 8
    },
    textButton3:{
        textAlign:"center",
        color: '#05BFDB',
        marginTop: 10,
    },
    forgotPass:{
        width:180,
        height: 35.5,
        backgroundColor:'#31C8E2',
        borderRadius: 15,
        margin:15,
        marginLeft:75
    },
    forgotText:{
        textAlign:"center",
        color: '#FFFFFF',
        marginTop: 10,
        alignContent:"center",
        alignItems:"center",
        alignSelf:"center",
        fontWeight:"bold"
    },


})

export default RoundeStyleBtm;