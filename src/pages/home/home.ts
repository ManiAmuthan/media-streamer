import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav_ctrl:NavController, private streamingMedia:StreamingMedia) {

  }

  startVideo() {
    console.log('start video called')
    let options:StreamingVideoOptions = {
      successCallback: () => { console.log('load sucess')},
      errorCallback: () => { console.log('error')},
      orientation: 'portrait'
    }
    this.streamingMedia.playVideo('https://www.sample-videos.com/video/mp4/240/big_buck_bunny_240p_10mb.mp4', options)
  }

}
