import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/dynamic";
import NumericParameter from "./numeric-parameter";


export default function NumericVoid<MessageType>(

) : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>> {

    return NumericParameter();
}
