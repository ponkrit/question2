import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(dataList: any[], filterText: string): any {
    if (!dataList || !filterText) {
      return dataList;
    }

    filterText = filterText.toLowerCase();

    return dataList.filter(data => data.toLowerCase().indexOf(filterText) !== -1);
  }
}
