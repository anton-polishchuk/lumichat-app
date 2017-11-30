import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-stream-page',
  templateUrl: './stream-page.component.html',
  styleUrls: ['./stream-page.component.scss']
})
export class StreamPageComponent implements OnInit {

  public performers = [
    { name: "Nadya Nabakova", status: "live", poster: "/assets/images/poster.jpg"},
    { name: "Angie Fae", status: "live", poster: "/assets/images/poster2.png"},
    { name: "Kaylani Rain", status: "live", poster: "/assets/images/poster3.png"},
    { name: "Nicole Gray", status: "live", poster: "/assets/images/perfor_thumb.png"},
    { name: "Nicole Gray", status: "live", poster: "/assets/images/perfor_thumb.png"},
    { name: "Nicole Gray", status: "live", poster: "/assets/images/perfor_thumb.png"},
  ];

  public infoIsOpened = false;
  public listMode = "live";
  public seeAllPerformers = true;

  constructor() {

  }

  public openInfo() {
    this.infoIsOpened = !this.infoIsOpened;
  }

  ngOnInit() {

  }

}
