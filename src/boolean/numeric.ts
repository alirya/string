import {MatchParameters} from './match';
import Number from "../../../number/dist/boolean/number";

/**
 * check if {@param value} is numeric
 *
 * @param value
 */
export default function Numeric(value : string|number) : boolean {

    if(value === '') {

        return false;
    }

    if(Number(value)) {

        return true;
    }

    return MatchParameters(value, /^[-+]*\d*(\.\d*)?$/i);
}
