import pad from 'lodash/pad';

export default function PadCircumfixParameters(value : string, length : number, circumfix : string) {

    return pad(value, length, circumfix);
}


