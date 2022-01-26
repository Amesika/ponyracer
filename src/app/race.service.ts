import { Injectable } from '@angular/core';
import { Race } from './models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor() { }

  list():Race[]{
     return [
      {name: 'Lyon'},
      {name: 'Los Angeles'},
      {name: 'Sydney'},
      {name: 'Tokyo'},
      {name: 'Casablanca'}
    ];
  }
}
