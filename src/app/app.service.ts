import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Inmueble } from '../app/model/Inmueble';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "http://localhost:8080/api/v1/inmuebles/";

  constructor(private http: HttpClient) { }

  // Add inmueble
  addinmueble(inmueble: Inmueble){
    return this.http.post<Inmueble>(`${this.url}add`, inmueble)
  }

  // Get Inmuebles - Read (List)
  getInmuebles(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'list')
  }

  // Get Inmueble by Id - Read
  getUserById(id: number): Observable<Inmueble>{
    return this.http.get<Inmueble>(`${this.url}search?id=${id}`)
  }

  // Update User - Update
  updateInmueble(id?: number ,user?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, user)
  } 

  // Delete Inmueble - Delete
  deleteUser(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

}
