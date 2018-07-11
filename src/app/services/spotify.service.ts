import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQCRDwifx6lctYcvBcFISJhyPvlel37bwB5WxJi3PlGqa0cljMl8_1PHW7sRu1NAc_BW2jkD0jbFbLU5R5s';
  url = 'https://api.spotify.com';

  constructor(private http: HttpClient) { }

  getNewRelases() {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.token }`
    });

    return this.http.get(`${ this.url }/v1/browse/new-releases`, { headers })
    .pipe( map( (data:any) => data.albums.items ));

  }

  getCategories() {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.token }`
    });

    return this.http.get(`${ this.url }/v1/browse/categories`, { headers })
    .pipe( map( (data:any) => data.categories.items ));

  }

  getArtist(input:string) {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ this.token }`
    });

    return this.http.get(`${ this.url }/v1/search?q=${ input }&type=artist&limit=20`, { headers })
    .pipe( map( (data:any) => data.artists.items ));

  }

}
