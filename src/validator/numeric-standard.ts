import Numeric from "./numeric";
import NumericString from "../validatable/string/numeric";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function NumericStandard() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>> {

    return Numeric(NumericString);
}
