import Validator from '@alirya/validator/validator';
import Instance from '@alirya/validator/validatable/validatable';
import NumericParameter from './numeric-parameter';


export default function NumericVoid<MessageType>(

) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>> {

    return NumericParameter();
}
