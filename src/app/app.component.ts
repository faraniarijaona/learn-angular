import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  mySnaps!: FaceSnap[];

  ngOnInit(){
    this.mySnaps = [{
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 255,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location : 'Paris'
    },

   {
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      createdDate: new Date(),
      snaps: 160,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg'
    }];
  }
}
