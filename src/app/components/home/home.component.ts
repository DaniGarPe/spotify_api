import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  nuevasCanciones: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string | undefined;

  constructor( private spotify: SpotifyService) {
    
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe( (data: any)  => {
      this.nuevasCanciones = data.albums.items;
      this.loading = false;
    }, ( errorServicio ) => {
      this.error = true;
      this.loading = false;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    })

  }

}
