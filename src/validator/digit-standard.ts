import Digit from "./digit";
import DigitString from "../validatable/string/digit";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function DigitStandard() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>> {

    return Digit(DigitString);
}
