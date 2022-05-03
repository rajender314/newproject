import { Component, OnInit } from '@angular/core';
// declare var google: google;
// import { google } from 'google-maps';
// import {} from "googlemaps";
declare const google: any;
// declare var google;






@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  location: Location;
  origin = {};
  destination = {};
  distance;
  previous;
  // markerIcon = '../assets/markerIcon.png';

  markerIcon = {
                  url: '../assets/markerIcon.png',
                  scaledSize: {
                    width: 25,
                    height: 25
                  }
  };



    ngOnInit() {
        this.location = {
            latitude: 17.4803,
            longitude: 78.5699,
            mapType: "satelite",
            zoom: 15,
            markers:[
               {
                  lat: 17.4803,
                  lng: 78.5699,
                  label: "kushaiguda",
                  draggable: true

              },
                {
                  lat: 17.4806,
                  lng: 78.5703,
                  label: "new one",
                  draggable: true

              },
              {
                lat: 17.4808,
                lng: 78.5706,
                label: "new onee",
                draggable: true

            }
        ] 
        }

        this.origin = { 
          lat: 24.799448, 
          lng: 120.979021 
      };
        this.destination = { 
            lat: 24.799524, 
            lng: 120.975017 
        }

      //  this.distance = this.calculateDistance(this.origin, this.destination)

      

    }

    

    clickedMarker(infowindow) {
      if (this.previous) {
          this.previous.close();
      }
      this.previous = infowindow;
   }
    

    calculateDistance(point1, point2) {
      const p1 = new google.maps.LatLng(
      point1.lat,
      point1.lng
      );
      const p2 = new google.maps.LatLng(
      point2.lat,
      point2.lng
      );
      return (
      google.maps.geometry.spherical.computeDistanceBetween(p1, p2)/1000
      ).toFixed(2);
  }

   

    addMarker(lat: number, lng: number) {
      this.location.markers.push({
          lat,
          lng,
          label: Date.now().toLocaleString(),
          draggable: true

      })
  }
}







  interface Marker {
    lat: number;
    lng: number;
    label: string;
    draggable: boolean;


  }
interface Location {
    latitude: number;
    longitude: number;
    mapType: string;
    zoom: number;
    markers: Array<Marker>;



}


