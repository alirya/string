import Validator from '@alirya/validator/simple';
import Instance from '@alirya/validator/validatable/validatable';
import StringParameter from './string-parameter';

export default function StringVoid() : Validator<unknown, string, Readonly<Instance<unknown, string>>> {

    return StringParameter();
}
