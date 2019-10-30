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

  getPlatform(id: number): Observable<Platform> {
      return this.http.get<Platform>(environment.apiUrl + '/platforms/'+id);
  }

  addPlatform(platform: Platform): Observable<Platform> {
      return this.http.post<Platform>(environment.apiUrl + '/platforms/', platform, this.httpOptions);
  }

  updatePlatform(platform: Platform, id: number): Observable<Platform> {
    return this.http.put<Platform>(environment.apiUrl + '/platforms/', { name: platform.name, company: platform.company, id: id}, this.httpOptions);
}

  deletePlatform(id: number): Observable<Platform> {
      return this.http.delete<Platform>(environment.apiUrl + '/platforms/' + id, this.httpOptions); 
  }
}
