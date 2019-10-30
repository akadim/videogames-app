import { Component, OnInit } from '@angular/core';

import { Videogame } from './videogame';
import { VideogamesService } from './videogames.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.sass']
})
export class VideogamesComponent implements OnInit {
  
  videogames: Videogame[];

  constructor(private videogameService: VideogamesService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
     this.videogameService.getAllVideogames().subscribe( (videogames) => {
          this.videogames = videogames;
     });
  }

  onEdit(id: number) {
    this.router.navigate(['/videogame/'+id]);
  }

  onDelete(id: number) {
    if(confirm('Are you sure to delete this data ?')) {
      this.videogameService.deleteVideogame(id).subscribe( () => {
        this.toastr.success('Videogame successfully deleted!', 'Success!');
        
        this.videogames.forEach( (videogame) => {
          if(videogame.id === id) {
               this.videogames.splice( this.videogames.indexOf(videogame), 1);
          }
        });
       });
    }
 }

}
