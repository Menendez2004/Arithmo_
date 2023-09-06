import { StyleSheet } from "react-native";

const ProfileStyle = StyleSheet.create({
    container: {
        backgroundColor: '#0A4D68',
        width: '100%',
        borderBottomLeftRadius: 55,
        flexDirection: 'row',
        alignItems: 'center'   
    },

    container_text:{
        color: '#088395',
        fontSize: 25,
        textAlign:'center'
    },

    container_2:{
        flexDirection: 'column',
        backgroundColor: 'white',
        elevation: 20,
        width: "80%",
        height: "51.5%",
        justifyContent: 'center',
        alignContent:'center',
        padding: 15,
        marginTop: 15,
        marginBottom: 30,
        marginLeft: 38
        
    },

    container_3:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        
    },

    container_icon:{
        width:40,
        borderRadius: 40,
        backgroundColor: 'white',
        elevation: 20,
        marginRight: 10
    },

    button:{
        width:100,
        height:50,
        borderWidth:.5,
        backgroundColor:"#0A4D68",
        alignContent: 'center',
        alignItems: 'center'
    },

    container_button:{
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default ProfileStyle