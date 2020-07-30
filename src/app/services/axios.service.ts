import { Injectable } from '@angular/core';
import axios from 'axios'
import config from './config'
@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    this.axios = axios.create({baseURL: config.baseURL})
  }
  axios: any;
}
