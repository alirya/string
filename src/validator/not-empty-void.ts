import Validator from '@alirya/validator/validator';
import Instance from '@alirya/validator/validatable/validatable';
import NotEmptyParameter from './not-empty-parameter';

export default function NotEmptyVoid() : Validator<string, '', true, false, Readonly<Instance<string, string>>> {

    return NotEmptyParameter();
}
