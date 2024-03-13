import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Artist } from '../interfaces/artist';
@Injectable({
  providedIn: 'root'
})
export class GetArtistsService {

  private readonly API = "http://localhost:3000/artists"

  constructor(
    private http: HttpClient
  ) { }

  getArtists(searchData:string):Observable<Artist[]> {
    let params = new HttpParams().set('name_like', searchData);

    return this.http.get<Artist[]>(this.API, { params })
  }
}
