import { AxiosError } from "axios";
import { AuthRepository } from "../../Domain/repository/AuthRepository";
import { User } from "../../Domain/entities/User";
import { Score } from "../../Domain/entities/userScore";
import { ArithmoApi, ArithmoApiForImage } from "../source/remote/api/ArithmoApi";
import { ResponseAPI } from "../source/remote/model/ResponseApi";
import mime from "mime";
import * as ImagePicker from 'expo-image-picker'

export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User): Promise<ResponseAPI> {
        try {

            const response = await ArithmoApi.post<ResponseAPI>("/users/create", user);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);

        };
    };

    async registerWithImage(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPI> {
        try {

            let data = new FormData();
            // @ts-ignore
            data.append("image", {
                uri: file.uri,
                name: file.uri,
                type: mime.getType(file.uri)!
            });
            data.append('user', JSON.stringify(user));

            const response = await ArithmoApiForImage.post<ResponseAPI>("/users/createWithImage", data);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);

        };
    }



    async login(email: string, password: string): Promise<ResponseAPI> {
        try {

            const response = await ArithmoApi.post<ResponseAPI>("/users/login", {
                email: email,
                password: password
            });
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);

        };
    };
    async registerScore(score: Score): Promise<ResponseAPI> {
        try {

            const response = await ArithmoApi.post<ResponseAPI>("/score/create", score);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log("ERROR: " + JSON.stringify(e.response?.data));
            const apiError: ResponseAPI = JSON.parse(JSON.stringify(e.response?.data))
            return Promise.resolve(apiError);

        };
    };
};







