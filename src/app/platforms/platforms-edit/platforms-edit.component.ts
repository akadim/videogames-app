import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformsService } from '../platforms.service';

@Component({
  selector: 'app-platforms-edit',
  templateUrl: './platforms-edit.component.html',
  styleUrls: ['./platforms-edit.component.sass']
})
export class PlatformsEditComponent implements OnInit {
  
  platformForm: FormGroup;
  platformId: number;

  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute, private platformService: PlatformsService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
        this.platformId = parseInt(params['id']);

        if(this.platformId !== -1) {
          this.platformService.getPlatform(this.platformId).subscribe( (platform) => {

            this.platformForm = this.formBuilder.group({
              name: [platform.name],
              company: [platform.company]
           });
          });
        }

        this.platformForm = this.formBuilder.group({
          name: [''],
          company: ['']
       });


    });

  }

  onSubmit() {
    if(this.platformId !== -1) {
      console.log(this.platformId);
      this.platformService.updatePlatform(this.platformForm.value, this.platformId).subscribe( (response) => {
        this.router.navigate(['/platforms']);
      });
    } else {
      this.platformService.addPlatform(this.platformForm.value).subscribe( (response) => {
        this.router.navigate(['/platforms']);
      });
    }
     
  }

  cancelForm() {
     this.router.navigate(['/platforms']);
  }

}
