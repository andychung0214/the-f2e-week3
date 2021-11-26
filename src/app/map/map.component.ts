import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  var mymap = L.map('map').setView([51.505, -0.09], 13);
  constructor() { }

  ngOnInit() {
  }

}
