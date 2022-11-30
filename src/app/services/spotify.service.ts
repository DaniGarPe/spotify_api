import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,Subject, pipe } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': "Bearer BQCPhKSckewEmkEWUS6iBfuQAuyXzxhLVmowsFO9E-nwftq4FlWneNUyuRNrCBUiYmkCORxEekslNp65mwqatJfwnXoO56KzuzSPkfsEIzAThobr0TQ"
    });

    return this.http.get(url , { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=18');
  }

  getArtistas( termino: string ){ 
    return this.getQuery('search?q=' + termino + '&type=artist&limit=15');
  }

  getArtista( id: string ){ 
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ){ 
    return this.getQuery(`artists/${ id }/top-tracks?country=us`);
  }

}
