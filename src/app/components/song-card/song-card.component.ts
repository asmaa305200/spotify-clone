import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
  @Input() public playlistTumbnail!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public link!: string;
  @Input() public song_id!: string | number;
  constructor( private _Router:Router , private _SongDataService:SongDataService){}
  ngOnInit(): void {
  }
  onNavigateToSong() {
    this._Router.navigateByUrl(`/song/${this.song_id}`, {
      state: {
        thumbnail: this.playlistTumbnail,
        title: this.title,
        description: this.description,
       link:this.link,
        id: this.song_id,
      },
    });
  }
  
}
