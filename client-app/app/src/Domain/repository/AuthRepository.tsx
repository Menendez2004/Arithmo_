import { ResponseAPI } from "../../data/source/remote/model/ResponseApi";
import { User } from "../entities/User"
import {Score} from "../entities/userScore"
import * as ImagePicker from 'expo-image-picker';


export interface AuthRepository {

    login(email: string, password: string): Promise<ResponseAPI>;
    register(user: User): Promise<ResponseAPI>;
    registerWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPI>;
    registerScore( score: Score ): Promise<ResponseAPI>


};
