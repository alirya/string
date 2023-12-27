import Validatable from '@axiona/validator/validatable/validatable.js';
import ToString from '../to-string.js';
import AssertValid from '@axiona/validator/validatable/assert/valid.js';

export default function AssertedToString<ValidatableType extends Validatable<string>>(validatable : ValidatableType) : ValidatableType & ToString<[]> {

    validatable.toString = function () : string {

        AssertValid(this);

        return validatable.value;
    };

    return validatable;

}
