import {MatchParameters} from './match.js';
import Number from '@alirya/number/boolean/number.js';
import String from './string.js';

/**
 * check if {@param value} is numeric
 *
 * @param value
 */
export default function Numeric(value : unknown) : boolean {

    if(value === '') {

        return false;
    }

    if(Number(value)) {

        return true;
    }

    if(!String(value)) {

        return false;
    }


    return MatchParameters(value, /^[-+]*\d*(\.\d*)?$/i);
}
