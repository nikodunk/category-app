import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricesort'
})


export class PricesortPipe {
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a.value.price > b.value.price) {
        return 1;
      } else if (a.value.price < b.value.price) {
        return -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}






