import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Ciudadano} from '../models/Ciudadano';

@Injectable({
  providedIn: 'root'
})
export class CiudadanosService {
  apiUrl= 'https://localhost:44351/api/ciudadano';

  constructor(private http: HttpClient) { }

  obtenerCiudadano(id:Number){
    return this.http.get<Ciudadano>(this.apiUrl + '/' + id);
  }

  obtenerCiudadanos(){
    return this.http.get<Ciudadano[]>(this.apiUrl); 
  }
}
