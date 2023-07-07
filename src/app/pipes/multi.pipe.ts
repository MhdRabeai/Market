import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi',
})
export class MultiPipe implements PipeTransform {
  transform(va1: any, va2: any) {
    return +va1 * +va2;
  }
}
