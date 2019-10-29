import { Component, OnInit } from '@angular/core';

import { Videogame } from './videogame';
import { VideogamesService } from './videogames.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.sass']
})
export class VideogamesComponent implements OnInit {
  
  videogames: Videogame[];

  constructor(private videogameService: VideogamesService) { }

  ngOnInit() {
     this.videogameService.getAllVideogames().subscribe( (videogames) => {
          this.videogames = videogames;
     });
  }

}
