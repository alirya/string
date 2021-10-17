import Alphanumeric from "./alphanumeric";
import AlphanumericString from "../validatable/string/alphanumeric";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";

export default function AlphanumericStandard() : Validator<string, string, boolean, boolean, Readonly<Instance<string, string>>> {

    return Alphanumeric(AlphanumericString);
}
