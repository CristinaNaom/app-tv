import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Show } from '../models/show';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private http: HttpClient) { }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(`${environment.api_url}/shows`)
  }

  getShowById(id: number): Observable<Show> {
    return this.http.get<Show>(`${environment.api_url}/shows/${id}`)
  }



  getShowsByName(name: string): Observable<Show[]> {
    return this.http.get<any[]>(`${environment.api_url}/search/shows?q=${name}`)
      .pipe(
        map((response: any[]) => response.map(item => item.show)) // Estrai l'oggetto show da ogni elemento della risposta
      );
  }
}



