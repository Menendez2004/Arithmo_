import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
//auth cases
import { RegisterWithImageUseCase } from "../../../src/Domain/useCase/auth/RegisterWithImageAuth";
import { SaveUserCase } from '../../../src/Domain/useCase/localUser/localSaveUser';
import { useLocalUser } from '../../presentation/hooks/useLocalUser';



const RegisterViewModel = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
    edad: "",
  });
  
  const [loanding, setLoanding] = useState(false)
  const [file, setFile] = useState<ImagePicker.ImagePickerAsset>()
  const { user, getUserSession } = useLocalUser();

  const SelecImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);

    }
  };
  //end selecImage


  //Start TakePicture
  const TakePicture = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onChange('image', result.assets[0].uri);
      setFile(result.assets[0]);

    }
  };
  //end TakePicture

  //REGISTRO DEL USUARIO
  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const Register = async () => {
    if (formValid()) {
      setLoanding(true);
      try {
        // const response = await RegisterAuthUseCase(values);
        const response = await RegisterWithImageUseCase(values, file!);
        console.log('RESULT: ' + JSON.stringify(response));
  
        if (response.success) {
          await SaveUserCase(response.data);
          getUserSession();
        } else {
          setErrorMessage(response.message);
        }
      } catch (error) {
        console.error('Error during registration:', error);
        // Manejar el error de acuerdo a tus necesidades, por ejemplo:
        setErrorMessage('Hubo un error durante el registro. Por favor, intenta nuevamente.');
      } finally {
        setLoanding(false);
      }
    }
  };
  
  //end Register

  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };
  

  //VALIDACIÓN DEL FOMRULARIO
  const formValid = (): boolean => {

    if (!isValidEmail(values.email)) {
      setErrorMessage('El email no es valido');
      return false;
    }

    if (values.name === '') {
      setErrorMessage('El campo: Nombre no puede estar vacio');
      return false;
    }
    if (values.lastName === '') {
      setErrorMessage('Campo vacio : Apellido no puede estar vacio');
      return false;
    }
    if (values.email === '') {
      setErrorMessage('Campo vacio : Email no puede estar vacio ');
      return false;
    }
    if (values.password === '') {
      setErrorMessage('Campo vacio : Contraseña no puede estar vacio');
      return false;
    }
    if (values.confirmPassword === '') {
      setErrorMessage('Campo vacio : Confirmar contraseña');
      return false;
    }
    if (values.password != values.confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden, verifica que hayas escrito correctamenete tu contraseña nuevamente');
      return false;
    }
    if (values.edad === '') {
      setErrorMessage('Campo vacio : Edad no puede estar vacio');
      return false;
    }
    if (values.image === '') {
      setErrorMessage('Campo vacio : Foto no puede estar vacio');
      return false;
    }
    return true;

  }





  return {
    ...values,
    onChange,
    Register,
    formValid,
    TakePicture,
    errorMessage,
    SelecImage,
    isValidEmail,
    user,
    loanding
  };
};

export default RegisterViewModel;
