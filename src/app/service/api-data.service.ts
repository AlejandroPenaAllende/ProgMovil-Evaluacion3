import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { userI, eventGet, eventPost, assistGet, assistPost, commentGet, commentPost, listGet, listPost } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private httpC:HttpClient) { }

  //Metodo que compara el email ingresado con los registrados en la data, devuelve los datos de un usuario
  getUser(email:any):Observable<userI>{
    return this.httpC.get<userI>(`${environment.apiUrl}/usuario/?email=${email}`);
  }

  getUser2(email:userI[]):Observable<userI[]>{
    return this.httpC.get<userI[]>(`${environment.apiUrl}/usuario/?email=${email}`);
  }

  getAllUser():Observable<userI[]>{
    return this.httpC.get<userI[]>(`${environment.apiUrl}/usuario`);
  }

  //Metodo que devuelve el valor de email guardado en el sessionStorage solo si el valor no es nulo
  isLoggedIn(){
    return sessionStorage.getItem('Email')!=null;
  }

  //Metodo que ingresa los datos de un nuevo user a la data
  newUser(user:userI):Observable<userI>{
    return this.httpC.post<userI>(`${environment.apiUrl}/usuario`, user);
  }

  //Metodo que actualiza los datos de un usuario con los ingresados en un array
  putUser(user:any):Observable<userI>{
    return this.httpC.put<userI>(`${environment.apiUrl}/usuario/${user.email}`, user);
  }

  deleteUser(user:any):Observable<userI>{
    return this.httpC.delete<userI>(`${environment.apiUrl}/usuario/${user.email}`);
  }

  getAllEvent():Observable<eventGet[]>{
    return this.httpC.get<eventGet[]>(`${environment.apiUrl}/evento`);
  }

  getAllComment():Observable<commentGet[]>{
    return this.httpC.get<commentGet[]>(`${environment.apiUrl}/comentario`);
  }

  newComment(com:commentPost):Observable<commentPost>{
    return this.httpC.post<commentPost>(`${environment.apiUrl}/comentario`, com);
  }

  getAssistEmail(email:any):Observable<assistGet>{
    return this.httpC.get<assistGet>(`${environment.apiUrl}/asistencia/?uEmail=${email}`);
  }

  getAssistId(id:any):Observable<assistGet>{
    return this.httpC.get<assistGet>(`${environment.apiUrl}/asistencia/?eId=${id}`);
  }

  //*********/
  getAssistData(email:any, id:any):Observable<assistGet>{
    return this.httpC.get<assistGet>(`${environment.apiUrl}/asistencia/?eId=${id}/?uEmail=${email}`);
  }

  getAssistDup(id:any):Observable<assistGet>{
    return this.httpC.get<assistGet>(`${environment.apiUrl}/asistencia/uEmail/?eId=${id}`);
  }

  newAssist(as:assistPost):Observable<assistPost>{
    return this.httpC.post<assistPost>(`${environment.apiUrl}/asistencia`, as);
  }

  newList(li:listPost):Observable<listPost>{
    return this.httpC.post<listPost>(`${environment.apiUrl}/lista`, li);
  }

  getEventComment(ev:any):Observable<commentGet[]>{
    return this.httpC.get<commentGet[]>(`${environment.apiUrl}/comentario/?eId=${ev}`);
  }


  getListId(id:any):Observable<listGet[]>{
    return this.httpC.get<listGet[]>(`${environment.apiUrl}/lista/?eId=${id}`);
  }

  getUserAssist(as:any):Observable<assistGet[]>{
    return this.httpC.get<assistGet[]>(`${environment.apiUrl}/asistencia/?uEmail=${as}`);
  }

  getUserList(li:any):Observable<listGet[]>{
    return this.httpC.get<listGet[]>(`${environment.apiUrl}/lista/?uEmail=${li}`);
  }
}
