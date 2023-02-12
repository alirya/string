import AssertString from '../assert/string.js';
import {StringParameters} from '../assert/throwable/string.js';

export default function String(
    value : unknown,
    error : (value:unknown)=>Error = StringParameters
) : string {

    AssertString(value, error);

    return value;
}
