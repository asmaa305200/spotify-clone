import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{
  @Output() public inputFilterRes: EventEmitter<any> = new EventEmitter()
  public isSearchFillVisable :boolean = false;
  constructor (private _Router:Router , private _SearchService:SearchService){}
  ngOnInit(): void {
    this._SearchService.isSearchVisible.subscribe( status =>{
this.isSearchFillVisable= status;
    })
  }
navigateToLogin(){
  this._Router.navigate(['/login'])
}
filterBrowsingList(inputElement: HTMLInputElement) {
  // console.log(inputElement);
  this.inputFilterRes.emit(inputElement.value);
}
}
