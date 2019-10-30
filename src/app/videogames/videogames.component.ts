import { Component, OnInit } from '@angular/core';

import { Videogame } from './videogame';
import { VideogamesService } from './videogames.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.sass']
})
export class VideogamesComponent implements OnInit {
  
  videogames: Videogame[];

  constructor(private videogameService: VideogamesService, private toastr: ToastrService) { }

  ngOnInit() {
     this.videogameService.getAllVideogames().subscribe( (videogames) => {
          this.videogames = videogames;
     });
  }

  onDelete(id: number) {
    if(confirm('Are you sure to delete this data ?')) {
      this.videogameService.deletePlatform(id).subscribe( () => {
        this.toastr.success('Success!', 'Videogame successfully deleted!');
        
        this.videogames.forEach( (videogame) => {
          if(videogame.id === id) {
               this.videogames.splice( this.videogames.indexOf(videogame), 1);
          }
        });
       });
    }
 }

}
