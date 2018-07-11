import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-new-relases',
  templateUrl: './new-relases.component.html',
  styleUrls: ['./new-relases.component.css']
})
export class NewRelasesComponent implements OnInit {

  newRelases:any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewRelases()
    .subscribe( (data:any) => this.newRelases = data.albums.items );
  }

  ngOnInit() {
  }

}
