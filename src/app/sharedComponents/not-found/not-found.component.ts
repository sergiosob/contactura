import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/stranger-things-theme-song.mp3";
    audio.load();
    audio.play();
  }


  constructor() { }

  ngOnInit() {
    this.playAudio();
  }
}