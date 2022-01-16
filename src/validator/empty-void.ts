import Validator from "@alirya/validator/simple";
import Instance from "@alirya/validator/validatable/validatable";
import EmptyParameter from "./empty-parameter";

export default function EmptyVoid() : Validator<string, '', Readonly<Instance<'', string>>> {

    return EmptyParameter()
}

