import Guard from '../boolean/alphabet';
import Callback from '@alirya/function/assert/callback-parameters';
import AlphabetError from './throwable/alphabet-parameters';

export default function Alphabet(
    value : string,
    error : (value:string)=>Error = AlphabetError
) : asserts value is string {

    Callback(value, Guard, error);
}
