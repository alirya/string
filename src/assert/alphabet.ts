import Guard from '../boolean/alphabet.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import {AlphabetParameters} from './throwable/alphabet.js';

export default function Alphabet(
    value : string,
    error : (value:string)=>Error = AlphabetParameters
) : asserts value is string {

    CallbackParameters(value, Guard, error);
}
