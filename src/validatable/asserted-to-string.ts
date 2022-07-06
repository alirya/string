import Validatable from '@alirya/validator/validatable/validatable.js';
import ToString from '../to-string.js';
import AssertValid from '@alirya/validator/validatable/assert/valid.js';

export default function AssertedToString<ValidatableType extends Validatable<string>>(validatable : ValidatableType) : ValidatableType & ToString<[]> {

    validatable.toString = function () : string {

        AssertValid(this);

        return validatable.value;
    };

    return validatable;

}
