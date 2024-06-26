import {Component, OnInit} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {GoogleMapsModule, GoogleMap, MapHeatmapLayer} from "@angular/google-maps";

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  imports: [
    BrowserModule,
    GoogleMapsModule,
    GoogleMap,
    GoogleMapsModule
  ],
  standalone: true,
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 51.678418, lng: 7.809007 };
  zoom = 8;

  ngOnInit(): void {
  }
}
