import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View, Image, TextInput, TouchableOpacity, Button, StyleSheet } from 'react-native';
// import { SelectList } from 'react-native-dropdown-select-list'

//Translation
// import { useTranslation } from 'react-i18next'
import styles from '../../../styles/Styles';


export const SettingsScreen = () => {

  
  // const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>

        <Text style={hola.text}>Idioma</Text>
        <View style={hola.container_button}>
          
          <TouchableOpacity style={hola.button} >
            <Text style={hola.text_button}>Español</Text>
          </TouchableOpacity>

          <TouchableOpacity style={hola.button} >
            <Text style={hola.text_button}>Ingles</Text>
          </TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  )
}

const hola = StyleSheet.create({
  container_button:{
    flexDirection:'row',
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  button:{
    width: 90,
    height: 50,
    alignContent: 'center',
    backgroundColor: '#0A4D68',
    padding: 15,
    borderRadius: 5,
    marginRight: 5,
    alignItems: 'center'
  },

  text_button:{
    color: '#05BFDB'
  },
  text:{
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5
  }
})


