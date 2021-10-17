import String from "./string";
import StringString from "../validatable/string/string";
import Validator from "@dikac/t-validator/simple";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function StringStandard() : Validator<unknown, string, Readonly<Instance<unknown, string>>> {

    return String(StringString);
}
