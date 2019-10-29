import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videogame } from './Videogame';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {

  constructor(private http:HttpClient) { }

  getAllVideogames() : Observable<Videogame[]> {
      return this.http.get<Videogame[]>(environment.apiUrl + '/videogames');
  }
}
