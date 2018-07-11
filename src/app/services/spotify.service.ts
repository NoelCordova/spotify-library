import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQDpcNXCu0rT90ph_au4QGQI2wEPEbB5WPFgHjjEVQLhFMKl04YKDtCJM7spCt4biFQzthprP1XeF8BQwyA';

  constructor(private http: HttpClient) { }

  getNewRelases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

  getCategories() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get('https://api.spotify.com/v1/browse/categories', { headers });

  }

}
