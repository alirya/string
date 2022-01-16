import Validator from "@alirya/validator/simple";
import Instance from "@alirya/validator/validatable/validatable";
import DigitParameter from "./digit-parameter";

export default function DigitVoid() : Validator<string, '', Readonly<Instance<'', string>>> {

    return DigitParameter()
}

