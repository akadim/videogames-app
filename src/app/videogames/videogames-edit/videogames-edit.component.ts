import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VideogamesService } from '../videogames.service';

@Component({
  selector: 'app-videogames-edit',
  templateUrl: './videogames-edit.component.html',
  styleUrls: ['./videogames-edit.component.sass']
})
export class VideogamesEditComponent implements OnInit {
  
  videogameId: number;
  videogameForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private videogameService: VideogamesService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.videogameId = parseInt(params['id']);

      if(this.videogameId !== -1) {
        this.videogameService.getVideogame(this.videogameId).subscribe( (videogame) => {

          this.videogameForm = this.formBuilder.group({
            name: [videogame.name],
            platform: [videogame.platform]
         });
        });
      }

      this.videogameForm = this.formBuilder.group({
        name: [''],
        platform: ['']
     });


  });
  }

  onSubmit() {
    if(this.videogameId !== -1) {
      this.videogameService.updateVideogame(this.videogameForm.value, this.videogameId).subscribe( (response) => {
        this.router.navigate(['/videogames']);
      });
    } else {
      this.videogameService.addVideogame(this.videogameForm.value).subscribe( (response) => {
        this.router.navigate(['/videogames']);
      });
    }
     
  }

  cancelForm() {
     this.router.navigate(['/videogames']);
  }

}
