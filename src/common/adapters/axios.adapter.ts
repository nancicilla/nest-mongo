import { Injectable } from "@nestjs/common";
import { HttpAdapter } from "../interfaces/http-adapter.interfa";

import axios, { AxiosInstance } from 'axios';
@Injectable()
export class AxiosAdapter implements HttpAdapter{
    private  axios:AxiosInstance=axios;
 async get<T>(url:string):Promise<T>{
    
    try {
        const {data} =await this.axios.get(url);
        return data;
    } catch (error) {
        throw new Error('Error: check logs server ')
    }
 }
}