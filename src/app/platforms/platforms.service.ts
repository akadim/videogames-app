import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform } from './platform';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllPlatforms(): Observable<Platform[]> {
     return this.http.get<Platform[]>(environment.apiUrl + '/platforms');
  }

  deletePlatform(id: number): Observable<Platform> {
      return this.http.delete<Platform>(environment.apiUrl + '/platforms/' + id, this.httpOptions); 
  }
}
