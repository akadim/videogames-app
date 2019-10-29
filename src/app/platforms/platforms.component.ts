import { Component, OnInit } from '@angular/core';
import { PlatformsService } from './platforms.service';
import { Platform } from './platform';

@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.sass']
})
export class PlatformsComponent implements OnInit {

  platforms: Platform[];

  constructor(private platformService: PlatformsService) { }

  ngOnInit() {
     this.platformService.getAllPlatforms().subscribe( (platforms) => {
          this.platforms = platforms;
     });
  }

}
