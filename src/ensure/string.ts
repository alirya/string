import AssertString from '../assert/string';
import {StringParameters} from '../assert/throwable/string';

export default function String(
    value : unknown,
    error : (value:unknown)=>Error = StringParameters
) : string {

    AssertString(value, error);

    return value;
}
