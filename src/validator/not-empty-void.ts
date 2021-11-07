import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/dynamic";
import NotEmptyParameter from "./not-empty-parameter";

export default function NotEmptyVoid() : Validator<string, '', true, false, Readonly<Instance<string, string>>> {

    return NotEmptyParameter();
}
