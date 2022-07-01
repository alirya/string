import Guard from '../boolean/alphabet';
import {CallbackParameters} from '@alirya/function/assert/callback';
import {AlphabetParameters} from './throwable/alphabet';

export default function Alphabet(
    value : string,
    error : (value:string)=>Error = AlphabetParameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
