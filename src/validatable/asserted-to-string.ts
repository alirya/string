import Validatable from '@alirya/validator/validatable/validatable';
import ToString from '../to-string';
import AssertValid from '@alirya/validator/validatable/assert/valid';

export default function AssertedToString<ValidatableType extends Validatable<string>>(validatable : ValidatableType) : ValidatableType & ToString<[]> {

    validatable.toString = function () : string {

        AssertValid(this);

        return validatable.value;
    };

    return validatable;

}
