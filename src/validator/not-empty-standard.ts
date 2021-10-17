import NotEmpty from "./not-empty";
import NotEmptyString from "../validatable/string/not-empty";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function NotEmptyStandard() : Validator<string, '', true, false, Readonly<Instance<string, string>>>{

    return NotEmpty(NotEmptyString);
}
