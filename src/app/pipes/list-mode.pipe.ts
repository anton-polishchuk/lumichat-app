import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listMode'
})
export class ListModePipe implements PipeTransform {

  transform(items: Array<any>, listMode: string): any {
    if(listMode === "all") {
      return items;
    }
    return items.filter(item => item.status === listMode);
  }

}
