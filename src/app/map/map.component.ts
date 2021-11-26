import { MapService } from './map.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  constructor(private map: MapService) {  }

  ngOnInit() {
    this.map.buildMap();
  }


}
