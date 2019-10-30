import { Component, OnInit } from '@angular/core';
import { PlatformsService } from './platforms.service';
import { Platform } from './platform';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.sass']
})
export class PlatformsComponent implements OnInit {

  platforms: Platform[];

  constructor(private platformService: PlatformsService, private toastr: ToastrService) { }

  ngOnInit() {
     this.platformService.getAllPlatforms().subscribe( (platforms) => {
          this.platforms = platforms;
     });
  }

  onDelete(id: number) {
     if(confirm('Are you sure to delete this data ?')) {
      this.platformService.deletePlatform(id).subscribe( () => {
        this.toastr.success('Success!', 'Platform successfully deleted!');
        
        this.platforms.forEach( (platform) => {
          if(platform.id === id) {
               this.platforms.splice( this.platforms.indexOf(platform), 1);
          }
        });
       });
     }
  }

}
