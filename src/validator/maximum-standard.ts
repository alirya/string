import Maximum from "./maximum";
import MaximumString from "../validatable/string/maximum";
import Validator from "@dikac/t-validator/validator";
import MaximumValidatable from "../validatable/maximum";

export default function MaximumStandard(
    maximum : number,
    inclusive : boolean
) : Validator<string, string, boolean, boolean, MaximumValidatable<string, string>> {

    return Maximum(maximum, inclusive, MaximumString);
}
