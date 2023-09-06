
//imports
import React, { createContext, useState, useEffect } from "react";
import { User } from "../Domain/entities/User";
import { SaveUserCase } from "../Domain/useCase/localUser/localSaveUser";
import { GetUserCase } from "../Domain/useCase/localUser/localGetUser";
import { OutUserCase } from "../Domain/useCase/localUser/localOutUser";


export const userInitialState: User = {
    id: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: '',
    session_token: '',
    edad: '',
}

export interface UserContexProps {
    user: User,
    saveUserSession:(user: User) => Promise<void>;
    getUserSession: () => Promise<void>
    outUserSession:() => Promise<void>;

};

export const UserContext = createContext({} as UserContexProps);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const  [user, setUser] = useState(userInitialState)
    
    useEffect(() => {
        getUserSession();
    }, [])
    
    
    const saveUserSession= async(user: User) =>{
        await SaveUserCase(user);
        setUser(user);
    }

    const getUserSession =async () => {
        const user = await GetUserCase();
        setUser(user);
    }

    const outUserSession = async () => {
        await OutUserCase();
        setUser(userInitialState);
    }

    return (
        <UserContext.Provider value={{
            user,
            saveUserSession,
            getUserSession,
            outUserSession,
        }}>
            {children}
        </UserContext.Provider>
    )
}

