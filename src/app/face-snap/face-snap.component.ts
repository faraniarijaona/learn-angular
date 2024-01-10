import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap; 

  isAlreadySnap!:boolean;
  textButton!:string;

  ngOnInit(){
    this.isAlreadySnap = false;
    this.textButton = 'Oh Snap!';
  }

  caca(){
    this.isAlreadySnap = !this.isAlreadySnap;

    if(!this.isAlreadySnap){
      this.textButton = 'Oh Snap!';
      this.faceSnap.snaps--;
    }
    else{
      this.textButton = 'Oops, un Snap';
      this.faceSnap.snaps++;
    }
  }
}
