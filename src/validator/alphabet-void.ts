import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/dynamic";
import AlphabetParameter from "./alphabet-parameter";

export default function AlphabetVoid() : Validator<string, '', Readonly<Instance<'', string>>> {

    return AlphabetParameter()
}

