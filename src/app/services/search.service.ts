import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  public isSearchVisible: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

}
