import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './app/src/views/Home/HomeScreen';
import { ResetPass } from './app/src/views/resetpassword/resetPass';
import { RegisterScreen } from './app/src/views/Register/RegisterScreen';
import { SelecDificultScreen } from './app/src/views/Dificults/selecDificultScreen';
import { FacilScreen } from './app/src/views/Dificults/FacilScreen';
import { DificilScreen } from './app/src/views/Dificults/DificilScreen';
import { MediumScreen } from './app/src/views/Dificults/MediumScreen';
import { ExpertScreen } from './app/src/views/Dificults/ExpertScreen';
import { HomepageScream } from './app/src/views/index/HomepageScream';
import { InfoProfileScreen } from './app/src/views/profile/infoProfile';
import { SettingsScreen } from './app/src/views/Settings/SettingsScreen';
import { PorfileUpdateScreen } from './app/src/views/profile/editProfile/editiProfile';
import { User } from './app/src/Domain/entities/User';
import { UserProvider } from './app/src/provider/UserContex';

//GameScreenEasy
import { GameScreenEasy } from './app/src/views/Dificults/easydificult/GameScreen easy 1';
import { GameScreenEasy2 } from './app/src/views/Dificults/easydificult/GameScreen easy 2';
import { GameScreenEasy3 } from './app/src/views/Dificults/easydificult/GameScreen easy 3';
import { GameScreenEasy4 } from './app/src/views/Dificults/easydificult/GameScreen easy 4';
import { GameScreenEasy5 } from './app/src/views/Dificults/easydificult/GameScreen easy 5';
import { GameScreenEasy6 } from './app/src/views/Dificults/easydificult/GameScreen easy 6';

//GameScreenMedium
import { GameScreenMedium1 } from './app/src/views/Dificults/midiunDificult/GameScreen midium1';
import { GameScreenMedium2 } from './app/src/views/Dificults/midiunDificult/GameScreen midium2';
import { GameScreenMedium3 } from './app/src/views/Dificults/midiunDificult/GameScreen midium3';
import { GameScreenMedium4 } from './app/src/views/Dificults/midiunDificult/GameScreen midium4';
import { GameScreenMedium5 } from './app/src/views/Dificults/midiunDificult/GameScreen  midium5';
import { GameScreenMedium6 } from './app/src/views/Dificults/midiunDificult/GameScreen midium6';

//GameScreenHard
// import { GameScreenHard1 } from './app/src/views/Dificults/hardDificult/GameScreen hard1';
import { GameScreenHard2 } from './app/src/views/Dificults/hardDificult/GameScreen hard2';
import { GameScreenHard3 } from './app/src/views/Dificults/hardDificult/GameScreen hard3';
import { GameScreenHard4 } from './app/src/views/Dificults/hardDificult/GameScreen hard4';
import { GameScreenHard5 } from './app/src/views/Dificults/hardDificult/GameScreen hard5';
import { GameScreenHard6 } from './app/src/views/Dificults/hardDificult/GameScreen hard6';

//GameScreenExpert
import { GameScreenExpert1 } from './app/src/views/Dificults/expertDificult/GameScreen expert1';
import { GameScreenExpert2 } from './app/src/views/Dificults/expertDificult/GameScreen expert2';
import { GameScreenExpert3 } from './app/src/views/Dificults/expertDificult/GameScreen expert3';
import { GameScreenExpert4 } from './app/src/views/Dificults/expertDificult/GameScreen expert4';
import { GameScreenExpert5 } from './app/src/views/Dificults/expertDificult/GameScreen expert5';
import { GameScreenExpert6 } from './app/src/views/Dificults/expertDificult/GameScreen expert6';

