import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datos } from '../interface/Datos';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private myAppUrl : string = environment.endpoint;
  private myApiUrl : string = 'api/Datos/'
  constructor(private http : HttpClient) { }

  getDatos() : Observable<Datos[]>{
    return this.http.get<Datos[]>(`${this.myAppUrl}${this.myApiUrl}`);
}

getDato(id : number) : Observable<Datos>{
  return this.http.get<Datos>(`${this.myAppUrl}${this.myApiUrl}${id}`);
}

addDatos(datos : Datos) : Observable<number>{
return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, datos);
}
}
