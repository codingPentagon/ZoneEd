import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'periodTime'
})
export class PeriodTimePipe implements PipeTransform {
  startTime:number= new Date().setHours(7,30,0,0);
  transform(period: number): string {
    const endTime:number = this.startTime + period*45*60000;
    this.startTime = endTime - 45*60000;
    const start = new Date(this.startTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const end = new Date(endTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    return start + ' - ' + end;
  }
}
