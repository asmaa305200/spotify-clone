import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { SongDataService } from 'src/app/services/song-data.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit{
  public songData!: any;
  constructor(
    private _SongDataService: SongDataService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this._SongDataService.songData.subscribe((data) => (this.songData = data))
}
}