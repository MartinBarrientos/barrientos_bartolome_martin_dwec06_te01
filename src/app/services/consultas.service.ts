import { Injectable } from '@angular/core';
//para poder hacer consultas
import { HttpClient, HttpHeaders } from '@angular/common/http';
//para observar los cambios 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  // public url : string;
  public id: number =0;
  constructor(public _http : HttpClient) { 
  }  
  //consultas a la api de mockapi que hemos creado
  Create(post : any):Observable<any>{
    return this._http.post('https://681cc262f74de1d219adb2db.mockapi.io/posts/', post)
  }
  Read():Observable<any>{
    return this._http.get('https://681cc262f74de1d219adb2db.mockapi.io/posts/')
  }
  ReadById(id : number):Observable<any>{
    return this._http.get(`https://681cc262f74de1d219adb2db.mockapi.io/posts/${id}`)
  }
  Update(id:number,datos: any):Observable<any>{
    return this._http.put('https://681cc262f74de1d219adb2db.mockapi.io/posts/'+id, datos)
  }
  Delete(id:number):Observable<any>{
    return this._http.delete('https://681cc262f74de1d219adb2db.mockapi.io/posts/'+id)
  }
}
