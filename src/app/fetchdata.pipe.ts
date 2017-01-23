import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fetchdata'
})
export class FetchdataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
