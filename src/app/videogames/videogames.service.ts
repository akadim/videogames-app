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

  getVideogame(id: number): Observable<Videogame> {
      return this.http.get<Videogame>(environment.apiUrl + '/videogames/'+id);
  }

  addVideogame(videogame: Videogame): Observable<Videogame> {
      return this.http.post<Videogame>(environment.apiUrl + '/videogames/', videogame, this.httpOptions);
  }

  updateVideogame(videogame: Videogame, id: number): Observable<Videogame> {
      return this.http.put<Videogame>(environment.apiUrl + '/videogames/', { name: videogame.name, platform: videogame.platform, id: id}, this.httpOptions);
  }

  deleteVideogame(id: number): Observable<Videogame> {
      return this.http.delete<Videogame>(environment.apiUrl + '/videogames/' + id, this.httpOptions); 
  }
}