export type RootStackParamList = {
  //principals screens 
  HomeScreen: undefined,
  ResetPass: undefined,
  RegisterScreen: undefined,
  InfoProfileScreen: undefined,
  SelecDificultScreen: undefined,
  FacilScreen: undefined,
  DificilScreen: undefined,
  MediumScreen: undefined,
  ExpertScreen: undefined,
  HomepageScream: undefined,
  SettingsScreen: undefined,
  PorfileUpdateScreen: { user: User },

  //GameScreenEasy
  GameScreenEasy: undefined,
  GameScreenEasy2: undefined,
  GameScreenEasy3: undefined,
  GameScreenEasy4: undefined,
  GameScreenEasy5: undefined,
  GameScreenEasy6: undefined,

  //GameScreenMedium
  GameScreenMedium1: undefined,
  GameScreenMedium2: undefined,
  GameScreenMedium3: undefined,
  GameScreenMedium4: undefined,
  GameScreenMedium5: undefined,
  GameScreenMedium6: undefined,

  //GameScreenHard
  GameScreenHard1: undefined,
  GameScreenHard2: undefined,
  GameScreenHard3: undefined,
  GameScreenHard4: undefined,
  GameScreenHard5: undefined,
  GameScreenHard6: undefined,

  //GameScreenExpert
  GameScreenExpert1: undefined,
  GameScreenExpert2: undefined,
  GameScreenExpert3: undefined,
  GameScreenExpert4: undefined,
  GameScreenExpert5: undefined,
  GameScreenExpert6: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {

  return (
    <NavigationContainer>
      <UserState>
              <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
        name='ResetPass'
        component={ResetPass}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            // headerShown: true,
            title: "Registrate"
          }} />
        <Stack.Screen
          name="SelecDificultScreen"
          component={SelecDificultScreen}
          options={{
            headerShown: false,
            title: "DificultScreen"
          }} />
        <Stack.Screen
        // @ts-ignore 
          name="FacilScreen"
          component={FacilScreen}
          options={{
            headerShown: false,
            title: "FacilScreen"
          }} />
          
        <Stack.Screen
        // @ts-ignore 
          name="DificilScreen"
          component={DificilScreen}
          options={{
            headerShown: false,
            title: "DificilScreen"
          }} />
        <Stack.Screen
        // @ts-ignore 
          name="MediumScreen"
          component={MediumScreen}
          options={{
            headerShown: false,
            title: "MediumScreen"
          }} />
        <Stack.Screen
        // @ts-ignore 
          name="ExpertScreen"
          component={ExpertScreen}
          options={{
            headerShown: false,
            title: "ExpertScreen"
          }} />
        <Stack.Screen
          name='HomepageScream'
          component={HomepageScream}
          options={{
            headerShown: false,
            title: "Homepage"
          }} />


        <Stack.Screen
          name='GameScreenEasy'
          component={GameScreenEasy}
          options={{
            headerShown: false,
            title: "GameScreenEasy"
          }} />

        <Stack.Screen
          name='SettingsScreen'
          component={SettingsScreen}
          options={{
            headerShown: false,
            title: "SettingsScreen"
          }} />

        <Stack.Screen
          name="InfoProfileScreen"
          component={InfoProfileScreen}
          options={{
            headerShown: false,
            title: "InfoProfileScreen"
          }}
        />

        <Stack.Screen
          name='PorfileUpdateScreen'
          component={PorfileUpdateScreen}
          options={{
            headerShown: false,
            title: "Editar perfil"
          }} />

        <Stack.Screen
          name='GameScreenEasy2'
          component={GameScreenEasy2}
          options={{
            headerShown: false,
            title: "GameScreenEasy2"
          }} />

        <Stack.Screen
          name='GameScreenEasy3'
          component={GameScreenEasy3}
          options={{
            headerShown: false,
            title: "GameScreenEasy3"
          }} />

        <Stack.Screen
          name='GameScreenEasy4'
          component={GameScreenEasy4}
          options={{
            headerShown: false,
            title: "GameScreenEasy4"
          }} />

        <Stack.Screen
          name='GameScreenEasy5'
          component={GameScreenEasy5}
          options={{
            headerShown: false,
            title: "GameScreenEasy5"
          }} />

        <Stack.Screen
          name='GameScreenEasy6'
          component={GameScreenEasy6}
          options={{
            headerShown: false,
            title: "GameScreenEasy6"
          }} />

        <Stack.Screen
          name='GameScreenMedium1'
          component={GameScreenMedium1}
          options={{
            headerShown: false,
            title: "GameScreenMedium1"
          }} />

        <Stack.Screen
          name='GameScreenMedium2'
          component={GameScreenMedium2}
          options={{
            headerShown: false,
            title: "GameScreenMedium2"
          }} />

        <Stack.Screen
          name='GameScreenMedium3'
          component={GameScreenMedium3}
          options={{
            headerShown: false,
            title: "GameScreenMedium3"
          }} />

        <Stack.Screen
          name='GameScreenMedium4'
          component={GameScreenMedium4}
          options={{
            headerShown: false,
            title: "GameScreenMedium4"
          }} />

        <Stack.Screen
          name='GameScreenMedium5'
          component={GameScreenMedium5}
          options={{
            headerShown: false,
            title: "GameScreenMedium5"
          }} />

        <Stack.Screen
          name='GameScreenMedium6'
          component={GameScreenMedium6}
          options={{
            headerShown: false,
            title: "GameScreenMedium6"
          }} />
{/* 
        <Stack.Screen
          name='GameScreenHard1'
          component={GameScreenHard1}
          options={{
            headerShown: false,
            title: "GameScreenHard1"
          }} /> */}

        <Stack.Screen
          name='GameScreenHard2'
          component={GameScreenHard2}
          options={{
            headerShown: false,
            title: "GameScreenHard2"
          }} />

        <Stack.Screen
          name='GameScreenHard3'
          component={GameScreenHard3}
          options={{
            headerShown: false,
            title: "GameScreenHard3"
          }} />

        <Stack.Screen
          name='GameScreenHard4'
          component={GameScreenHard4}
          options={{
            headerShown: false,
            title: "GameScreenHard4"
          }} />

        <Stack.Screen
          name='GameScreenHard5'
          component={GameScreenHard5}
          options={{
            headerShown: false,
            title: "GameScreenHard5"
          }} />

        <Stack.Screen
          name='GameScreenHard6'
          component={GameScreenHard6}
          options={{
            headerShown: false,
            title: "GameScreenHard6"
          }} />

        <Stack.Screen
          name='GameScreenExpert1'
          component={GameScreenExpert1}
          options={{
            headerShown: false,
            title: "GameScreenExpert1"
          }} />

        <Stack.Screen
          name='GameScreenExpert2'
          component={GameScreenExpert2}
          options={{
            headerShown: false,
            title: "GameScreenExpert2"
          }} />

        <Stack.Screen
          name='GameScreenExpert3'
          component={GameScreenExpert3}
          options={{
            headerShown: false,
            title: "GameScreenExpert3"
          }} />

        <Stack.Screen
          name='GameScreenExpert4'
          component={GameScreenExpert4}
          options={{
            headerShown: false,
            title: "GameScreenExpert4"
          }} />

        <Stack.Screen
          name='GameScreenExpert5'
          component={GameScreenExpert5}
          options={{
            headerShown: false,
            title: "GameScreenExpert5"
          }} />

        <Stack.Screen
          name='GameScreenExpert6'
          component={GameScreenExpert6}
          options={{
            headerShown: false,
            title: "GameScreenExpert6"
          }} />
      </Stack.Navigator>
      </UserState>

    </NavigationContainer>

  )
};

const UserState = ({children}: any)=>{
  return(
    <UserProvider>
      {children}
    </UserProvider>
  )
}
export default App;