import {pad} from 'lodash';

export default function PadCircumfixParameters(value : string, length : number, circumfix : string) {

    return pad(value, length, circumfix);
}


