import React, { useState, useEffect } from 'react'
import { LoginAuthCase } from '../../Domain/useCase/auth/LoginAuth';
import { SaveUserCase } from '../../Domain/useCase/localUser/localSaveUser';
// import { GetUserCase } from "../../src/Domain/useCase/localUser/localGetUser";
import { useLocalUser } from '../../presentation/hooks/useLocalUser';

const  serviceResetPass = () => {
    const [errorMessage, seterrorMessage] = useState('')
    const [values, setValues] = useState({
        email: "",
        password: "",  
    });

    const { user, getUserSession } = useLocalUser();
    // console.log('USUARIO EN SESSION: ' + JSON.stringify(user));

    const onChange = (property: string, value: any) => {
        setValues({ ...values, [property]: value });
    }



    const validationForm = (): boolean =>{
        if (values.email === ''){
            seterrorMessage('Email es requerido')
            return false;
        }
        return true;
    };
    return {
        ...values,
        user,
        onChange,
        errorMessage
    }
}
export default serviceResetPass;