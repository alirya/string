import Validator from "@alirya/validator/simple";
import Instance from "@alirya/validator/validatable/validatable";
import AlphanumericParameter from "./alphanumeric-parameter";

export default function AlphanumericVoid() : Validator<string, '', Readonly<Instance<'', string>>> {

    return AlphanumericParameter()
}

