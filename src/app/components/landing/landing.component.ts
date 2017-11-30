import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.detectMobile();
  }

  public openPopup() {
    document.getElementById("subscribe").style.visibility="visible";
  }

  private detectMobile() {
    if(window.innerWidth <= 768) {
      let video = document.querySelector('video.promo-video');
      video.removeAttribute("autoplay");
    }
  }

}
