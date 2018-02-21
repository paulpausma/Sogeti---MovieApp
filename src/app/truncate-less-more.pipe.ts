import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateLessMore'
})
export class TruncateLessMorePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(value: string, limit: number): string {

      let original = value || '';
      let truncated: string = '';
      let trail: string = '...';

      if (value) {

        const words = value.split(' ');

        //slice up the text to limit
        if (words.length > limit) {
          truncated = words.slice(0, limit).join(' ');
        } else {
          return original;
        }
      }
      return truncated;
  }

}
