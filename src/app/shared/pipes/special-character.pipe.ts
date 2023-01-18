import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'specialCharacter'
})
export class SpecialCharacterPipe implements PipeTransform {

    transform(value: number): string {
        let valueString = value.toString().slice(0, 3);
        if(valueString.length == 1) {
            valueString = valueString.concat('.0');
        }
        return valueString;
    }
}