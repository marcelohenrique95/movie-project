import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'duration'
})
export class DurationPipe implements PipeTransform {

    transform(value: number): string {
        let totalTimeInMinutes = value;
        let hour = Math.floor(totalTimeInMinutes / 60);
        let minutes = totalTimeInMinutes - (hour * 60);
        return hour.toString().concat('h ').concat(minutes.toString()).concat('min');
    }
}