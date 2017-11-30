import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public popupActive = false;
  public mobileMenuOpened = false;

  constructor() { }

  public activatePopup() {
    document.getElementById("subscribe").style.visibility="visible";
  }

  public toggleMobileMenu() {
    this.mobileMenuOpened = !this.mobileMenuOpened;
  }

  ngOnInit() {
  }

}
