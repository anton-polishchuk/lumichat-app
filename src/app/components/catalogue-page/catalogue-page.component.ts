import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-page',
  templateUrl: './catalogue-page.component.html',
  styleUrls: ['./catalogue-page.component.scss']
})
export class CataloguePageComponent implements OnInit {

  public performers = [
    { name: "Nadya Nabakova", status: "live", poster: "/assets/images/poster.jpg"},
    { name: "Angie Fae", status: "live", poster: "/assets/images/poster2.png"},
    { name: "Kaylani Rain", status: "live", poster: "/assets/images/poster3.png"},
    { name: "Nicole Gray", status: "live", poster: "/assets/images/perfor_thumb.png"},
    { name: "Nicole Gray", status: "live", poster: "/assets/images/perfor_thumb.png"},
    { name: "Nicole Gray", status: "off", poster: "/assets/images/perfor_thumb.png"},
    { name: "Nicole Gray", status: "off", poster: "/assets/images/perfor_thumb.png"},
    { name: "Nicole Gray", status: "off", poster: "/assets/images/perfor_thumb.png"},
    { name: "Nicole Gray", status: "off", poster: "/assets/images/perfor_thumb.png"}
  ];

  public listMode = this.detectMobile();

  constructor() { }

  ngOnInit() {
  }

  private detectMobile() {
    if(window.innerWidth <= 768) {
      return "live"
    }
    else {
      return "all"
    }
  }

}
