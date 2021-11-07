import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import AlphanumericParameter from "./alphanumeric-parameter";

export default function AlphanumericVoid() : Validator<string, '', Readonly<Instance<'', string>>> {

    return AlphanumericParameter()
}

