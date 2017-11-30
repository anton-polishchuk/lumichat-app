import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Array<any>, search: string): any {
    if(!search.length) {
      return items
    };
    return items.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase())>-1);
  }

}
