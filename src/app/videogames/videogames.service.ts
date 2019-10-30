import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Videogame } from './Videogame';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideogamesService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  getAllVideogames() : Observable<Videogame[]> {
      return this.http.get<Videogame[]>(environment.apiUrl + '/videogames');
  }

  deletePlatform(id: number): Observable<Videogame> {
      return this.http.delete<Videogame>(environment.apiUrl + '/videogames/' + id, this.httpOptions); 
  }
}
