import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getCategories()
    .subscribe( (data:any) => this.categories = data.categories.items );
  }

  ngOnInit() {
  }

}
