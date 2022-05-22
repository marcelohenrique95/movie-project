import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'specialCharacter'
})
export class SpecialCharacterPipe implements PipeTransform {

    transform(value: number): string {
        let valueString = value.toString();
        let valueFormated = valueString.replace(/[^\w\s]/gi, '');
        return valueFormated.concat('%');
    }
}