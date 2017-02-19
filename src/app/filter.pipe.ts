import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe {
  transform(value, args) {
    // if (!args[0]) {
    //   return value;
    // } else if (value) {
      return value.filter(item => {
        for (let key in item) {
          if ((typeof item[key].category == 'string' || item[key].category instanceof String) && 
              (item[key].category.indexOf(args) !== -1)) {
            return true;
          }
        }
      });
    // }
  }
}