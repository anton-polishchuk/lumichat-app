import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  @Input() areLive: boolean;
  @Input() seeAllPerformers: boolean;
  @Input() searchPanel: boolean;
  @Input() listMode: string;
  @Input() performers: number[];
  @Input() search = "";
  @Input() searchCount: number;

  constructor() { }

  ngOnInit() {
      this.getSearchCount();
  }

  public toggleList(mode: string) {
    this.listMode = mode;
    this.getSearchCount();
  }
  public getSearchCount() {
    if(this.searchPanel) {
      let filteredPerformers  = this.performers;
      if(this.listMode === "live"){
        filteredPerformers = this.performers.filter((performer: any) =>
        performer.status === this.listMode);
      }
      this.searchCount = filteredPerformers.filter((performer: any) =>
      performer.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1).length;
    } else {
      return 30;
    }

  }

}
