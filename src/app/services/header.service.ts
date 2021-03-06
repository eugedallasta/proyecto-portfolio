import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getUser():Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}persona/id/2`);
  }

  public updateUser(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}persona/update`,persona);
  }


}
