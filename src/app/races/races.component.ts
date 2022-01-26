import { Component, OnInit } from '@angular/core';
import { Race } from '../models/race.model';
import { RaceService } from '../race.service';

@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races: Race [] = [];

  constructor(private raceService : RaceService) { }

  ngOnInit(): void {
    this.races = this.raceService.list();
  }

}
