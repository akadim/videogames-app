import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platform } from './platform';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatformsService {

  constructor(private http: HttpClient) { }

  getAllPlatforms(): Observable<Platform[]> {
     return this.http.get<Platform[]>(environment.apiUrl + '/platforms');
  }
}
